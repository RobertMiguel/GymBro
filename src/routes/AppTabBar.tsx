import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  DashboardScreen,
  WorkoutScreen,
  HealthScreen
} from '../screens'

const Tab = createBottomTabNavigator()

export function AppTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="Health" component={HealthScreen} />
    </Tab.Navigator>
  )
}
