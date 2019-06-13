import React from 'react';
import PropTypes from 'prop-types'
import './ConversionInput.css'


export default class ConversionInput extends React.PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div class="col-md-6">
        <div className="component-conversion-input">
          <div>
            <input placeholder = {"gurmuKI ivc kuC ilKo (gurbwxI-AKr vrqo)"} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}