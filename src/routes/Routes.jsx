// src/routes/Routes.js

import AboutUs from '../pages/About/AboutUs';
import Careers from '../pages/Careers/Careers';
import Contacts from '../pages/Contacts/Contacts';
import Events from '../pages/Events/Events';
import GetInvovled from '../pages/GetInvovled/GetInvovled';
import Home from '../pages/Home/Home';
import Locations from '../pages/Locations/Locations';
import News from '../pages/News/News';

const routes = [
  { path: '/', element: <Home />, name: 'Home' },
  { path: '/about', element: <AboutUs />, name: 'About' },
  { path: '/locations', element: <Locations />, name: 'Locations' },
  { path: '/get-involved', element: <GetInvovled />, name: 'Get Involved' },
  { path: '/events', element: <Events />, name: 'Events' },
  { path: '/contact', element: <Contacts />, name: 'Contact' },
  { path: '/careers', element: <Careers />, name: 'Careers' },
  { path: '/news', element: <News />, name: 'News' },
];

export default routes;
