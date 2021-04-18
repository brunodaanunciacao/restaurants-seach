import React from 'react'
import Lottie from 'react-lottie'

import animationData from '../../assets/11900-store-icon.json'

export default () => {
    const defaultOptions = {
        loop: true,
        animationData,
        renderingSettings: {
            preserveAspecRatio: 'xMidYMid slice'
        }
    }

    return <Lottie options={defaultOptions} />
}