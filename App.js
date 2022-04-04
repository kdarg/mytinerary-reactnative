import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer'
import { NavigationContainer } from '@react-navigation/native';
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

    <NavigationContainer>
      <Provider store={reduxStore}>
        <DrawerNavigator/>
      </Provider>
    </NavigationContainer>

  );
}

export default App;