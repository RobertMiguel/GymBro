import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function TrainingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrainingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
