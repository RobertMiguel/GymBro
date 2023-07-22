import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#FFED00',
    borderRadius: 50,
    padding: 16
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
