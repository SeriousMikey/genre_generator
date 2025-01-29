import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';


export default function GenreGenerator({ navigation }) {
  const route = useRoute();
  const { genresString } = route.params;

  return (
    <SafeAreaProvider style={{backgroundColor: "white"}}>
      <SafeAreaView style={styles.general}>
        <Text style={{fontSize: 40}}>{genresString}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    
  general: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  });