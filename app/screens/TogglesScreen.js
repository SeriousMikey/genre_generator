import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function NewScreen({ navigation }) {
  
  // Array
  const [toggles, setToggles] = useState([])

  // Dimensions Toggles
  const [is2DEnabled, setis2DEnabled] = useState(true)
  const [is2point5DEnabled, setis2point5Enabled] = useState(true)
  const [is3DEnabled, setis3DEnabled] = useState(true)
  const [isVREnabled, setisVREnabled] = useState(true)

  // Genres Toggles
  const [isAdventureEnabled, setisAdventureEnabled] = useState(true)
  const [isActionEnabled, setisActionEnabled] = useState(true)
  const [isSportsEnabled, setisSportsEnabled] = useState(true)
  const [isSimulationEnabled, setisSimulationEnabled] = useState(true)
  const [isPlatformerEnabled, setisPlatformerEnabled] = useState(true)
  const [isRPGEnabled, setisRPGEnabled] = useState(true)
  const [isFightingEnabled, setisFightingEnabled] = useState(true)
  const [isRTSEnabled, setisRTSEnabled] = useState(true)
  const [isRacingEnabled, setisRacingEnabled] = useState(true)
  const [isShooterEnabled, setisShooterEnabled] = useState(true)
  const [isPuzzleEnabled, setisPuzzleEnabled] = useState(true)
  const [isCasualEnabled, setisCasualEnabled] = useState(true)
  const [isStrategyEnabled, setisStrategyEnabled] = useState(true)
  const [isMMORPGEnabled, setisMMORPGEnabled] = useState(true)
  const [isStealthEnabled, setisStealthEnabled] = useState(true)
  const [isPartyEnabled, setisPartyEnabled] = useState(true)
  const [isSurvivalEnabled, setisSurvivalEnabled] = useState(true)
  const [isBattleRoyaleEnabled, setisBattleRoyaleEnabled] = useState(true)

  return (
      <SafeAreaProvider>
        <ScrollView>
          <SafeAreaView>
            <Text>DIMENSIONS</Text>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={is2DEnabled} onValueChange={() => setis2DEnabled((previousState) => !previousState)}/>
              <Text>2D</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={is2point5DEnabled} onValueChange={() => setis2point5Enabled((previousState) => !previousState)}/>
              <Text>2.5D</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={is3DEnabled} onValueChange={() => setis3DEnabled((previousState) => !previousState)}/>
              <Text>3D</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isVREnabled} onValueChange={() => setisVREnabled((previousState) => !previousState)}/>
              <Text>VR</Text>
            </SafeAreaView>
          </SafeAreaView>

          <SafeAreaView>
            <Text>GENRES</Text>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isAdventureEnabled} onValueChange={() => setisAdventureEnabled((previousState) => !previousState)}/>
              <Text>Adventure</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isActionEnabled} onValueChange={() => setisActionEnabled((previousState) => !previousState)}/>
              <Text>Action</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isSportsEnabled} onValueChange={() => setisSportsEnabled((previousState) => !previousState)}/>
              <Text>Sports</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isSimulationEnabled} onValueChange={() => setisSimulationEnabled((previousState) => !previousState)}/>
              <Text>Simulation</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isPlatformerEnabled} onValueChange={() => setisPlatformerEnabled((previousState) => !previousState)}/>
              <Text>Platformer</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isRPGEnabled} onValueChange={() => setisRPGEnabled((previousState) => !previousState)}/>
              <Text>RPG</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isFightingEnabled} onValueChange={() => setisFightingEnabled((previousState) => !previousState)}/>
              <Text>Fighting</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isRTSEnabled} onValueChange={() => setisRTSEnabled((previousState) => !previousState)}/>
              <Text>RTS</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isRacingEnabled} onValueChange={() => setisRacingEnabled((previousState) => !previousState)}/>
              <Text>Racing</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isShooterEnabled} onValueChange={() => setisShooterEnabled((previousState) => !previousState)}/>
              <Text>Shooter</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isPuzzleEnabled} onValueChange={() => setisPuzzleEnabled((previousState) => !previousState)}/>
              <Text>Puzzle</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isCasualEnabled} onValueChange={() => setisCasualEnabled((previousState) => !previousState)}/>
              <Text>Casual</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isStrategyEnabled} onValueChange={() => setisStrategyEnabled((previousState) => !previousState)}/>
              <Text>Strategy</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isMMORPGEnabled} onValueChange={() => setisMMORPGEnabled((previousState) => !previousState)}/>
              <Text>MMORPG</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isStealthEnabled} onValueChange={() => setisStealthEnabled((previousState) => !previousState)}/>
              <Text>Stealth</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isPartyEnabled} onValueChange={() => setisPartyEnabled((previousState) => !previousState)}/>
              <Text>Party</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isSurvivalEnabled} onValueChange={() => setisSurvivalEnabled((previousState) => !previousState)}/>
              <Text>Survival</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.switchContainer}>
              <Switch value={isBattleRoyaleEnabled} onValueChange={() => setisBattleRoyaleEnabled((previousState) => !previousState)}/>
              <Text>BattleRoyale</Text>
            </SafeAreaView>
          </SafeAreaView>
        </ScrollView>

      </SafeAreaProvider>
  )
}

function getToggles() {

}

const styles = StyleSheet.create({
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
    },

    text: {
      fontSize: 30,
      padding: 10
    }
  });