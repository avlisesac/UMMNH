import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import {
	withNavigation
} from 'react-navigation'

import StopHero from '../components/StopHero'
import StopQuickInfo from '../components/StopQuickInfo'
import StopAudioTour from '../components/StopAudioTour'
import StopTLAS from '../components/StopTLAS'

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

class StopScreen extends React.Component{
	pushScreen = (screenToPush) => {
		this.props.navigation.push(screenToPush)
	}

	state = {
		bottomButtonTitle: 'Return Home',
		bottomButtonTarget: 'Home'
	}

	componentDidMount = () => {
		if(this.props.isOnTour === true){
			this.setState({
				bottomButtonTitle: this.props.bottomButtonTitle ,
				bottomButtonTarget: this.props.bottomButtonTarget 
			})
		}
	}

	render(){
		return (
			<SafeAreaView style = { styles.safeAreaView}>
				<ScrollView style = { styles.scrollView }>
					<View style = { styles.mainContainer }>
						{/* Hero */}
						<StopHero image = { this.props.heroImage } gallery = { this.props.gallery }/>

						{/* Quick Info */}
						<StopQuickInfo header = { this.props.header } subheader = { this.props.subheader } shortDescription = { this.props.shortDescription }/>

						{/* Audio Tour */}
						<StopAudioTour 
							audioFile = { this.props.audioFile }
							fullText = { this.props.fullText }
						/>

						{/* TLAS Holder */}
						<StopTLAS 
							q1 = { this.props.q1 }
							q2 = { this.props.q2 }
							q3 = { this.props.q3 }
							a1 = { this.props.a1 }
							a2 = { this.props.a2 }
							a3 = { this.props.a3 }/>

						{/* Next Stop (if on tour) or Return (if not on tour)*/}
						<View style = { styles.buttonContainer }>
							<View style = { styles.buttonWrapper }>
								<ButtonEx
									title = { this.state.bottomButtonTitle }
									onPress = { () => { 
										if(this.props.isOnTour === true){
											console.log('please push:', this.props.bottomButtonTarget)
											this.pushScreen(this.props.bottomButtonTarget)
											
										} else {
											console.log('please go home')
											this.props.navigation.popToTop()
										}
									}}
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
			
		)
	}
}

export default withNavigation(StopScreen)

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
	},
	mainContainer: {
		width: '90%',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	buttonContainer: {
		width: '66%',
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	buttonWrapper: {
		marginTop: 10,
		marginBottom: 10,
	}
})