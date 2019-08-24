import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Elayout from './components/Elayout/Elayout'



// import IndexPage from './routes/IndexPage';
// 登录页面
import Login from './routes/Login/Login'




// console.log(React);

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route excat path="/home" component={Elayout} >
        </Route>

        <Route path="/login" component={Login} />
        {/* 重定向 */}

        <Redirect excat from="/"
          to={{
            pathname: "/login",
          }}
        />


      </Switch>


    </Router>
  );
}

export default RouterConfig;
