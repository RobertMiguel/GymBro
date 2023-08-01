import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  MyProfileScreen,
} from '../screens/app/MyProfileScreen/MyProfileScreen'

const Drawer = createDrawerNavigator()

export function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Meu Perfil'
        component={MyProfileScreen}
      />
    </Drawer.Navigator>
  )
}
