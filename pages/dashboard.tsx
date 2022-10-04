import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, Stats, OrbitControls, useGLTF, Sky, Shadow } from '@react-three/drei';
import { Text, Container, Anchor, AppShell, Navbar, Header, Space, Title, Badge, MediaQuery, Burger, Grid, useMantineTheme } from '@mantine/core';
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import Link from 'next/link';
import { IconHandFinger } from '@tabler/icons';
import Model from '../components/Model';
import { CameraControls } from '../components/camera-controls';
import Ring from '../components/Ring';

const DEG45 = Math.PI / 4;

export default function Unit() {
  const cameraControls = useRef<CameraControls | null>(null);
  const ref = useRef();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="xs"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 275, lg: 300 }}>
        <Text><Badge color="lime">Beta</Badge> Work in progress -
          Use your mouse to rotate and zoom in the 3d model.
        </Text><Space h="xl" />
        <Text>Psst... touch the coffee table <IconHandFinger size="15" /></Text>
        <Space h="xl" />
        <Link href="https://kuula.co/share/collection/7khdk?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&inst=es" passHref>
        <Anchor component="a" color="lime">See the previous version here.</Anchor>
        </Link>
        <Space h="xl" />
        <Text>... or get in touch with us</Text>
        <Link href="https://www.instagram.com/conhexa/?hl=en" passHref>
        <Anchor component="a" color="dimmed"> here.</Anchor>
        </Link>
              </Navbar>}
      header={<Header height={60} p="xs">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Grid grow align="center">
            <Grid.Col span={1} style={{ minHeight: 30 }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={theme.colors.gray[6]}
                mr="xs"
              />
            </Grid.Col>
            <Grid.Col span={6} style={{ minHeight: 30 }}>
            <Title order={4} weight={800} align="left">
        <Text inherit variant="gradient" component="span" gradient={{ from: 'lime.6', to: 'lime.0', deg: 45 }}>
          Apartamento modelo
        </Text>
            </Title>
            </Grid.Col>
          </Grid>

        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>

          <Grid justify="space-around" align="left">
            <Grid.Col span={12} style={{ minHeight: 70 }}>
            <Title order={2} weight={800} align="left">
        <Text inherit variant="gradient" component="span" gradient={{ from: 'lime.6', to: 'lime.0', deg: 45 }}>
          Apartamento modelo
        </Text>
            </Title>
            </Grid.Col>
          </Grid>
        </MediaQuery>

              </Header>}
    >
<Container fluid style={{ height: '100%' }}>

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
