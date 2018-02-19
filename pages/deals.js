import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, applyFilter } from '../store'
import withRedux from 'next-redux-wrapper'
import Layout from '../layouts/Layout'
import { Row, Col } from 'react-bootstrap'
import Deal from '../components/Deal'

class Deals extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())

    // return { isServer }
  }

  componentDidMount () {
    // this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    // clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
        <Row>
          <Col xs={12}>
            <h1>Deals</h1>
          </Col>
        </Row>
        <Row>
          {this.props.deals.map((deal) => {
            return (
            <Col key={`deal_${deal.id}`} xs={12} sm={6}>
              <Deal deal={deal} />
            </Col>);
          })}
        </Row>
      </Layout>
    )
  }
}

const mapStateToProps = ({ deals }) => {
  return { deals };
}

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: bindActionCreators(applyFilter, dispatch),
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Deals)
