import React from "react";
import Particles from "react-particles-js"
import particlesConfig from "./config/particle-config";
import './ParticleBackground.css';

export default function ParticleBackground(style){
    return (
        <Particles params={particlesConfig} id={style.style} ></Particles>
    );
}