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

NavigationContainer;
function App() {
  return (
    <NavigationContainer>
      <TabNavigataion />
    </NavigationContainer>
  );
}

export default App;
