import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppDrawer } from './AppDrawer'
import { AppTabBar } from './AppTabBar'

export function Router() {
  return (
    <NavigationContainer>
      <AppTabBar />
    </NavigationContainer>
  )
}
