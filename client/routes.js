import Loadable from './utils/loadable';

const routes = [
  {
    name: '登录页',
    path: '/login',
    exact: true,
    component: Loadable(() => import('./pages/login'))
  }
];

export default routes;