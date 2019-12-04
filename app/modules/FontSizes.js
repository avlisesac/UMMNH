import {
	Dimensions,
} from 'react-native'

const { width, height } = Dimensions.get('window')

const fontSizes = {
	welcomeHeader: width / 10,
	welcomeBig: width / 15,
	welcomeBody: width / 20,
}

export default fontSizes