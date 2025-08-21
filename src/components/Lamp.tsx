// src/components/ThreeScene.tsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress, Stars } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

type GLTFResult = any;

// Loader UI
const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          padding: 12,
          background: "rgba(0,0,0,0.6)",
          color: "white",
          borderRadius: 8,
          fontSize: 13,
          textAlign: "center",
          minWidth: 140,
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 6 }}>Loading 3D model</div>
        <div>{Math.round(progress)}%</div>
      </div>
    </Html>
  );
};

const Model: React.FC<{ path?: string }> = ({ path = "/models/lamp.glb" }) => {
  const group = useRef<THREE.Group | null>(null);
  const gltf = useGLTF(path) as GLTFResult;

  useEffect(() => {
    if (!gltf?.scene) return;
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const max = Math.max(size.x, size.y, size.z);
    const desired = 20.6;
    const scale = desired / (max || 1);
    gltf.scene.scale.setScalar(scale);

    const center = new THREE.Vector3();
    box.getCenter(center);
    gltf.scene.position.x += -center.x * scale;
    gltf.scene.position.y += -center.y * 5;
    gltf.scene.position.z += -center.z * scale;

    // 💡 Sijalica dobija emissive materijal
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.name.toLowerCase().includes("bulb")) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#ffffcc",
          emissive: "#ffd966",
          emissiveIntensity: 3,
        });
      }
    });
  }, [gltf]);

  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.0015;
  });

  return (
    <group ref={group}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const SceneContents: React.FC = () => {
  const lightRef = useRef<THREE.PointLight | null>(null);

  useFrame((state) => {
    if (lightRef.current) {
      // 🔥 pulsiranje svetla
      lightRef.current.intensity = 2.5 + Math.sin(state.clock.elapsedTime * 3) * 0.7;
    }
  });

  return (
    <>
      {/* Osnovno osvetljenje */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} castShadow />
      <hemisphereLight intensity={0.3} groundColor={"#222"} />

      {/* 💡 Glavno svetlo lampe */}
      <pointLight
        ref={lightRef}
        position={[0, -0.8, 0]}
        color="#ffd966"
        intensity={3}
        distance={7}
        decay={2}
      />

      {/* ⭐ background efekat */}
      <Stars radius={30} depth={50} count={800} factor={4} fade />

      {/* Model */}
      <Suspense fallback={<Loader />}>
        <Model path="/models/lamp.glb" />
      </Suspense>

      {/* 🎨 Efekti */}
      <EffectComposer>
        {/* Glow */}
        <Bloom intensity={1.8} luminanceThreshold={0.15} luminanceSmoothing={0.85} height={400} />
        {/* Malo hromatske aberacije */}
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.001, 0.001]}
        />
        {/* Vignette za fokus */}
        <Vignette eskil={false} offset={0.3} darkness={0.7} />
      </EffectComposer>

      {/* Orbit kontrola za test */}
      <OrbitControls enablePan={false} enableZoom={false} />
    </>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 1.4, 3.5], fov: 50 }} shadows>
      <SceneContents />
    </Canvas>
  );
};

export default ThreeScene;
