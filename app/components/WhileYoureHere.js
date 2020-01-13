import React from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

import colors from '../modules/Colors'
import fontSizes from '../modules/FontSizes'
import BodyCopy from '../components/BodyCopy'

export default class StopTLAS extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			showAnswer1: false,
			showAnswer2: false,
			showAnswer3: false,
		}
	}

	render(){
		return(
			<View style = { styles.mainContainer }>
				<Text style = { styles.header }>While You're Here...</Text>

				{/* Sub-exhibit 1 */}				
				<Text style = { styles.subheader }>{ this.props.substop1title }</Text>
				<Text style = { styles.description }>{ this.props.substop1text }</Text>

				{/* Sub-exhibit 1 */}				
				<Text style = { styles.subheader }>{ this.props.substop2title }</Text>
				<Text style = { styles.description }>{ this.props.substop2text }</Text>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: colors.ummnhWarmGray,
		borderRadius: 5,
		paddingBottom: 5
	},
	header: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Whitney-Black',
		color: colors.ummnhDarkBlue,
		fontSize: fontSizes.header,
		marginTop: 5,
		marginBottom: 5,
	},
	subheader: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Whitney-Semibold',
		fontSize: fontSizes.subheader,
		marginBottom: 5,
	},
	description: {
		width: '90%',
		textAlign: 'justify',
		alignSelf: 'center',
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.body,
		lineHeight: (fontSizes.body * 1.25),
		marginTop: 5,
		marginBottom: 5,
	}
})