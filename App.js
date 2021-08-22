import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import welcomeScreen from './src/screens/welcomeScreen';
import quizScreen from './src/screens/quizScreen';

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
          initialParams={{index: 0}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
