var React = require('react');
var Link = require('react-router').Link;
var dateHelpers = require('../utils/dateHelpers');

var styles = {
  container: {
    textAlign: 'center'
  },
  forecast: {
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    width: '250px',
    display: 'inline-block'
  }
}

function ForecastList(props) {
  var forecasts = props.forecasts.map(function(data, i) {

    var imgSrc = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
    var date = new Date(data.dt * 1000);

    return (
      <div key={i} onClick={props.handleClick.bind(null, data)} style={styles.forecast}>
        <p>{data.weather[0].description}</p>
        <p>{dateHelpers(date)}</p>
        <img src={imgSrc} alt='Weather Icon'/>
      </div>
    );
  });

  return <div>{forecasts}</div>;
}

function Forecast(props) {
  if (props.loading === true) {
    return <h3>Loading...</h3>
  } else {
    return (
      <div style={styles.container}>
        <h2>{props.city}</h2>
        <p>Pick a day</p>
        <ForecastList
          forecasts={props.forecasts}
          handleClick={props.handleClick}
          />
        <hr />
        <Link to='/'>
          <button className='btn btn-primary'>Home</button>
        </Link>
      </div>
    );
  }
}

module.exports = Forecast;
