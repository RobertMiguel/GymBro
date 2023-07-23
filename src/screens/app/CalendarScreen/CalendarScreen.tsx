import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CalendarScreen(n</Text>
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
