import Head from 'next/head'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
const Layout = (props) => (
  <div>
    <Head>
      <title>staterate.com</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </Head>
    <Grid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Footer</h2>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Layout
