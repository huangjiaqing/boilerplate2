import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

const Hello = () => (<div>你好哦哦哦哈哈哈哈</div>);
const Error = () => (<div>错误</div>);
const Api = () => (<div>Api</div>);

export default class Router extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Hello}/>
          <Route exact path='/error' component={Error}/>
          <Route exact path='/api' component={Api}/>
        </Switch>
      </BrowserRouter>
    );
  }
}