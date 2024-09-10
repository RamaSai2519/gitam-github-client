import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshStandardMaterial, Float } from '@react-three/drei';
import Octocat from './Octocat'; // Import your Octocat 3D model

const FloatingOctocat = () => {
    const octocatRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        octocatRef.current.rotation.y = t * 0.5;
        octocatRef.current.position.y = Math.sin(t) * 0.5;
    });

    return (
        <Float>
            <mesh ref={octocatRef}>
                <Octocat />
                <meshStandardMaterial attach="material" color="#FFFFFF" />
            </mesh>
        </Float>
    );
};

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            {/* 3D Background */}
            <Canvas style={{ position: 'absolute', zIndex: '-1' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingOctocat />
            </Canvas>

            {/* Rest of your content */}
            <div className="relative z-10">
                {/* Your existing components like Carousel, Features, etc. */}
            </div>
        </div>
    );
};

export default HomePage;