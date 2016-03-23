var React = require('react');
var ReactDOM = require('react-dom');
var Forecast = require('../components/Forecast');
var helpers = require('../utils/fetchWeather');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      loading: true,
      city: '',
      forecasts: []
    }
  },

  componentDidMount: function() {
    this.retrieveForecast(this.props.routeParams.city);
  },

  retrieveForecast: function(city) {
    helpers.get5DayForecast(city)
      .then(function(data) {
        this.setState({
          loading: false,
          city: data.city.name,
          forecasts: data.list
        });
      }.bind(this));
  },

  handleClick: function(forecast) {
    this.context.router.push({
      pathname: '/detail/' + this.state.city,
      state: {
        forecast: forecast
      }
    });
  },

  render: function () {
    return (
      <div>
        <Forecast
          loading={this.state.loading}
          city={this.state.city}
          forecasts={this.state.forecasts}
          handleClick={this.handleClick}/>
      </div>
    )
  }
});

module.exports = ForecastContainer;
