import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export function SingUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sing Up Screen Sing Up Screen</Text>
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
