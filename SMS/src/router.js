import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';




import IndexPage from './routes/IndexPage';
// 登录页面
import Login from './routes/Login/Login'




// console.log(React);

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route excat path="/home" component={IndexPage} >
        </Route>

        <Route path="/login" component={Login} />
        {/* 重定向 */}
        <Redirect from="/"
          to={{
            pathname: "/home",
          }}
        />
      </Switch>


    </Router>
  );
}

export default RouterConfig;
