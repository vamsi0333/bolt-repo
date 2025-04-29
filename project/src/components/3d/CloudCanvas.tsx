import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Cloud } from '@react-three/drei';
import { Vector3 } from 'three';
import { skills } from '../../data/portfolio';

interface CloudTagProps {
  position: [number, number, number];
  text: string;
}

const CloudTag = ({ position, text }: CloudTagProps) => {
  const ref = useRef<any>();
  
  useFrame(({clock}) => {
    if (ref.current) {
      // Gentle floating motion
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.1;
    }
  });
  
  return (
    <Text
      ref={ref}
      position={position}
      color="#ffffff"
      fontSize={0.4}
      maxWidth={2}
      textAlign="center"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

const SkillsCloud = () => {
  const cloudRef = useRef<any>();
  
  useFrame(({clock}) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={cloudRef}>
      <Cloud position={[0, 0, 0]} args={[3, 2]} opacity={0.8} speed={0.4} width={12} />
      {skills.slice(0, 8).map((skill, index) => {
        // Calculate positions in a somewhat spherical arrangement
        const angle = (index / 8) * Math.PI * 2;
        const radius = 2.5 + Math.random() * 0.5;
        const x = Math.cos(angle) * radius;
        const y = (Math.random() - 0.5) * 2;
        const z = Math.sin(angle) * radius;
        
        return <CloudTag key={skill.name} position={[x, y, z]} text={skill.name} />;
      })}
    </group>
  );
};

const CloudCanvas = () => {
  return (
    <div className="h-80 w-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
      <Canvas camera={{ position: new Vector3(0, 0, 8), fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <SkillsCloud />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default CloudCanvas;