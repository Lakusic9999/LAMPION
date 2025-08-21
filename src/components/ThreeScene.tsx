import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const ElectricalVisualization: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central electrical hub */}
      <Box args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1E90FF" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* Electrical connections */}
      {[...Array(6)].map((_, i) => (
        <group key={i} rotation={[0, (i * Math.PI * 2) / 6, 0]}>
          <Box args={[0.1, 0.1, 2]} position={[0, 0, 1.5]}>
            <meshStandardMaterial color="#E6F0FF" emissive="#1E90FF" emissiveIntensity={0.2} />
          </Box>
          <Sphere args={[0.2]} position={[0, 0, 2.5]}>
            <meshStandardMaterial color="#1E90FF" emissive="#1E90FF" emissiveIntensity={0.5} />
          </Sphere>
        </group>
      ))}
      
      {/* Animated light source */}
      <pointLight ref={lightRef} position={[0, 0, 0]} color="#1E90FF" intensity={2} />
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="h-64 w-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <ElectricalVisualization />
      </Canvas>
    </div>
  );
};

export default ThreeScene;