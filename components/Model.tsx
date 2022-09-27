import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { CameraControls } from './camera-controls';

type GLTFResult = GLTF & {
  nodes: {
    Alegria_1: THREE.Mesh;
    Alegria_2: THREE.Mesh;
    Alegria_3: THREE.Mesh;
    Alegria_4: THREE.Mesh;
    Alegria_5: THREE.Mesh;
    Alegria_6: THREE.Mesh;
    Alegria_7: THREE.Mesh;
    Alegria_8: THREE.Mesh;
    Alegria_9: THREE.Mesh;
    Alegria_10: THREE.Mesh;
    Alegria_11: THREE.Mesh;
  };

  materials: {
    Puertas: THREE.MeshStandardMaterial;
    Mesa: THREE.MeshStandardMaterial;
    Muros: THREE.MeshStandardMaterial;
    Marcos: THREE.MeshStandardMaterial;
    Zocalos: THREE.MeshStandardMaterial;
    ['alturas.013']: THREE.MeshStandardMaterial;
    ['alturas.019']: THREE.MeshStandardMaterial;
    ['alturas.012']: THREE.MeshStandardMaterial;
    Piso: THREE.MeshStandardMaterial;
    Ventanas: THREE.MeshStandardMaterial;
    Cielo: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF('./alegria4.glb') as GLTFResult;
  const cameraControls = useRef<CameraControls | null>(null);

  return (
<group ref={group} {...props} dispose={null}>
      <group position={[-1.3, 1.9, 0.01]} rotation={[0, -1.57, 0]}>
      <CameraControls ref={cameraControls} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_1.geometry}
          material={materials.Puertas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_2.geometry}
          material={materials.Mesa}
          onClick={() => {
						cameraControls.current?.setLookAt(-3, 1.5, -2, 5, 1.5, 0, true);
					}}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_3.geometry}
          material={materials.Muros}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_4.geometry}
          material={materials.Marcos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_5.geometry}
          material={materials.Zocalos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_6.geometry}
          material={materials['alturas.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_7.geometry}
          material={materials['alturas.019']}
          onClick={() => {
					cameraControls.current?.setLookAt(-3, 1.5, -2, 5, 1.5, 0, true);
					}}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_8.geometry}
          material={materials['alturas.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_9.geometry}
          material={materials.Piso}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_10.geometry}
          material={materials.Ventanas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alegria_11.geometry}
          material={materials.Cielo}
        />
      </group>
</group>
  );
}

useGLTF.preload('./alegria4.glb');
