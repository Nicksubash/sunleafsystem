"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { useTheme } from "./ThemeProvider";

export default function Hero3DGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 }); 
  const sunGlowMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.2 });
  useEffect(() => {
    if (!sunMaterial || !sunGlowMaterial) return;
    if (theme === "dark") {
      sunMaterial.color.set(0xffaa00);
      sunGlowMaterial.color.set(0xffaa00);
      sunGlowMaterial.opacity = 0.2;
    } else {
      sunMaterial.color.set(0xff6600);
      sunGlowMaterial.color.set(0xff6600);
      sunGlowMaterial.opacity = 0.15;
    }
  }, [theme]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // --- Post-processing for glow ---
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.1, 0.1));

    const textureLoader = new THREE.TextureLoader();

    // --- SUN ---
    const sunGeometry = new THREE.SphereGeometry(2.5, 40, 40);
    const sunColor = theme === "dark" ? 0xffaa00 : 0xff6600; // Brighter orange for light theme
    const sunMaterial = new THREE.MeshBasicMaterial({ color: sunColor });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const sunGlowGeometry = new THREE.SphereGeometry(3.2, 40, 40);
    const sunGlowMaterial = new THREE.MeshBasicMaterial({ 
      color: sunColor, 
      transparent: true, 
      opacity: theme === "dark" ? 0.2 : 0.15 
    });
    const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
    scene.add(sunGlow);

    // --- Orbit Rings ---
    const createOrbitRing = (radius: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(100);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const ringColor = theme === "dark" ? 0x00ffff : 0x0066cc; // Cyan for dark, blue for light
      const ringOpacity = theme === "dark" ? 0.15 : 0.25;
      const material = new THREE.LineBasicMaterial({ 
        color: ringColor, 
        transparent: true, 
        opacity: ringOpacity 
      });
      const ring = new THREE.Line(geometry, material);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
    };

    const orbitRadii = [5, 7, 9, 11];
    orbitRadii.forEach(createOrbitRing);

    // --- Cloud Icons Orbiting ---
    const createCloudIcon = (imageUrl: string, size: number, color: number) => {
      const group = new THREE.Group();
      const texture = textureLoader.load(imageUrl);
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
      group.add(mesh);
      scene.add(group);
      return group;
    };

    // Theme-aware cloud colors
    const cloudColors = theme === "dark" 
      ? [0x93c5fd, 0xa5b4fc, 0x67e8f9, 0xfca5a5] // Original bright colors for dark theme
      : [0x3b82f6, 0x6366f1, 0x06b6d4, 0xef4444]; // More muted colors for light theme

    const orbitClouds = [
      { image: '/cloud2.png', radius: 5, speed: 0.5, size: 0.8, color: cloudColors[0] },
      { image: '/cloud2.png', radius: 7, speed: 0.3, size: 0.9, color: cloudColors[1] },
      { image: '/cloud2.png', radius: 9, speed: 0.7, size: 0.7, color: cloudColors[2] },
      { image: '/cloud2.png', radius: 11, speed: 0.2, size: 1, color: cloudColors[3] },
    ];

    const clouds: { group: THREE.Group; angle: number; radius: number; speed: number }[] = orbitClouds.map((data) => {
      const group = createCloudIcon(data.image, data.size, data.color);
      return { group, angle: Math.random() * Math.PI * 2, radius: data.radius, speed: data.speed };
    });

    // --- Mouse parallax ---
    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    const clock = new THREE.Clock();

    // --- Animate ---
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Clouds orbiting
      clouds.forEach((cloud) => {
        cloud.angle += cloud.speed * 0.01;
        cloud.group.position.x = Math.cos(cloud.angle) * cloud.radius;
        cloud.group.position.z = Math.sin(cloud.angle) * cloud.radius;
        cloud.group.position.y = Math.sin(elapsedTime * 0.5 + cloud.angle) * 0.5; // subtle float
        cloud.group.lookAt(camera.position);
      });

      // Sun pulse
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.02;
      sun.scale.set(pulse, pulse, pulse);
      sunGlow.scale.set(pulse, pulse, pulse);

      // Mouse parallax
      scene.rotation.y += (mouseX * 0.3 - scene.rotation.y) * 0.05;
      scene.rotation.x += (mouseY * 0.3 - scene.rotation.x) * 0.05;

      composer.render();
    };
    animate();

    // --- Resize ---
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [theme]);

  return (
    <section
      className={`relative min-h-screen flex items-center transition-colors duration-300 overflow-hidden ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Empowering Your{" "}
            <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}>
              Digital Growth
            </span>
          </h1>
          <p className={`mt-6 text-lg md:text-xl max-w-lg mx-auto md:mx-0 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            We build scalable mobile and web applications tailored to your business needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className={`px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              theme === "dark" ? "bg-cyan-500 text-white hover:bg-cyan-400" : "bg-cyan-600 text-white hover:bg-cyan-500"
            }`}>Get Started</button>
            <button className={`px-6 py-3 rounded-lg border transition ${
              theme === "dark" ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white" : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
            }`}>View Services</button>
          </div>
        </div>
        <div className="flex-1 hidden md:block" style={{ minHeight: "500px" }} />
      </div>
    </section>
  );
}
