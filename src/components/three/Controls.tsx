import { OrbitControls } from '@react-three/drei';

export function Controls() {
  return (
    <OrbitControls 
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      zoomSpeed={0.6}
      panSpeed={0.5}
      rotateSpeed={0.4}
      makeDefault
    />
  );
}