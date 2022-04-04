import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import City from '../screens/City'

const Stack = createNativeStackNavigator()

export const StackHome = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={Home}/>
        </Stack.Navigator>
    )
}
export const StackCities = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='cities' component={Cities}/>
            <Stack.Screen name='city' component={City}/>
        </Stack.Navigator>
    )
}

export const StackSignUp = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='stackSignUp' component={SignUp}/>
        </Stack.Navigator>
    )
}

export const StackLogIn = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='stackLogIn' component={LogIn}/>
        </Stack.Navigator>
    )
}
