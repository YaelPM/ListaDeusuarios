import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './screens/MainScreen';
import UserDetailsScreen from './screens/UserDetailsScreen'; // Asegúrate de importar la pantalla UserDetailsScreen

const AppNavigator = createStackNavigator(
  {
    Home: MainScreen,
    UserDetails: UserDetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
};

export default App;


