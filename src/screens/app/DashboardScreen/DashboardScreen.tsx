import React from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export function DashboardScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Dashboard Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	}
})
