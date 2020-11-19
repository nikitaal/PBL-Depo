import React from 'react';
import Particles from 'react-particles-js';
import options from './config.json'

export default () =>  (
    <Particles
        params={options}
        style={{
            position: "fixed",
            right: "0",
            bottom: "0",
            left: "0",
            zIndex: "-1"
        }}/>
)
