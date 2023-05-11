import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useVideoTexture } from '@react-three/drei'


const Cube = () => {


    return (

        <group dispose={null}>


            <mesh >
                <hemisphereLight intensity={0.15} groundColor='black' />

                <pointLight intensity={1} />

                <mesh >
                    <boxGeometry />
                    <StaticTexture />
                </mesh>
            </mesh>
        </group>
    )
}

const CubeCanvas = () => {
    return (
        <div className="h-96 mt-36" id="cube">

            <Canvas frameloop="always" shadows camera={{ position: [2, 2, 1], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>

                <OrbitControls
                    autoRotate={true}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Cube />
                <Preload all />
            </Canvas>
        </div>
    )
}

const StaticTexture = () => {
    const texture = useVideoTexture('/tv_static.mp4')
    return <meshBasicMaterial map={texture} toneMapped={false} />
}
export default CubeCanvas