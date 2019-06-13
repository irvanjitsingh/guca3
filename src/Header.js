import React from 'react';
import './Header.css'

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="component-header">
        <div className="component-header-title">
          GUCA v3 ~ ਗੁਰਮੁਖੀ Unicode Conversion via <a href="https://khalisfoundation.github.io/anvaad-js/">AnvaadJS</a>
        </div>
      </header>
    );
  }
}