import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.titleText}>
                <Text style={{fontSize: 40}}>Genre Generator</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonHolder}>
            <Button
                title="Start"
                onPress={() => navigation.navigate("Toggles")}
            />
            </SafeAreaView>
        </SafeAreaProvider>
        
    )
}

const styles = StyleSheet.create({
    
  buttonHolder: {
    flex: 3,
    justifyContent: "center",
    width: "70%",
    alignSelf: "center"
  },

  titleText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
  });