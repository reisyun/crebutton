import React from 'react';
const NotFound = React.lazy(() => import('../../pages/404'));
const Main = React.lazy(() => import('../../pages/contents/Main'));
const Color = React.lazy(() => import('../../pages/contents/Color'));
const Shape = React.lazy(() => import('../../pages/contents/Shape'));
const Effect = React.lazy(() => import('../../pages/contents/Effect'));
const Transform = React.lazy(() => import('../../pages/contents/Transform'));

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
  {
    path: null,
    content: NotFound,
    exact: false,
  },
];
