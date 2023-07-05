import React, { Component } from 'react'
import Hero from './Hero'

export default class Frame extends Component {
    render() {
        return (
        <div className='frame'>
            <Hero />
        </div>
        )
    }
}