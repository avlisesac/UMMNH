import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native'

import StopHero from '../components/StopHero'
import StopQuickInfo from '../components/StopQuickInfo'
import StopAudioTour from '../components/StopAudioTour'
import StopTLAS from '../components/StopTLAS'
import WhileYoureHere from '../components/WhileYoureHere'

export default class ExhibitScreen extends React.Component{
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

						{/* While You're Here Holder */}
						<WhileYoureHere
							substop1title = { this.props.substop1title }
							substop1text = { this.props.substop1text }
							substop2title = { this.props.substop2title }
							substop2text = { this.props.substop2text }
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

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
