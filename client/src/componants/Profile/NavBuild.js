import React, { Component } from 'react'

export class NavBuild extends Component {
  render() {
    return (
      <div class="myNavbar">
        <nav class="navbar navbar-expand-md bg-secondary navbar-dark sticky-top shadow-sm">
          <a class="navbar-brand" href="/home">Portfol.io</a>
          <ul class="navbar-nav" >
            <li class="nav-item">
              <button onclick="logout();" type="button" class="btn btn-outline-danger ml-auto">Logout</button>
            </li>
          </ul>

        </nav>
      </div>
    )
  }
}


export default NavBuild;
