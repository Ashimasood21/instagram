import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/Login';
import Signin from '../screens/auth/Signin';
import Home from '../screens/normal/Home';
import Signup from "../screens/auth/Signup";

const Stack=createStackNavigator();
const StackI=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default StackI;