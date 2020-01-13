import React from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'

import fontSizes from '../modules/FontSizes'

export default class BodyCopy extends React.Component {
	render() {
		const { textString, parentFamily } = this.props

		return(
			formattedString(textString, parentFamily)
		)
	}
}

formattedString = (textString, parentFamily) => {
	let wordArray = textString.split(' ')
	let italicizing = false
	let stopItalicizing = false

	return wordArray.map((word, index, array) => {

		if(word.includes('<i>') && word.includes('</i>')){
			word = word.replace('<i>', '')
			word = word.replace('</i>', '')
			if( parentFamily == 'black'){
				return(
					<Text key = { index } style = { styles.blackItalic }>{ word } </Text>
				)
			}
			return(
				<Text key = { index } style = { styles.medItalic }>{ word } </Text>
			)
		}

		if(word.includes('<i>')){
			italicizing = true
			word = word.replace('<i>', '')
		}


		if(word.includes('</i>')){
			stopItalicizing = true
			word = word.replace('</i>', '')
		}

		if(italicizing){
			if(stopItalicizing){
				italicizing = false
				stopItalicizing = false
			}
			if( parentFamily == 'black'){
				return(
					<Text key = { index } style = { styles.blackItalic }>{ word } </Text>
				)
			}
			return(
				<Text key = { index } style = { styles.medItalic }>{ word } </Text>
			)
		}

		return (
			<Text key = { index }>{ word } </Text>
		)

	})
}

const styles = StyleSheet.create({
	medItalic: {
		fontFamily: 'Whitney-MediumItalic'
	},
	blackItalic: {
		fontFamily: 'Whitney-BlackItalic'
	}
})