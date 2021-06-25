import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import Overlay from '../landing/Overlay'
import Scene from '../landing/Scene'
import Laptop from '../landing/Laptop'
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import '../landing/landing.scss';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function App() {
  // This spring controls the background and the svg fill (text color)
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])
  const { height } = useWindowSize()

  return (
    <div style={{ height, overflowX: 'hidden', overflowY: 'auto' }}>
      <a.main id="canvasContainer" style={{ background }}>
        <Canvas style={{ height }} className="canvas" dpr={[1, 2]}>
          <Scene setBg={set} />
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
        <Overlay fill={fill} />
      </a.main>
      <a.main id="canvasContainer" style={{ background }}>
        <Laptop />
      </a.main>
      <Footer />
    </div>
  )
}
