import React, { useEffect, useRef} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass'; 

const ThreeScene = ({ isDarkMode }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mountElement = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(isDarkMode ? 0x000000 : 0x87CEFA); // Black for dark mode, light blue for light mode

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.set(0, 0, 20);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountElement.appendChild(renderer.domElement);

        // Orbit controls for camera
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true; 
        controls.autoRotate = true; 
        controls.autoRotateSpeed = 0.1;

        // Stars setup (Galaxy-like starfield)
        const starGeometry = new THREE.BufferGeometry();
        const starVertices = [];
        for (let i = 0; i < 20000; i++) {
            const x = THREE.MathUtils.randFloatSpread(2000);
            const y = THREE.MathUtils.randFloatSpread(2000);
            const z = THREE.MathUtils.randFloatSpread(2000);
            starVertices.push(x, y, z);
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({ color: isDarkMode ? 0xffffff : 0x000000, size: 0.7 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Add Nebula clouds (fog)
        const fogColor = new THREE.Color(isDarkMode ? 0x0a0a25 : 0x87CEFA);
        scene.fog = new THREE.Fog(fogColor, 10, 1500);

        // Ambient light and stars
        const ambientLight = new THREE.AmbientLight(isDarkMode ? 0xffffff : 0x000000, 0.2);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(isDarkMode ? 0xffffff : 0x000000, 1);
        pointLight.position.set(100, 100, 200);
        scene.add(pointLight);

        // 3D Objects (Spaceship and Asteroids)
        const loader = new GLTFLoader();
        loader.load('/path-to-your-assets/spaceship.glb', (gltf) => {
            const spaceship = gltf.scene;
            spaceship.position.set(0, -10, -200);
            spaceship.scale.set(2, 2, 2);
            scene.add(spaceship);

            const animateSpaceship = () => {
                spaceship.rotation.y += 0.01;
                spaceship.position.z += 0.1;
                if (spaceship.position.z > 20) spaceship.position.z = -200;
            };

            const animate = () => {
                requestAnimationFrame(animate);
                stars.rotation.y += 0.0005;
                animateSpaceship();

                controls.update();
                composer.render();
            };
            animate();
        });

        // Asteroids rotating around the scene
        const asteroidGroup = new THREE.Group();
        scene.add(asteroidGroup);

        const asteroidLoader = new GLTFLoader();
        asteroidLoader.load('/path-to-your-assets/asteroid.glb', (gltf) => {
            for (let i = 0; i < 15; i++) {
                const asteroid = gltf.scene.clone();
                asteroid.position.set(
                    THREE.MathUtils.randFloatSpread(400),
                    THREE.MathUtils.randFloatSpread(400),
                    THREE.MathUtils.randFloatSpread(400)
                );
                asteroid.scale.set(2, 2, 2);
                asteroid.rotation.set(Math.random(), Math.random(), Math.random());
                asteroidGroup.add(asteroid);
            }

            const animateAsteroids = () => {
                asteroidGroup.rotation.y += 0.001;
                asteroidGroup.rotation.x += 0.0005;
            };

            const animate = () => {
                requestAnimationFrame(animate);
                animateAsteroids();
                controls.update();
                composer.render();
            };
            animate();
        });

        // Adding a planet with animated textures
        const planetGeometry = new THREE.SphereGeometry(5, 64, 64);
        const planetTexture = new THREE.TextureLoader().load('/path-to-your-assets/planet-texture.jpg');
        const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.position.set(-50, 20, -300);
        scene.add(planet);

        // Shooting Stars (Comet-like effect)
        const createShootingStar = () => {
            const starGeometry = new THREE.SphereGeometry(0.5, 16, 16);
            const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffff99 });
            const shootingStar = new THREE.Mesh(starGeometry, starMaterial);

            const startPosition = new THREE.Vector3(
                THREE.MathUtils.randFloatSpread(300),
                THREE.MathUtils.randFloatSpread(300),
                -500
            );
            shootingStar.position.copy(startPosition);
            scene.add(shootingStar);

            const animateShootingStar = () => {
                shootingStar.position.z += 10;
                if (shootingStar.position.z > 100) {
                    shootingStar.position.set(
                        THREE.MathUtils.randFloatSpread(300),
                        THREE.MathUtils.randFloatSpread(300),
                        -500
                    );
                }
            };

            return animateShootingStar;
        };

        const shootingStars = Array(5).fill().map(createShootingStar);

        // Post-processing with bloom and RGB shift effects
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85);
        bloomPass.threshold = 0;
        bloomPass.strength = 1.5; 
        bloomPass.radius = 0.55;
        composer.addPass(bloomPass);

        const rgbShiftPass = new ShaderPass(RGBShiftShader);
        rgbShiftPass.uniforms['amount'].value = 0.0015;
        composer.addPass(rgbShiftPass);

        // Anti-aliasing using SMAA
        const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight);
        composer.addPass(smaaPass);

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0005;
            planet.rotation.y += 0.001; 

            shootingStars.forEach((animateStar) => animateStar()); 

            controls.update();
            composer.render(); 
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountElement.contains(renderer.domElement)) {
                mountElement.removeChild(renderer.domElement);
            }
        };
    }, [isDarkMode]);

    return <div ref={mountRef} className="w-full h-screen" style={{ overflow: 'hidden' }} />;
};

export default ThreeScene;
