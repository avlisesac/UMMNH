import React from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import {
	useNavigation
} from '@react-navigation/native'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

function StopHero(props){
	const navigation = useNavigation()
	console.log('passed props to hero..', props)

	return (
		<View style = { styles.mainContainer }>
			<Image
				source = { props.image }
				style = { styles.image }
			/>

			<View style = { styles.buttonWrapper }>
				<ButtonEx
					title = 'Image Gallery'
					onPress = { () => {
						navigation.push('GalleryScreen', {
						gallery: props.gallery
					})
					console.log('pushing gallery with: ', props.gallery)}}
				/>
			</View>
		</View>
	)
}

export default StopHero

// export default class StopHero extends React.Component {
// 	constructor(props){
// 		super(props)
// 		console.log('gallery passed: ', this.props.gallery)
// 	}
//
// 	render() {
// 		const navigation = useNavigation()
//
// 		return (
// 			<View style = { styles.mainContainer }>
// 				<Image
// 					source = { this.props.image }
// 					style = { styles.image }
// 				/>
//
// 				<View style = { styles.buttonWrapper }>
// 					<ButtonEx
// 						title = 'Image Gallery'
// 						onPress = { () => {
// 							navigation.push('GalleryScreen', {
// 							gallery: this.props.gallery
// 						})
// 						console.log('pushing gallery with: ', this.props.gallery)}}
// 					/>
// 				</View>
// 			</View>
// 		)
// 	}
// }


const styles = StyleSheet.create({
	mainContainer:{
		width: '100%',
		aspectRatio: 1920/1080,
	},
	image: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain'
	},
	buttonWrapper: {
		position: 'absolute',
		bottom: 10,
		right: 10,
		marginLeft: 5,
		marginRight: 5,
	},
})
