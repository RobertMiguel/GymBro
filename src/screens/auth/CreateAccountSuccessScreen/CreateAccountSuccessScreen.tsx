import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export function CreateAccountSuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account Sucess Screen</Text>
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
