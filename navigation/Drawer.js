
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import { StackHome, StackCities } from './Stack';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, ImageBackground, ToastAndroid  } from 'react-native'
// importar screens que quiera incorporar
//import PlaceStackNavigation from './Stack' //viene el nombre de la funcion q le ponga a todo lo q tiene el stack

const Drawer = createDrawerNavigator()

const DrawerNavigator = (props) => {

    function Logo() {
        return (
        <Image style={{ width: 50, height: 50, paddingHorizontal: 270, resizeMode:'contain'}} source={require('../assets/newlogo.png')}/>
        )
    }

    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={StackHome} options={{ headerTitle: (props) => <Logo {...props}/>}}/>
            <Drawer.Screen name="Cities" component={StackCities} options={{ headerTitle: (props) => <Logo {...props}/>}}/>
            <Drawer.Screen name="Log in" component={LogIn} />
            <Drawer.Screen name="Sign up" component={SignUp} />
            {/* <Drawer.Screen name="Places" component={PlaceStackNavigation} /> */}
        </Drawer.Navigator>

    );
} 
export default connect(null, null)(DrawerNavigator)