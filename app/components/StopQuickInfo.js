import React from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Icon,
} from 'react-native-elements'

import fontSizes from '../modules/FontSizes'
import colors from '../modules/Colors'
import BodyCopy from '../modules/BodyCopy'

export default class StopQuickInfo extends React.Component {
	render() {
		return (
			<View style = { styles.mainContainer }>
				<Text style = { styles.header }>Header</Text>
				<View style = { styles.subheaderContainer }>
					<Icon 
						name = 'md-bulb'
						type = 'ionicon'
						size = { fontSizes.subheader }
						color = { colors.ummnhDarkRed }
					/>
					<Text style = { styles.subheader }>Subheader</Text>
				</View>
				<Text style = { styles.shortDescription }>
					<BodyCopy textString = { this.props.shortDescription } />
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {

	},
	header: {
		fontSize: fontSizes.header,
		fontFamily: 'Whitney-Black',
		color: colors.ummnhDarkBlue,
		marginTop: 10,
	},
	subheaderContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	subheader: {
		fontSize: fontSizes.subheader,
		fontFamily: 'Whitney-Semibold',
		color: colors.ummnhDarkRed,
		marginLeft: 5,
	},
	shortDescription: {
		fontSize: fontSizes.body,
		fontFamily: 'Whitney-Medium',
		textAlign: 'justify',
		lineHeight: (fontSizes.body * 1.25),
		marginTop: 5,
	},
})