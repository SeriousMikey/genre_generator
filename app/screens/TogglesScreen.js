import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function Toggles({ navigation }) {
  
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
    // All the switch mechanisms
      <SafeAreaProvider>
        <ScrollView>
          <SafeAreaView>
            <Text>DIMENSIONS</Text>
            <SafeAreaView style={styles.switchContainer}>
              <Switch 
              value={is2DEnabled} onValueChange={() => setis2DEnabled((previousState) => !previousState)}/>
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
        <SafeAreaView>
          <Button
              title="Generate"
              style={styles.togglesButton}
              onPress={() => {
                let options = getToggles
                ([is2DEnabled, is2point5DEnabled, is3DEnabled, isVREnabled, 
                  isAdventureEnabled, isActionEnabled, isSportsEnabled, isSimulationEnabled,
                  isPlatformerEnabled, isRPGEnabled, isFightingEnabled, isRTSEnabled, 
                  isRacingEnabled, isShooterEnabled, isPuzzleEnabled, isCasualEnabled,
                  isStrategyEnabled, isMMORPGEnabled, isStealthEnabled, isPartyEnabled,
                  isSurvivalEnabled, isBattleRoyaleEnabled])
                navigation.navigate("Generator", {genresString: getRandomGenres(options)})
              }}/>
        </SafeAreaView>
      </SafeAreaProvider>
  )
}

export function getToggles(array) {
  // Instance the arrays
  let dimensionsOptions = []
  let genresOptions = []

  // Add all the toggled genres and dimensions to their respective arrays

  if (array[0]) {
    dimensionsOptions.push("2D")
  }
  if (array[1]) {
    dimensionsOptions.push("2.5D")
  }
  if (array[2]) {
    dimensionsOptions.push("3D")
  }
  if (array[3]) {
    dimensionsOptions.push("VR")
  }
  if (array[4]) {
    genresOptions.push("Adventure")
  }
  if (array[5]) {
    genresOptions.push("Action")
  }
  if (array[6]) {
    genresOptions.push("Sports")
  }
  if (array[7]) {
    genresOptions.push("Simulation")
  }
  if (array[8]) {
    genresOptions.push("Platformer")
  }
  if (array[9]) {
    genresOptions.push("RPG")
  }
  if (array[10]) {
    genresOptions.push("Fighting")
  }
  if (array[11]) {
    genresOptions.push("RTS")
  }
  if (array[12]) {
    genresOptions.push("Racing")
  }
  if (array[13]) {
    genresOptions.push("Shooter")
  }
  if (array[14]) {
    genresOptions.push("Puzzle")
  }
  if (array[15]) {
    genresOptions.push("Casual")
  }
  if (array[16]) {
    genresOptions.push("Strategy")
  }
  if (array[17]) {
    genresOptions.push("MMORPG")
  }
  if (array[18]) {
    genresOptions.push("Stealth")
  }
  if (array[19]) {
    genresOptions.push("Party")
  }
  if (array[20]) {
    genresOptions.push("Survival")
  }
  if (array[21]) {
    genresOptions.push("Battle Royale")
  }
  
  return [dimensionsOptions, genresOptions]

}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomGenres(options) {
  return `${options[0][randomNumberInRange(0, options[0].length)]} ${options[1][randomNumberInRange(0, options[1].length)]} ${options[1][randomNumberInRange(0, options[1].length)]}`
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
    },
  
    togglesButton: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      },
  });