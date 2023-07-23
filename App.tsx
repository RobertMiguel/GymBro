import React from 'react'
import 'react-native-gesture-handler'

import { SafeAreaView } from 'react-native'

import { Router } from './src/routes/Routes'

export default function App() {
	return (
		<SafeAreaView>
			<Router />
		</SafeAreaView>
	)
}
