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
            <textarea onChange={this.handleChange} />
        </div>
        <div className="chart-english">
        <b>Reference:</b><br/><br/>
        for adha-yaya, use "Î"<br/>
        for pair-yaya, use "´"<br/><br/>
        </div>
        <div className="chart-gurbani">
        Î
        ´
        †
        ˜
        œ
        Í
        ç
        ü
        ¨
        Ú
        </div>
      </div>
    );
  }
}
