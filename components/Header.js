import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Link from 'next/link'

const cities = [
  {
    id: 1,
    name: 'Hotel Charts',
  },
  {
    id: 2,
    name: 'Queefer\'s Nest',
  },
  {
    id: 3,
    name: 'Howrya Motel',
  }
];

const regions = [
  {
    id: 1,
    name: 'Queefland',
  },
  {
    id: 2,
    name: 'Bonertown',
  }
];

const Header = (props) => {

  const city_links = cities.map(city =>
    <MenuItem eventKey={`cities_${city.id}`}>
      <Link href='/deals'><a>{city.name}</a></Link>
    </MenuItem>
  );

  const region_links = regions.map(region =>
    <MenuItem eventKey={`regions_${region.id}`}>
      <Link href='/deals'><a>{region.name}</a></Link>
    </MenuItem>
  );

  return ( 
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
         <Link href='/'><a>staterate.com</a></Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown eventKey={'cities'} title="Cities">
          {city_links}
          <MenuItem divider />
          <MenuItem eventKey={'cities_all'}>See all...</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={'cities'} title="Regions">
          {region_links}
          <MenuItem divider />
          <MenuItem eventKey={'regions_all'}>See all...</MenuItem>
        </NavDropdown>
        <NavItem>
          <Link href='/about'><a>About</a></Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Header
