import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import './header.scss';
import routes from '../../routes/Routes';

const Header = () => {
  return (
    <Navbar
      expand='lg'
      className='main-header'
      sticky='top'>
      <Container>
        {/* Logo can be added here */}
        {/* <Navbar.Brand href='#'>
          <img src={logo} alt='Logo' className='logo' />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            {routes.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `nav-item-custom ${isActive ? 'active' : ''}`
                }>
                {name}
              </NavLink>
            ))}

            <Form className='d-flex search-wrapper ms-3'>
              <FormControl
                type='search'
                placeholder='Search'
                className='search-input'
                aria-label='Search'
              />
              <BiSearch className='search-icon' />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
