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
				<Text style = { styles.header }>Think Like a Scientist</Text>
				<Text style = { styles.subheader }>(Tap on a question to view answer)</Text>

				{/* Question 1 */}
				<TouchableOpacity
					onPress = { () => { this.setState({
							showAnswer1: !this.state.showAnswer1
						})}
					}>

					<Text style = { styles.question }>
						<BodyCopy textString = { this.props.q1 } parentFamily = 'black' />
					</Text>
				</TouchableOpacity>

				{/* Answer 1 */}
				{ this.state.showAnswer1 && 
					<Text style = { styles.answer }>
						<BodyCopy textString = { this.props.a1 }/>
					</Text>
				}


				{/* Question 2 */}
				<TouchableOpacity
					onPress = { () => { this.setState({
							showAnswer2: !this.state.showAnswer2
						})}
					}>

					<Text style = { styles.question }>
						<BodyCopy textString = { this.props.q2 } parentFamily = 'black' />
					</Text>
				</TouchableOpacity>

				{/* Answer 2 */}
				{ this.state.showAnswer2 && 
					<Text style = { styles.answer }>
						<BodyCopy textString = { this.props.a2 }/>
					</Text>
				}

				{/* Question 3 */}
				<TouchableOpacity
					onPress = { () => { this.setState({
							showAnswer3: !this.state.showAnswer3
						})}
					}>

					<Text style = { styles.question }>
						<BodyCopy textString = { this.props.q3 } parentFamily = 'black' />
					</Text>
				</TouchableOpacity>

				{/* Answer 3 */}
				{ this.state.showAnswer3 && 
					<Text style = { styles.answer }>
						<BodyCopy textString = { this.props.a3 }/>
					</Text>
				}


			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: colors.ummnhLightGreen,
		borderRadius: 5,
		paddingBottom: 5,
		marginBottom: 5,
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
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.subheader,
		marginBottom: 5,
	},
	question: {
		width: '90%',
		textAlign: 'justify',
		alignSelf: 'center',
		fontFamily: 'Whitney-Black',
		fontSize: fontSizes.body,
		lineHeight: (fontSizes.body * 1.25),
		marginTop: 5,
	},
	answer: {
		width: '90%',
		textAlign: 'justify',
		alignSelf: 'center',
		fontFamily: 'Whitney-Medium',
		fontSize: fontSizes.body,
		lineHeight: (fontSizes.body * 1.25),
		marginTop: 5,
	}
})