// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import Home from './screens/Home';
// import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer'
import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './src/Navigation/Drawer'
import DrawerNavigator from './navigation/Drawer';
import { useFonts, ZenLoop_400Regular, ZenLoop_400Regular_Italic } from '@expo-google-fonts/zen-loop';
import { CroissantOne_400Regular } from '@expo-google-fonts/croissant-one';
// import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import AppLoading from 'expo-app-loading';

const App = () => {

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  let [fontsLoaded] = useFonts({
    ZenLoop_400Regular,
    CroissantOne_400Regular,
    // Pacifico_400Regular,
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (

    <Provider store={reduxStore}>
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  </Provider>

  
    // <View style={styles.container}>
    //   <StatusBar/>
    //   <View>
    //   <Text>HOLA.</Text>
    //   </View>
      
    //   <Home/>
    // </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;