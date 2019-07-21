import { Main, Color, Shape, Effect, Transform } from '../../contents';

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
  {
    path: '/shape',
    content: Shape,
    exact: true,
  },
  {
    path: '/effect',
    content: Effect,
    exact: true,
  },
  {
    path: '/transform',
    content: Transform,
    exact: true,
  },
];
