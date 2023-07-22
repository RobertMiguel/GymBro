import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFED00',
    borderRadius: 10,
    margin: 10,
    minWidth: 150,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
