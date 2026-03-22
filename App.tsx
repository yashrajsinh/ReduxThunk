/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//Nav container
import { NavigationContainer } from '@react-navigation/native';
//componenet
import TabNavigataion from './src/navigation/TabNavigataion';
//redux provier
import { Provider } from 'react-redux';
//store
import store from './src/store/store';

NavigationContainer;
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigataion />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
