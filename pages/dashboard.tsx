import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, Stats, OrbitControls, useGLTF, Sky, Shadow } from '@react-three/drei';
import { Text, Container, Aside, Button, AppShell, Navbar, Header, Footer, Title, Badge } from '@mantine/core';
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
    <AppShell
    padding="xs"
    navbar={<Navbar width={{ base: 300 }} height={500} p="xs">
        <Text>Use your mouse to rotate and zoom in the 3d model. <Badge>Beta</Badge></Text>
    </Navbar>}
    header={<Header height={60} p="xs">
      <Title>Apartamento modelo</Title>
    </Header>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
<Container style={{ width: '100%', height: '100%' }}>
      
    
        <Canvas>
        <CameraControls ref={cameraControls} />
    
        <OrbitControls />
        <Suspense fallback={<Ring />}>
          <Model />
          <ambientLight intensity={0.3} />

    <pointLight position={[10, 10, 10]} />
    <Sky />
    <Shadow />

        </Suspense>
        </Canvas>
      
    </Container>
    
    </AppShell>
    
  );
}
