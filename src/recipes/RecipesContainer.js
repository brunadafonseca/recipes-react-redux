import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RecipeItem, { recipeShape } from './RecipeItem'
import './RecipesContainer.css'
import { connect } from 'react-redux'
import RecipeEditor from './RecipeEditor'
import { fetchRecipes } from '../actions/recipes'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
  }

  componentWillMount() {
    //dispatch the result of an action creator(fetchRecipes)
    // this.props.dispatch(fetchRecipes())
    this.props.fetch()
  }

  renderRecipe = (recipe, index) => {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
          <RecipeEditor />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

const mapDispatchToProps = { fetch: fetchRecipes }

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
