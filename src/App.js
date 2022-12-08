import "./styles/styles.css";
import styled from "styled-components";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TextSection from "./components/TextSection";
import Planet from "./components/Planet";

import mercuryImage from "./img/mercury.jpg";
import venusImage from "./img/venus.jpg";
import earthImage from "./img/earth.jpg";
import marsImage from "./img/mars.jpg";
import jupiterImage from "./img/jupiter.jpg";
import saturnImage from "./img/saturn.jpg";
import uranusImage from "./img/uranus.jpg";
import neptuneImage from "./img/neptune.jpg";

import sunImage from "./img/sun.jpg";

import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function App() {
    let earthSize = 0.05;
    let mercurySize = earthSize * 0.4;
    let venusSize = earthSize * 0.95;
    let marsSize = earthSize * 0.5;
    let jupiterSize = earthSize * 2.5;
    let saturnSize = earthSize * 2;
    let uranusSize = earthSize * 1.5;
    let neptuneSize = earthSize * 1.2;

    let sunSize = earthSize * 3.5;

    let baseOrbit = 0.5;
    let earthOrbit   = baseOrbit + earthSize   * 20;
    let mercuryOrbit = baseOrbit + mercurySize * 10;
    let venusOrbit   = baseOrbit + venusSize   * 10;
    let marsOrbit    = baseOrbit + marsSize    * 60;
    let jupiterOrbit = baseOrbit + jupiterSize * 20;
    let saturnOrbit  = baseOrbit + saturnSize  * 30;
    let uranusOrbit  = baseOrbit + uranusSize  * 50;
    let neptuneOrbit = baseOrbit + neptuneSize * 70;

    let sunOrbit = 0;


    const MercuryTexture = useLoader(TextureLoader, mercuryImage);
    const VenusTexture = useLoader(TextureLoader, venusImage);
    const EarthTexture = useLoader(TextureLoader, earthImage);
    const MarsTexture = useLoader(TextureLoader, marsImage);
    const JupiterTexture = useLoader(TextureLoader, jupiterImage);
    const SaturnTexture = useLoader(TextureLoader, saturnImage);
    const UranusTexture = useLoader(TextureLoader, uranusImage);
    const NeptuneTexture = useLoader(TextureLoader, neptuneImage);

    const SunTexture = useLoader(TextureLoader, sunImage);

  return (
    <Wrapper className="App">
      <TextSection />
      <Canvas clasName="canvas" camera={{ position: [0, 0, 6], fov: 75 }}>
        <OrbitControls  />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
            <Planet 
                size={mercurySize} start={0} orbit={mercuryOrbit} name="Mercury" 
                translationTime={88.0} rotationTime={1408} texture={MercuryTexture}
            />
            <Planet 
                size={venusSize} start={0} orbit={venusOrbit} name="Venus" 
                translationTime={224.7} rotationTime={5832} texture={VenusTexture}
            />
            <Planet 
                size={earthSize} start={0} orbit={earthOrbit} name="Earth" 
                translationTime={365.2} rotationTime={24} texture={EarthTexture}
            />
            <Planet 
                size={marsSize} start={0} orbit={marsOrbit} name="Mars" 
                translationTime={687.0} rotationTime={24.5} texture={MarsTexture}
            />
            <Planet 
                size={jupiterSize} start={0} orbit={jupiterOrbit} name="Jupiter" 
                translationTime={4331} rotationTime={10} texture={JupiterTexture}
            />
            <Planet 
                size={saturnSize} start={0} orbit={saturnOrbit} name="Saturn" 
                translationTime={10747} rotationTime={10.5} texture={SaturnTexture}
            />
            <Planet 
                size={uranusSize} start={0} orbit={uranusOrbit} name="Uranus" 
                translationTime={30589} rotationTime={17} texture={UranusTexture}
            />
            <Planet 
                size={neptuneSize} start={0} orbit={neptuneOrbit} name="Neptune" 
                translationTime={59800} rotationTime={16} texture={NeptuneTexture}
            />

            <Planet 
                size={sunSize} start={0} orbit={sunOrbit} name= {'Sun'} 
                translationTime={0.01} rotationTime={648} texture={SunTexture}
            />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background-image: url("https://www.solarsystemscope.com/textures/download/2k_stars.jpg");
  background-repeat: repeat;

  canvas {
    height: 550px;
  }
`;

