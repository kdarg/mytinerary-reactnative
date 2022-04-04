
import React, {useState, useEffect } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList  } from '@react-navigation/drawer';
import { StackHome, StackCities, StackSignUp,StackLogIn } from './Stack';
import { connect } from 'react-redux';
import { Image } from 'react-native'
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import userActions from '../redux/actions/userActions';

const Drawer = createDrawerNavigator()

const DrawerNavigator = (props) => {

    // const { firstname, urlimage} = props.user 

    const [firstname, setFirstName] = useState(undefined)

    const [urlimage, setUrlImage] = useState(undefined)

    useEffect(() => {
        
        
            setFirstName(props.user?.firstname)
            setUrlImage(props.user?.urlimage)
            refreshUserToken()
        
    }, [props.user])


    console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(props);
    // console.log(props.user);

    const [token, setToken] = useState(undefined)

    useEffect(()=> {
        const asyncStore = async () => {
            let insideStorage = await AsyncStorage.getItem("token")
            if (insideStorage){
                const tokenFromStorage = await AsyncStorage.getItem("token")
                setToken(tokenFromStorage)
                console.log(tokenFromStorage)
            return await props.VerifyToken(tokenFromStorage)

            }
        }
        asyncStore()
    }, [])

    const refreshUserToken = async () => {

        const tokenFromStorage = await AsyncStorage.getItem("token")
        setToken(tokenFromStorage)
        console.log(tokenFromStorage)

    }


function Logo() {
    return (
    <Image style={{ width: 50, height: 50, paddingHorizontal: 270, resizeMode:'contain'}} source={require('../assets/newlogo.png')}/>
    )
}

const CustomDrawerContent = (props) => {
    console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    console.log(props.LogOutUser)

    return (
            
                <DrawerContentScrollView {...props}>

                    <View style={styles.containerUserFoto}>
                    {!props.token 
                        ? <Image style={{width:50, height:50}} source={require('../assets/userIcon.png')} />
                        : <Image style={styles.userProfile} source={{uri:props.urlimage}}/>}
                     {props.token
                      ? <Text style={styles.nameUser}>Welcome {props.firstname}</Text>
                      : <Text style={styles.nameUser}>User</Text>}
                    </View>
                    <DrawerItemList {...props}  /> 
                    {props.token && <DrawerItem label="Log Out" 
                        onPress={() => { 
                            console.log(userActions.LogOutUser)
                            AsyncStorage.removeItem('token')
                            ToastAndroid.showWithGravityAndOffset('Goodbye!', ToastAndroid.LONG, ToastAndroid.CENTER, 25,50)
                            props.refreshUserToken()
                            props.navigation.navigate('Home') 
                        }} 
                        activeBackgroundColor='#3fced341' activeTintColor='#2ab6bb'/>}

                </DrawerContentScrollView>
            

    )
}

return (

    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} token={token} urlimage={urlimage} firstname={firstname} refreshUserToken={refreshUserToken} />}>

        <Drawer.Screen name="Home" component={StackHome} options={{ headerTitle: (props) => <Logo {...props}/>}}/>
        <Drawer.Screen name="Cities" component={StackCities} options={{ headerTitle: (props) => <Logo {...props}/>}}/>
        {/* <Drawer.Screen name="Log in" component={StackLogIn} options={{ headerTitle: (props) => <Logo {...props}/>}}/>
        <Drawer.Screen name="Sign up" component={StackSignUp} options={{ headerTitle: (props) => <Logo {...props}/>}}/> */}

        {!token && <Drawer.Screen name="Log in" component={StackLogIn} options={{ headerTitle: (props) => <Logo {...props}/>}}/>}

        {!token && <Drawer.Screen name="Sign up" component={StackSignUp} options={{ headerTitle: (props) => <Logo {...props}/>}}/>}

    </Drawer.Navigator>

);
} 
const styles = StyleSheet.create({
    nameUser: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
    containerUserFoto: {
        alignItems: 'center'
    },
    drawerCustom:{
        flex:1,
        marginTop:15,
    },
    userProfile:{
        minWidth: 55,
        height: 57,
        borderRadius: 50
    }
})

const mapStateToProps = (state) => {
    return{
        user:state.userReducer.user,
    }
}

const mapDispatchToProps = {
    VerifyToken: userActions.VerifyToken,
    LogOutUser: userActions.LogOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)
