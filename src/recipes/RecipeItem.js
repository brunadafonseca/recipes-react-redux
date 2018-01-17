import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RecipeCategory from './RecipeCategory'
import LikeButton from '../components/LikeButton'
import './RecipeItem.css'
import { toggleLike } from '../actions/recipes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../components/Title'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export const recipeShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    photo: PropTypes.string,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    liked: PropTypes.bool
})

class RecipeItem extends PureComponent {
  static propTypes = {
    ...recipeShape.isRequired,
    toggleLike: PropTypes.func.isRequired
  }

  toggleLike = () => {
    const { _id } = this.props
    this.props.toggleLike(_id)
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo, liked, _id } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
      <Link to={ `/recipes/${_id}` }>
        <Title content={ title } />
      </Link>
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />

          <h1>{title}</h1>

          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>
        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton
            onChange={this.toggleLike}
            liked={liked}
          />
        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {
  toggleLike
}

export default connect(null, mapDispatchToProps)(RecipeItem)
