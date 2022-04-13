import PropTypes from 'prop-types'

const Container = (props) => {
    return (
      <div className = "container" style={{flex: props.flex, flexDirection: props.flexDirection, backgroundColor: props.color}}>
      {props.children}
      </div>
    )
  }
  
  Container.defaultProps = {
      flex: 1,
      flexDirection: 'row',
      color: 'black'
  }

  Container.propTypes = {
    flex: PropTypes.number,
    flexDirection: PropTypes.oneOf(['row','column'])
  }
  
  export default Container
  