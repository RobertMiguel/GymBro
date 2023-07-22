import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import { HomeScreen, WorkoutScreen } from '../screens/app'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
					tabBarShowLabel: false
				}}
			/>
			<Tab.Screen
				name='Workout'
				component={WorkoutScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
					tabBarShowLabel: false
				}}
			/>
		</Tab.Navigator>
	)
}
