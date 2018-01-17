import React, { Component } from 'react'
import './App.css'
import Routes from './routes'
import LoadErrors from './components/LoadErrors'
import Loading from './components/Loading'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Loading />
        <Routes />
        <LoadErrors />
      </div>
    )
  }
}

export default App
