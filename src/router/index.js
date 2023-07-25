import React from 'react';
import {GetStarted, Login, Register, Splash, UploadPhoto} from '../pages';
const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    </Stack.Navigator>
  );
};

export default Router;
