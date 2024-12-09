import { Stars } from '@react-three/drei';

export function Scene() {
  return (
    <>
      <color attach="background" args={['#000010']} />
      <ambientLight intensity={0.3} />
      <Stars 
        radius={100} 
        depth={50} 
        count={7000} 
        factor={6} 
        saturation={1} 
        fade 
        speed={1}
      />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
}