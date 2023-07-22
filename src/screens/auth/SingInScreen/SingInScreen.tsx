import React from 'react'
import {
  View,
  // Text,
  StyleSheet,
} from 'react-native'

import { Button } from '../../../components/Button/Button'

export function SingInScreen() {

  function handleButtonPress() {
    console.log('Pressing')

  }

  return (
    <View style={styles.container}>
      <Button
        onPress={handleButtonPress}
        title='Vamos começar'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
