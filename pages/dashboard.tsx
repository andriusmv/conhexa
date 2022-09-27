import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, Stats, OrbitControls, useGLTF, Sky, Shadow } from '@react-three/drei';
import { Text, Container, Aside, Button } from '@mantine/core';
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import Model from '../components/Model';
import { CameraControls } from '../components/camera-controls';
import Ring from '../components/Ring';

const DEG45 = Math.PI / 4;

export default function Unit() {
  const cameraControls = useRef<CameraControls | null>(null);
  const ref = useRef();

  return (
    <Container style={{ width: '100%', height: '100vh' }}>
      <Aside>
    <Button
      onClick={() => {
        cameraControls.current?.rotate(DEG45, 0, true);
      }}
    >
      rotate theta 45deg
    </Button>
    <Button
      onClick={() => {
        cameraControls.current?.reset(true);
      }}
    >
      reset
    </Button>
        <Text>Conhexa Apartamento</Text>
        <Canvas>
        <CameraControls ref={cameraControls} />
    <Stats />
        <OrbitControls />
        <Suspense fallback={<Ring />}>
          <Model />
          <ambientLight intensity={0.3} />

    <pointLight position={[10, 10, 10]} />
    <Sky />
    <Shadow />

        </Suspense>
        </Canvas>
      </Aside>
    </Container>
  );
}
