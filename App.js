import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Generator from './app/screens/GeneratorScreen';
import Toggles from './app/screens/TogglesScreen';
import Welcome from './app/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Generator" component={Generator}/>
                <Stack.Screen name="Toggles" component={Toggles}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
