"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import * as THREE from "three";

function SomniModel() {
  const { scene } = useGLTF("/work/somni.glb");
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
      // Closer camera = bigger model
      const dist = maxDim / (2 * Math.tan(fov / 2)) * 1.1;
      camera.position.set(center.x + dist * 0.5, center.y + dist * 0.15, center.z + dist * 0.85);
      camera.lookAt(center);
      (camera as THREE.PerspectiveCamera).near = 0.01;
      (camera as THREE.PerspectiveCamera).far = dist * 10;
      camera.updateProjectionMatrix();
    }
  }, [camera, scene]);

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.PI;
    }
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Center>
      <group ref={ref}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

export function SomniModelViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />
        <directionalLight position={[-4, 2, -2]} intensity={0.8} />
        <directionalLight position={[0, -2, 4]} intensity={0.4} />
        <Suspense fallback={null}>
          <SomniModel />
          <Environment preset="city" environmentIntensity={0.6} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1}
          maxDistance={15}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/work/somni.glb");
