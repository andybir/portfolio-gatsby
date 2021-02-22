import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://instagram.com/andybirosak"
            className="icon fa-instagram"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/andybir"
            className="icon fa-github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/andrewbirosak/"
            className="icon fa-linkedin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/user-138151681"
            className="icon fa-soundcloud"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="label">Soundcloud</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:andy.birosak@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="icon fa-envelope-o"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      {/* <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul> */}
    </div>
  </div>
)

export default Footer
