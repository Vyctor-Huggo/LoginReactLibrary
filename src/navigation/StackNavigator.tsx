import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import InfoScreen from '../screens/InfoScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../interfaces';


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator 
          initialRouteName="LoginScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#5D3A00',  // Altere para a cor desejada
            },
            headerTintColor: '#FFF',  // Cor do texto no header
            headerTitleStyle: {
              fontWeight: 'bold',  // Estilo do título no header
            },
          }}
          >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="InfoScreen" component={InfoScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Navigator;