import React from 'react';
import ReactDom from 'react-dom';
import App from './router';

const render = (Component) => {
  ReactDom.render(
    <Component />,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept(['./router'], async () => {
    const { default: next } = await import('./router');
    render(next);
  });
}