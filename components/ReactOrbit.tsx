"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ReactOrbit() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); } catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 7;
    const group = new THREE.Group();
    scene.add(group);
    const material = new THREE.MeshBasicMaterial({ color: 0x55c8ff });
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.025, 12, 120), material);
      ring.scale.y = 0.38;
      ring.rotation.z = i * Math.PI / 3;
      group.add(ring); rings.push(ring);
    }
    group.add(new THREE.Mesh(new THREE.SphereGeometry(0.19, 32, 32), material));
    const dots = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(i % 3 === 0 ? 0.045 : 0.025, 12, 12), material);
      const angle = i * Math.PI * 2 / 12;
      dot.position.set(Math.cos(angle) * (2 + (i % 2) * .22), Math.sin(angle) * (2 + (i % 2) * .22), (i % 3 - 1) * .2);
      dots.add(dot);
    }
    group.add(dots);
    const resize = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    resize(); window.addEventListener("resize", resize);
    let frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animate = () => { group.rotation.y = reduced ? -.18 : Math.sin(Date.now() * .00035) * .25; group.rotation.z = reduced ? -.12 : Date.now() * .00008; renderer.render(scene, camera); if (!reduced) frame = requestAnimationFrame(animate); };
    animate();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); renderer.dispose(); rings.forEach(r => r.geometry.dispose()); material.dispose(); el.removeChild(renderer.domElement); };
  }, []);
  return <div className="orbit-canvas" ref={mount} aria-hidden="true" />;
}
