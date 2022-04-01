import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Cities from '../screens/Cities'

// import SignIn from '../screens/SignIn'
// import SignUp from '../screens/SignUp'
// import City from '../screens/City'
// import { Icon } from 'react-native-elements'
// import { Image } from 'react-native'

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
            {/* <Stack.Screen name='City' component={City}/> */}
        </Stack.Navigator>
    )
}

// export const SignUpStack = () => {
//     return( 
//         <stack.Navigator screenOptions={{headerShown:false}}>
//             <stack.Screen name='stackSignUp' component={SignUp}/>
//         </stack.Navigator>
//     )
// }

// export const SignInStack = () => {
//     return( 
//         <stack.Navigator screenOptions={{headerShown:false}}>
//             <stack.Screen name='stackSignIn' component={SignIn}/>
//         </stack.Navigator>
//     )
// }


// export default Navigator