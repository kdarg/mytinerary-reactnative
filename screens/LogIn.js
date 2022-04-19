import React, {useState} from "react";
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import Footer from '../components/Footer';
import { Button } from 'react-native-elements';

const LogIn = (props) =>{

    const [logInUsers, setLogInUsers] = useState({ email: '', password: '' })

    const handleSubmit = async () => {

		if(logInUsers.email === '' || logInUsers.password === ''){

			ToastAndroid.showWithGravityAndOffset('You must fill all the fields!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)

		}else{
            
            try{
                let res = await props.logInUser(logInUsers)
                if(!res.data.success){
                    ToastAndroid.showWithGravityAndOffset('Email and password dont match', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
                }else{
                    ToastAndroid.showWithGravityAndOffset('"Hey, wrelcome!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
                }
            }catch (error){
               console.log(error)
                return false
               }
               

			// const logedUser = {
			// 	email: event.target[0].value,
			// 	password: event.target[1].value,

			// }
			// props.logInUser(logedUser)
		}
	}


    return(

        <ScrollView style={{backgroundColor:'rgb(255, 234, 252)', height:'100%'}}>
        <View style={{display:'flex', justifyContent:"center", alignContent:"center", alignItems:'center'}}>
            <View style={styles.signUpContainer}>
            <Text style={styles.signUpTitle}>Create Account</Text>
        
            <View style={styles.inputContainer}>
        
            <TextInput style={styles.inputs} placeholder="Email address" onChange={(e) => setLogInUsers({...logInUsers, email:e.nativeEvent.text})}/>

            <TextInput style={styles.inputs} secureTextEntry={true} placeholder="Password"onChange={(e) => setLogInUsers({...logInUsers, password:e.nativeEvent.text})}/>

            <Button title="Log in" buttonStyle={styles.getStarted} onPress={handleSubmit}/>
            
            <TouchableOpacity onPress={() => props.navigation.navigate('Sign up')}>
                <Text style={styles.already}>Don't have an account yet?</Text>
                <Text style={styles.loginhere}>Sign up here</Text>
            </TouchableOpacity >

            </View>
        
            </View>
            </View>
            <Footer/>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    getStarted: {
        backgroundColor: "rgb(221, 46, 113);",
        color: "white",
        marginTop:10,
        alignSelf: "center",
        alignItems:"center",
    },

    signUpContainer: {
        marginTop: "10%",
        
        alignItems: "center",
        display:'flex',
        width: '85%',
        backgroundColor:"white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: '25%',
    },
    noResults: {
        color: "black",
        fontSize: 18,
        fontWeight: "500",
        padding: "2%",
    },
    signUpTitle:{
        marginTop: "10%",
        marginBottom: "5%",
        fontFamily:"ZenLoop_400Regular",
        textTransform:"uppercase",
        fontSize:35,
        letterSpacing: 2,
        color: "rgb(221, 46, 113)",
    },
    inputs: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#E988AE",
        height: 40,
        width: 250,
        margin: 10,
        padding: 10,
    },
    inputContainer:{
        alignItems:"center",
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginBottom: 20,
        backgroundColor: 'black',
        width: 150,
        height: 50,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    loginhere: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 0.2,
        color: 'rgb(221, 46, 113)',
        marginBottom:'10%',
        textAlign:'center',
    },
    already:{
        marginTop: 5,
    },
    inputSelect:{
        fontSize:5,
    },
    dropdown1BtnStyle:{
        borderColor: "#E988AE",
        borderStyle: "solid",
        backgroundColor:'white',
        height: 45,
        width: 250,
        margin: 9,
        padding: 5,
        borderRadius: 2,
        borderWidth: 2,
        borderRadius: 5,
    }

})
const mapStateToProps = (state) => {
    return{
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {
	logInUser: userActions.logInUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);