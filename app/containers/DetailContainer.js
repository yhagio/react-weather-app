var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function () {
    return (
      <div>
        <Detail
          city={this.props.location.state.weather}
          forecast={this.props.location.state.forecast} />
      </div>
    )
  }
});

module.exports = DetailContainer;
