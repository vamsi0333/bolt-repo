import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text3D, Center } from '@react-three/drei';
import { Group } from 'three';

interface CubeProps {
  position: [number, number, number];
  color: string;
  size: number;
  rotationSpeed?: number;
}

const Cube = ({ position, color, size, rotationSpeed = 0.01 }: CubeProps) => {
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += rotationSpeed;
      ref.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={ref} position={position}>
      <RoundedBox args={[size, size, size]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
      </RoundedBox>
    </group>
  );
};

const FloatingText = () => {
  const textRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={[0, 0, 0]}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.4}
          height={0.1}
          curveSegments={4}
          bevelEnabled={true}
          bevelThickness={0.005}
          bevelSize={0.005}
          bevelOffset={0}
          bevelSegments={2}
        >
          DEVOPS
          <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.1} />
        </Text3D>
      </Center>
    </group>
  );
};

// Fallback component in case of loading errors
const ErrorFallback = () => {
  return (
    <group>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Cube position={[-2, -0.5, -1]} color="#3b82f6" size={0.8} rotationSpeed={0.005} />
        <Cube position={[2, -0.2, -2]} color="#0ea5e9" size={1} rotationSpeed={0.007} />
        <Cube position={[0, 1, -1.5]} color="#1d4ed8" size={0.6} rotationSpeed={0.01} />
        <Suspense fallback={<ErrorFallback />}>
          <FloatingText />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;