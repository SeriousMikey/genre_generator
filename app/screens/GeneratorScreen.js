import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider style={{backgroundColor: "black"}}>
      <SafeAreaView style={styles.general}>
      
      </SafeAreaView>
      <SafeAreaView style={styles.togglesButtonHolder}>
        <Text
          style={styles.togglesButton}
          onPress={() => navigation.navigate("Toggles")}>Toggles</Text>
    </SafeAreaView>
    </SafeAreaProvider>
    
  )
}

const styles = StyleSheet.create({
    
  general: {
    flex: 1
  },
  
  togglesButtonHolder: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    height: "7%",
    width: "70%",
    alignSelf: "center",
    borderRadius: 20
  },

  togglesButton: {
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },

  });