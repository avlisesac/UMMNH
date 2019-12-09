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
import images from '../modules/Images'

import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'


export default class MapScreen extends React.Component{
	static navigationOptions = {
		title: 'Map',
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	constructor(props){
		super(props)

		this.state = {
			renderedOnce: false
		}
	}

	componentDidMount(){
		this.setState({
			renderedOnce: true
		})
	}

	render(){
		return(
			<SafeAreaView style = { styles.mainContainer }>
				<ReactNativeZoomableView 
					style = { styles.zoomView }
					maxZoom = { 2 }
					minZoom = { 1 }
					zoomStep = { 0.5 }
					initialZoom = { 1 }
					bindToBorders = { true }
					pinchToZoomInSensitivity = { 0 }
					pinchToZoomOutSensitivity = { 0 }
					>
					<Image
						style = { styles.image }
						source = { images.map }
					/>
				</ReactNativeZoomableView>
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
		height: '100%',
		backgroundColor: 'red'

	},
	zoomView: {
		width: '100%',
		flex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
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