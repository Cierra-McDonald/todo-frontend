import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'


export default withRouter (class Header extends Component {
    render() {
        return (
            
             <div className="header">
             Todo-List!
             {
                  this.props.location.pathname !== '/'
                      &&<NavLink exact activeClassName="selected" to="/" className="nav-link">
                  Home Page
              </NavLink>
              }
              {
                  this.props.location.pathname !== '/signup'
                      && <NavLink exact activeClassName="selected" to="/signup" className="nav-link">
                  Sign-Up
              </NavLink>
              }
              {
                  this.props.location.pathname !== '/login'
                      && <NavLink exact activeClassName="selected" to="/login" className="nav-link">
                  Log-In
              </NavLink>
              }
              {
                  this.props.location.pathname !== '/mytodolist'
                      && <NavLink exact activeClassName="selected" to="/mytodolist" className="nav-link">
                  Todo-List
              </NavLink>
              }

          </div>
        )
    }
})
