import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore, applyFilter } from '../store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/Page'
import Layout from '../layouts/Layout'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(applyFilter({ filter: 'sharts' }));

    return { isServer }
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
        <h1>About</h1>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: bindActionCreators(applyFilter, dispatch),
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
