"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";
import AnimatedButton from "./buttons/AnimatedButton";
import Link from "next/link";

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
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 🌍 Globe Group (moved right + tilted)
    const globeGroup = new THREE.Group();
    const globeRadius = 9.5;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 68, 68);

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
      color: theme === "dark" ? 0x00ffff : 0x0066cc,
      size: 0.2,
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(globeGeometry, pointsMaterial);
    globeGroup.add(points);

    // ✨ Move & tilt the globe
    globeGroup.position.set(8, 0, -1);
    globeGroup.rotation.z = THREE.MathUtils.degToRad(-25);
    scene.add(globeGroup);

    // 🌠 Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 800;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 200;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: theme === "dark" ? 0xffffff : 0x888888,
      size: 0.1,
      transparent: true,
      opacity: theme === "dark" ? 0.6 : 0.3,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // 🪩 Company Logo (curved badge on top of globe)
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load(
      theme === "dark" ? "/icons/logo.png" : "/icons/logo-light.png"
    );
    // Create a curved plane that matches the globe's surface curvature
    const logoGeo = new THREE.PlaneGeometry(9, 9, 32, 32);
    const logoMat = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      alphaTest: 0.1,
    });
    
    // Bend the plane to match the globe's curvature at the top
    const positions = logoGeo.attributes.position;
    const radius = globeRadius + 1.5;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const distance = Math.sqrt(x * x + y * y);
      const z = distance > 0 ? Math.sqrt(Math.max(0, radius * radius - distance * distance)) - radius : 0;
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
    logoGeo.computeVertexNormals();
    
    const logoMesh = new THREE.Mesh(logoGeo, logoMat);
    // Position at the top of the globe and rotate to face upward
    logoMesh.position.set(0, globeRadius, 0);
    logoMesh.rotation.x = -Math.PI / 2;
    // Add to globe group so it rotates with the globe
    globeGroup.add(logoMesh);

    // 🪩 Second Logo on the opposite side (bottom of globe)
    const logoGeo2 = new THREE.PlaneGeometry(9, 9, 32, 32);
    const logoMat2 = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      alphaTest: 0.1,
    });
    
    // Bend the plane to match the globe's curvature
    const positions2 = logoGeo2.attributes.position;
    for (let i = 0; i < positions2.count; i++) {
      const x = positions2.getX(i);
      const y = positions2.getY(i);
      const distance = Math.sqrt(x * x + y * y);
      const z = distance > 0 ? Math.sqrt(Math.max(0, radius * radius - distance * distance)) - radius : 0;
      positions2.setZ(i, z);
    }
    positions2.needsUpdate = true;
    logoGeo2.computeVertexNormals();
    
    const logoMesh2 = new THREE.Mesh(logoGeo2, logoMat2);
    // Position at the bottom of the globe and rotate to face downward
    logoMesh2.position.set(0, -globeRadius, 0);
    logoMesh2.rotation.x = Math.PI / 2;
    globeGroup.add(logoMesh2);

    // Set initial rotation so one logo is visible on page load
    globeGroup.rotation.y = Math.PI / 4;

    // ☁️ Orbiting Icons
    const createIcon = (params: OrbitParams): THREE.Mesh => {
      const texture = textureLoader.load(params.path);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      });
      const geometry = new THREE.PlaneGeometry(2.2, 2.2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return mesh;
    };

    const iconsData: OrbitParams[] = [
      { path: "/icons/app.png", radius: 10, speed: -0.25, initialAngle: 0.5, tilt: 2.5 },
      { path: "/icons/web.png", radius: 10.5, speed: -0.3, initialAngle: 2.0, tilt: 3 },
      { path: "/icons/cloud.png", radius: 11, speed: -0.2, initialAngle: 4.0, tilt: -2.5 },
      { path: "/icons/aws.png", radius: 9.5, speed: -0.35, initialAngle: 5.0, tilt: 0 },
    ];

    const icons = iconsData.map(createIcon);

    // 🖱️ Mouse Interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // 🎬 Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotate globe slowly
      globeGroup.rotation.y = elapsed * 0.15;
      stars.rotation.y = elapsed * 0.02;

      icons.forEach((mesh, i) => {
        const p = iconsData[i];
        const angle = elapsed * p.speed + p.initialAngle;
        mesh.position.x = Math.cos(angle) * p.radius + 8;
        mesh.position.z = Math.sin(angle) * p.radius;
        mesh.position.y = Math.sin(angle * 1.5) * p.tilt;
        mesh.lookAt(camera.position);
      });

      // Mouse parallax
      const targetY = mouseX * 0.3;
      const targetX = mouseY * 0.3;
      scene.rotation.y += (targetY - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetX - scene.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // 📱 Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      globeGeometry.dispose();
      edges.dispose();
      pointsMaterial.dispose();
      lineMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      logoGeo.dispose();
      logoMat.dispose();
    };
  }, [theme]);

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Empowering Your{" "}
            <span
              className={
                theme === "dark" ? "text-cyan-400" : "text-cyan-600"
              }
            >
              Digital Growth
            </span>
          </h1>
          <p
            className={`mt-6 text-lg md:text-xl max-w-lg mx-auto md:mx-0 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We build scalable mobile and web applications tailored to your
            business needs. From startups to enterprises — we deliver
            innovative IT solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <AnimatedButton to="/contact">Get Started</AnimatedButton>
            <Link
              href="/services"
              className={`px-6 py-3 rounded-lg border transition ${
                theme === "dark"
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                  : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
              }`}
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="flex-1 hidden md:block" style={{ minHeight: "500px" }} />
      </div>
    </section>
  );
}
