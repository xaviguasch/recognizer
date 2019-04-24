import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css'
const API_KEY = process.env.REACT_APP_CLARIFAI_API_KEY

const app = new Clarifai.App({
  apiKey: API_KEY
})

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  onInputChange = event => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        'https://samples.clarifai.com/metro-north.jpg'
      )
      .then(
        function(response) {
          console.log(response)

          // do something with responseconsole.log(response);
        },
        function(err) {
          // there was an error
        }
      )
  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />

        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*
        <FaceRecognition />*/}
      </div>
    )
  }
}

export default App
