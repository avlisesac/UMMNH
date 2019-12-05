import React from 'react'
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
} from 'react-native'
import {
	WebView
} from 'react-native-webview'

import colors from '../modules/Colors'

export default class MapScreen extends React.Component{
	static navigationOptions = {
		title: 'Map',
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	render(){
		return(
			<SafeAreaView style = { styles.mainContainer }>
				<WebView
					style = { styles.webView }
					source = {{ uri: 'https://firebasestorage.googleapis.com/v0/b/ummnh-33f82.appspot.com/o/images%2Fmaps%2FMuseumMap.png?alt=media&token=2bd3953e-5cd7-4456-8932-de01ea0fe035'}}
				/>
				<View style = { styles.underView }>
					<Text style = { styles.underText }>This is below! Can you see how below this is? It is quite below, indeed.</Text>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	webView: {
		flex: 3,
		backgroundColor: 'green'

	},
	mainContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	underView: {
		backgroundColor: 'grey'
	},
	underText: {
		padding: 10,
		textAlign: 'center'
	}
})