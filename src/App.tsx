import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const myApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default myApp;
