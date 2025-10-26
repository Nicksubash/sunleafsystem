"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { useTheme } from "./ThemeProvider";

interface OrbitParams {
  path: string;
  radius: number;
  speed: number;
  initialAngle: number;
  tilt: number;
}

export default function Hero3DGlobe(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

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
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    // 🌍 Globe Group (moved right + tilted)
    const globeGroup = new THREE.Group();
    const globeRadius = 8;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);

    // Wireframe lines
    const edges = new THREE.EdgesGeometry(globeGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: theme === "dark" ? 0x00d9ff : 0x0066cc,
      transparent: true,
      opacity: theme === "dark" ? 0.3 : 0.5,
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    globeGroup.add(wireframe);

    // Glowing points
    const pointsMaterial = new THREE.PointsMaterial({
      color: theme === "dark" ? 0x00ffff : 0x00000,
      size: 0.20,
      transparent: true,
      opacity: theme === "dark" ? 0.8 : 0.8,
    });
    const points = new THREE.Points(globeGeometry, pointsMaterial);
    globeGroup.add(points);

    // ✨ Move & tilt the globe
    globeGroup.position.set(8, 0, -1); // move right (X = 8)
    globeGroup.rotation.z = THREE.MathUtils.degToRad(-30.0); // earth-like tilt

    scene.add(globeGroup);

    // 🪩 Company Logo (centered on globe)
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load(
      theme === "dark" ? "/icons/logo.png" : "/icons/logo-light.png"
    );
    const logoGeo = new THREE.CircleGeometry(4.5, 64);
    const logoMat = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      opacity: 0.9,
    });
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    logoMesh.position.set(7, 0, 4.5); // same X as globeGroup
    scene.add(logoMesh);

    // ☁️ Orbiting Icons
    const createIcon = (params: OrbitParams): THREE.Mesh => {
      const texture = textureLoader.load(params.path);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      });
      const geometry = new THREE.PlaneGeometry(1.2, 1.2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return mesh;
    };

    const iconsData: OrbitParams[] = [
      { path: "/icons/app.png", radius: 10, speed: 0.3, initialAngle: 0.5, tilt: 2.5 },
      { path: "/icons/web.png", radius: 10.5, speed: -0.25, initialAngle: 2.0, tilt: 3 },
      { path: "/icons/cloud.png", radius: 11, speed: 0.2, initialAngle: 4.0, tilt: -2.5 },
      { path: "/icons/aws.png", radius: 11, speed: 0.2, initialAngle: 4.0, tilt: 3 },
    ];

    const icons = iconsData.map(createIcon);

    // 🖱️ Mouse Interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // 🎬 Animation
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      globeGroup.rotation.y = elapsed * 0.1;
      globeGroup.rotation.x = Math.sin(elapsed * 0.05) * 0.1;

      icons.forEach((mesh, i) => {
        const p = iconsData[i];
        const angle = elapsed * p.speed + p.initialAngle;
        mesh.position.x = Math.cos(angle) * p.radius + 8; // +8 to follow shifted globe
        mesh.position.z = Math.sin(angle) * p.radius;
        mesh.position.y = Math.sin(angle * 1.5) * p.tilt;
        mesh.lookAt(camera.position);
      });

      // Smooth parallax
      const targetY = mouseX * 0.3;
      const targetX = mouseY * 0.3;
      scene.rotation.y += (targetY - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetX - scene.rotation.x) * 0.05;

      composer.render();
    };
    animate();

    // 📱 Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [theme]);

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white" : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
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
          <p
            className={`mt-6 text-lg md:text-xl max-w-lg mx-auto md:mx-0 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We build scalable mobile and web applications tailored to your business needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-cyan-500/25"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 shadow-cyan-600/25"
              }`}
            >
              Get Started
            </button>
            <button
              className={`px-6 py-3 rounded-lg border transition-all hover:scale-105 ${
                theme === "dark"
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-400/25"
                  : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white hover:shadow-lg hover:shadow-cyan-600/25"
              }`}
            >
              View Services
            </button>
          </div>
        </div>

        <div className="flex-1 hidden md:block" style={{ minHeight: "500px" }} />
      </div>
    </section>
  );
}
