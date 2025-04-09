import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { UserContextProvider } from './src/contexts/UserContext';
import Navigator from './src/navigation/StackNavigator';


export default function App() {
  return (
    <UserContextProvider>
      <Navigator />
    </UserContextProvider>
  );
}
