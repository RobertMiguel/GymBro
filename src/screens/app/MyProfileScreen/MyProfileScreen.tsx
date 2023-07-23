import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export function MyProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Profile Screen</Text>
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
