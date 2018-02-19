import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store'
import { Button } from 'react-bootstrap'

class AddCount extends Component {
  add = () => {
    this.props.addCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <h1>AddCount: <span>{count}</span></h1>
        <Button onClick={this.add} bsStyle="primary">Add To Count_</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
