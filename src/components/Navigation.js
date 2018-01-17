import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import signOut from '../actions/users/sign-out'
import signIn from '../actions/users/sign-in'

export class Navigation extends PureComponent {
  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <nav className='navigation'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>
            { signedIn ?
              <a href='#' onClick={this.signOut.bind(this)}>Sign out</a> :
              <div>
                <Link to='/sign-up'>Sign up</Link>
                <Link to='/sign-in'>Sign in</Link>
              </div>
            }
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut, signIn })(Navigation)
