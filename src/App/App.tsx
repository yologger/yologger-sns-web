import React from 'react';
import styled from '~/styledComponents'
import Layout from '~/components/templates/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from '~/components/pages/Home';
import Login from '~/components/pages/Login';
import NotFound from '~/components/pages/NotFound';
import Account from '~/components/pages/Account';
import Signup from '~/components/pages/Signup';
import BoardNew from '~/components/pages/Board/BoardNew';
import BoardEdit from '~/components/pages/Board/BoardEdit';
import BoardDetail from '~/components/pages/Board/BoardDetail';

const App = () => {
  return <>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/board/new" component={BoardNew} />
        <Route exact path="/board/edit" component={BoardEdit} />
        <Route exact path="/board/:bid(\d+)" component={BoardDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </>
}

export default App;