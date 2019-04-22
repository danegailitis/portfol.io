import React from 'react';
import NavBuild from '../NavBuild'
import './index.css';
const HOME = () => (
  <div>
    <nav class="navbar navbar-expand-md bg-secondary navbar-dark sticky-top shadow-sm">
      <a class="navbar-brand" href="#home">Portfol.io</a>
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a href="/login" class="nav-link ml-auto">Login</a>
        </li>
      </ul>

    </nav>
    <div id="home" class="container-fluid">
      <h1 id="title" class="text-center">Portfol.io</h1>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
      <div id="status">
      </div>

      <div id="bio">
      </div>

    </div>

    <div id="about" class="container-fluid">
      <h1>About</h1>
      <p>
        Portfol.io allows you to visualize your stock portfolios, and provides some analytics as well.
      </p>
    </div>

    <div id="friends" class="container-fluid">
      <h1>Friends</h1>
      <p>

      </p>
    </div>
  </div>
);

export default HOME;
