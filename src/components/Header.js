import React from 'react'
import { Link } from 'react-router-dom'

let pathList = [
  "/",
  "/roster",
  "/schedule"
];

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header style={{ display: "none" }}>
    <nav>
      <ul>
        {pathList.map((path, key) =>
          <li key={key}>
            <Link to={path}></Link>
          </li>
        )}
      </ul>
    </nav>
  </header>
)

export default Header
