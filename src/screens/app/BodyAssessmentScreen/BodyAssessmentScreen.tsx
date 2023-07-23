import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export function BodyAssessmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Body AssessmentScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
