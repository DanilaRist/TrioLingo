import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

// Import your screens
import Homescreen from './Homescreen';
import Learningscreen from './Learningscreen';
import Quizscreen from './Quizscreen';
import Resultsscreen from './Resultsscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Learning" component={Learningscreen} />
          <Stack.Screen name="Quiz" component={Quizscreen} />
          <Stack.Screen name="Results" component={Resultsscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
