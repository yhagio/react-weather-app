var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  button: {
    margin: '10px 0 0 35px'
  }
};

function GetCity(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        className='form-control'
        placeholder='Enter City'
        onChange={props.onUpdateInput}/>
      <button
        className='btn btn-success'
        style={styles.button}>
        Get Weather
      </button>
    </form>
  )
}

GetCity.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onUpdateInput: PropTypes.func.isRequired
};

module.exports = GetCity;
