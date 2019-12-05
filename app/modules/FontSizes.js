import {
	Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')

const fontSizes = {
	welcomeHeader: width / 10,
	welcomeBig: width / 15,
	welcomeBody: width / 20,
	button: (width / 20 > 22) ? 22 : width / 20,
	header: (width / 20 > 25) ? 25 : width / 20,
	subheader: (width / 22 > 22) ? 22 : width / 22,
	body: (width / 25 > 22) ? 22 : width / 25,
	buttonIcon: (width / 10 > 50) ? 50 : width / 10
}

export default fontSizes