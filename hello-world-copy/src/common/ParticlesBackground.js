import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { PRIMARY_COLOR } from '../styles/theme';

const particlesParams = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 900,
            },
        },
        color: {
            value: PRIMARY_COLOR,
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: PRIMARY_COLOR,
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            onresize: {
                enable: true,
                density_auto: true,
                density_area: 400,
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 97.44926547616143,
                line_linked: {
                    opacity: 1,
                },
            },
            push: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
};

export default class ParticlesBackground extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            // DO NOT move the style in a css file. Particles has a peculiar way of handling them.
            <Particles
                params={particlesParams}
                style={{
                    minHeight: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
            />
        );
    }
}
