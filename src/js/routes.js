import Main from './Main';
import ContactUs from './pages/contactus/ContactUs';
import NotFound from './components/NotFound';
import RegisterModule from './pages/registration/RegisterModule';

export default {
  path: '/',
  component: Main,
  indexRoute: { component: ContactUs },
  childRoutes: [
    {
      path: '/register',
      component: RegisterModule
    },
    {
      path: '*',
      component: NotFound
    }
  ]
};
