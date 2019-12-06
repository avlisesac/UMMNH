import React from 'react'
import {
	Image,
	SafeAreaView,
	View,
	StyleSheet,
	Text,
} from 'react-native'
import {
	WebView
} from 'react-native-webview'

import colors from '../modules/Colors'

const imageSource = require('../assets/HTML/BlankMap.html')
const webViewSource = Image.resolveAssetSource(imageSource)

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
					source = { webViewSource }
					originWhiteList = {["*"]}
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
		width: '100%',
		flex: 3,
		backgroundColor: 'white'

	},
	mainContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	underView: {
		backgroundColor: 'white'
	},
	underText: {
		padding: 10,
		textAlign: 'center'
	}
})