import Loadable from './utils/loadable';

const routes = [
  {
    name: '登录',
    path: '/login',
    exact: true,
    component: Loadable(() => import('./pages/login'))
  },
  {
    name: '组织',
    path: '/org',
    exact: true,
    component: Loadable(() => import('./pages/org'))
  },
];

export default routes;