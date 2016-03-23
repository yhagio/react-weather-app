var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('../components/Header');

var styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}
var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
