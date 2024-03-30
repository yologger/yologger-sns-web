import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '~/components/pages/Home';
import Login from '~/components/pages/Login';
import NotFound from '~/components/pages/NotFound';
import Layout from '~/components/templates/Layout/Layout';
import styled from '~/styledComponents'

const App = () => {
  return <>
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Login} path="/login" />    
        <Route component={NotFound} path='*'/>
      </Switch>
    </Layout>
  </>
}

export default App;