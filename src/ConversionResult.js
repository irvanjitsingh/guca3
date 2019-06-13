import React from 'react';
import PropTypes from 'prop-types';
import './ConversionResult.css'

export default class ConversionResult extends React.PureComponent {
  render() {
    return (
      <div class="col-md-6">
        <div className="component-conversion-result-main">
        {this.props.outputGurmukhi}
        </div>
        <div className="component-conversion-result-sub">
        {this.props.outputDevnagri}
        </div>
      </div>
    );
  }
}