import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem, { recipeShape } from './RecipeItem'
import './RecipesContainer.css'
import { connect } from 'react-redux'
import RecipeEditor from './RecipeEditor'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
  }

  renderRecipe = (recipe, index) => {
    return <RecipeItem
      key={index}
      { ...recipe }
    />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
          <RecipeEditor />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes
})

export default connect(mapStateToProps)(RecipesContainer)
