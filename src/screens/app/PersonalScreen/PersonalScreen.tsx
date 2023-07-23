import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export function PersonalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
