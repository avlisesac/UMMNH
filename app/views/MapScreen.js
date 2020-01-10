import React from 'react'
import {
	Image,
	SafeAreaView,
	View,
	StyleSheet,
	Text,
} from 'react-native'

import colors from '../modules/Colors'
import images from '../modules/Images'

import PinchableMapImage from '../components/PinchableMapImage'

export default class MapScreen extends React.Component{
	static navigationOptions = {
		title: 'Map',
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	pushScreen = (screenToPush) => {
		this.props.navigation.push(screenToPush)
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
				<PinchableMapImage style = { styles.mapImage } image = { images.map } showOverlay = { this.props.showOverlay } xPercent = { this.props.xPercent } yPercent = { this.props.yPercent } />
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white'
	},
	mapImage: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain',
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