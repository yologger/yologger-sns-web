import React from 'react';
import styled from '~/styledComponents'
import Layout from '~/components/templates/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from '~/components/pages/Home';
import Login from '~/components/pages/Login';
import NotFound from '~/components/pages/NotFound';
import Account from '~/components/pages/Account';
import PostNew from '~/components/pages/Post/PostNew';
import Signup from '~/components/pages/Signup';

const App = () => {
  return <>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>    
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/post/new" component={PostNew}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </Layout>
  </>
}

export default App;