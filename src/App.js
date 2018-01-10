import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'

class App extends Component {
  updateRecipe(id, update) {
    return null
  }

  render() {
    return (
      <div className="App">
        <RecipesContainer
          updateRecipe={this.updateRecipe.bind(this)} />
      </div>
    )
  }
}

export default App
