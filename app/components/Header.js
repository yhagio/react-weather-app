var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
// var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  header: {
    width: '100%',
    background: 'linear-gradient(#FF9966, #FF5500)',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  a: {
    textDecoration: 'none'
  },
  h1: {
    margin: 0,
    padding: '10px',
    color: '#fff'
  }
}


function Header(props) {
  return (
    <div style={styles.header}>
      <Link to='/' style={styles.a}>
        <h1 style={styles.h1}>Weather</h1>
      </Link>
    </div>
  )
}

module.exports = Header;
