import { Main, Color } from '../../pages';

export default [
  {
    path: '/',
    content: Main,
    exact: true,
  },
  {
    path: '/color',
    content: Color,
    exact: true,
  },
];
