import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

function HomePage() {
  return (
    <h1>Test</h1>
  )
}

function App() {
  return (
    <div className="App">
      <div className="menuContainer">
        <h1>Menu</h1>
        <ul>
          <li><a className="active" href="contact.asp">Chat Feed</a></li>
          <li><a href="about.asp">Commands</a></li>
          <li><a href="about.asp">Settings</a></li>
        </ul>
      </div>
      <div className="contentContainer">
        <h1>Features to write</h1>
        <p>
          Settings page with credential inputs (pass protected)
        </p>
        <p>
          Start chat button if settings are filled in
        </p>
        <p>
          live chat view from IRC
        </p>
        <p>
          toggle view for bot commands to turn on and off
        </p>
      </div>
    </div>
  )
}

export default App
