import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Generator from './app/screens/GeneratorScreen';
import Toggles from './app/screens/TogglesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Genre Generator" component={Generator}/>
                <Stack.Screen name="Toggles" component={Toggles}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
