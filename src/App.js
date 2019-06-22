import React from 'react';
import * as anvaad from 'anvaad-js'
import Header from './Header'
import ConversionInput from './ConversionInput'
import ConversionResult from './ConversionResult'
import './App.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gurmukhiText: "",
      devnagriText: "",
      englishText: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      gurmukhiText: anvaad.unicode(event.target.value),
      devnagriText: anvaad.translit(event.target.value, 'devnagri'),
      englishText: anvaad.translit(event.target.value, 'english')
    });
  };

  render() {
    return (
      <div>
        <Header />
        <ConversionInput textChange={this.handleInputChange} />
        <ConversionResult outputGurmukhi={this.state.gurmukhiText} outputDevnagri={this.state.devnagriText} outputEnglish={this.state.englishText} />
      </div>
    );
  }
}
