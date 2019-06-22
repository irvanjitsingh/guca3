import React from 'react';
import './ConversionResult.css'

export default class ConversionResult extends React.PureComponent {
  render() {
    return (
      <div class="col-md-6">
        <div className="component-conversion-result-main">
        {this.props.outputGurmukhi}
        </div>
        <div className="component-conversion-result-main-hindi">
        {this.props.outputDevnagri}
        </div>
        <div className="component-conversion-result-sub">
        {this.props.outputEnglish}
        </div>
      </div>
    );
  }
}
