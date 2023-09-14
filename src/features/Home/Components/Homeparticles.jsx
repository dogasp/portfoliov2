import Particles from 'react-particles'
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export function Homeparticles(){
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);
    
    return (
        <Particles id="tsparticles"
            init={particlesInit}
            options={{
                style: {
                    marginTop: "56px",
                    height: "100vh",
                    position: "absolute"
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 125,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 110,
                        enable: true,
                        opacity: 0.35,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 350,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}/>
    )
}