import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeScreen from './screens/welcomeScreen';
import quizScreen from './screens/quizScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="WelcomeScreen"
          component={welcomeScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="QuestionScreen"
          component={quizScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
