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

const ExhibitScreen = (props) => {
	return (
    <SafeAreaView style = { styles.safeAreaView}>
			<ScrollView style = { styles.scrollView }>
				<View style = { styles.mainContainer }>
					{/* Hero */}
					<StopHero image = { props.heroImage } gallery = { props.gallery }/>

					{/* Quick Info */}
					<StopQuickInfo header = { props.header } subheader = { props.subheader } shortDescription = { props.shortDescription }/>

					{/* Audio Tour */}
					<StopAudioTour
						audioFile = { props.audioFile }
						fullText = { props.fullText }
					/>

					{/* TLAS Holder */}
					<StopTLAS
						q1 = { props.q1 }
						q2 = { props.q2 }
						q3 = { props.q3 }
						a1 = { props.a1 }
						a2 = { props.a2 }
						a3 = { props.a3 }/>

					{/* While You're Here Holder */}
					<WhileYoureHere
						substop1title = { props.substop1title }
						substop1text = { props.substop1text }
						substop2title = { props.substop2title }
						substop2text = { props.substop2text }
					/>
				</View>
				{ props.children }
			</ScrollView>
		</SafeAreaView>
	)
}

export default ExhibitScreen

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
