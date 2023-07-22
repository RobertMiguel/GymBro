import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Button from '../../../components/Button/Button'

export function SingInScreen() {
  return (
    <View style={styles.container}>
      <Text>Qualquer Coisa</Text>
      <Button />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
