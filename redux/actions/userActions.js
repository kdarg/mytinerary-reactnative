
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ToastAndroid} from 'react-native'

const userActions = {
    
    // SIGN UP

    signUpUser: (userData) => {
        return async (dispatch, getState) => {

            try{

                const res = await axios.post('https://mytinerary-arguello.herokuapp.com/api/auth/signup', {userData})

                console.log(res)
                dispatch({type: 'message', payload: res.data});

                if(res.data.success){
                    AsyncStorage.setItem("token", res.data) //chan
                    dispatch({type:"user", payload: res.data})
                }
                return res
                // dispatch({type: 'message', payload: res.data});
                // return res
            // console.log(res.data)
            // console.log(res.data.message)
            // console.log(userData)

            // if(res.data.success){
            //     props.navigation.navigate('Home')
            //     ToastAndroid.showWithGravityAndOffset('Welcome!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50)
            // }else if (res.data.errors){ 
            //     let errors= res.data.errors
            //     errors.map(error => ToastAndroid.showWithGravityAndOffset( error.message, ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50))
            //     }else{
            //         ToastAndroid.showWithGravityAndOffset('Please try again!', ToastAndroid.CENTER, ToastAndroid.BOTTOM, 25,50)
            //     }

            } catch (error) {
                console.log(error);
            }

        }
    }, 


    // LOG IN

    logInUser: (logedUser) => {
        return async (dispatch, getState) => {

            try{
                console.log(logedUser)

                const loginResponse = await axios.post('https://mytinerary-arguello.herokuapp.com/api/auth/login', { logedUser })

                if(loginResponse.data.success){
                    AsyncStorage.setItem('token', loginResponse.data.response.token)
                    dispatch({type:"user", payload: loginResponse.data.response.logedUser || loginResponse.data.response.userData})
                }
                return loginResponse

                // return loginResponse

                // if(!user.data.error){
                //     ToastAndroid.showWithGravityAndOffset('Email and password dont match', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
                // }else{
                //     ToastAndroid.showWithGravityAndOffset('Welcome Back!', ToastAndroid.SHORT, ToastAndroid.CENTER, 25,50)
                // }

                    //console.log(user.data)

                

            }catch (error) {
                console.log(error);
            }

        }
    },

    // LOG OUT

    LogOutUser: ()=>{
        return async (dispatch, getState) => {

        // localStorage.removeItem('token')
            console.log('6666666666666666666666666666666666666666666666')

            AsyncStorage.removeItem('token')

            dispatch({type:"user", payload: null})

            ToastAndroid.showWithGravityAndOffset('Goodbye! ', ToastAndroid.LONG, ToastAndroid.CENTER, 25,50)
            
        } 
    },

    // VERIFY TOKEN

    VerifyToken: (token) => {

        return async (dispatch, getState) => {

            const user = await axios.get('https://mytinerary-arguello.herokuapp.com/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            // console.log(user)
            
            if (user.data.success) {
                dispatch({ type: 'user', payload: user.data.response });
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            } else {
                // localStorage.removeItem('token')
                AsyncStorage.removeItem('token')
            }
            



            //     try{
            //         let response = await axios.get('https://mytinerary-arguello.herokuapp.com/api/auth/signInToken', {
            //     headers: {
            //         Authorization: 'Bearer '+ token,
            //     }
            // })
            //     dispatch({type:"user", payload:{token, response}})
            //     }catch(error) {
            //        return  dispatch({type:'user_logout' })
            //     }
            

       

        }
    }

}

export default userActions;