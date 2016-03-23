var React = require('react');
var ReactDOM = require('react-dom');
var GetCity = require('../components/GetCity');
var helpers = require('../utils/fetchWeather');

var styles = {
  home: {
    backgroundImage: "url('app/images/pattern.svg')",
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  h1: {
    margin: '-50px 0 10px 0'
  },

  button: {
    margin: '10px 0 0 35px'
  }
};

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return { city: '' }
  },

  updateInput: function(e) {
    this.setState({ city: e.target.value });
  },

  submitForm: function(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city)
    // helpers.getCurrentWeather(this.state.city);
    this.setState({ city: '' });
  },

  render: function () {
    return (
      <div style={styles.home}>
        <h1 style={styles.h1}>Enter a City and State</h1>
        <GetCity
          onUpdateInput={this.updateInput}
          handleSubmit={this.submitForm}
          />
      </div>
    )
  }
});

module.exports = GetCityContainer;
