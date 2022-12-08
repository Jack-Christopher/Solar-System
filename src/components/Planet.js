import React, { useMemo } from "react";
import { Sphere } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

import * as THREE from "three";
import { Line } from '@react-three/drei'

export default function Planet(props) {
    const myMesh = React.useRef()
    let time = props.start

    useFrame(() => {
        // rotate
        myMesh.current.rotation.y += 1/ (2*props.rotationTime);
        // translate in circle
        myMesh.current.position.x = Math.cos(time) * props.orbit*2 - 0
        myMesh.current.position.y = Math.sin(time) * props.orbit - 0

        time += 5* 1/props.translationTime        
    })


    const points = useMemo(() =>    
        new THREE.EllipseCurve(
            0, 0, 
            props.orbit*2, props.orbit,
            0, 2 * Math.PI, 
            false, 0).getPoints(100)
    , [])
    // print points
    console.log(points)
    

    return (
        <>
            <mesh ref={myMesh}>
                <Sphere ref={myMesh} args={[props.size, 32, 32]}>
                    <meshBasicMaterial map={props.texture} />
                </Sphere>
                
            </mesh>        
            <mesh>
                <Line points={points} color="gray" lineWidth={1} />
            </mesh>
        </>
    );
}
