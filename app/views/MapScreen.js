import React from 'react'
import {
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
			<View style = { styles.mainContainer }>
				<WebView
					style = { styles.webView }
					containerStyle = { { marginTop: 0, marginBottom: 0} }
					source = {{ uri: 'https://firebasestorage.googleapis.com/v0/b/ummnh-33f82.appspot.com/o/images%2Fmaps%2FMuseumMap.png?alt=media&token=2bd3953e-5cd7-4456-8932-de01ea0fe035'}}
				
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	webView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	mainContainer: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		//alignItems: 'center'
	}
})