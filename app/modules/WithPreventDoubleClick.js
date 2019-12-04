import React from 'react'
import {
	StyleSheet
} from 'react-native'

import debounce from 'lodash.debounce'
import colors from './Colors'
import fontSizes from './FontSizes'

const withPreventDoubleClick = (WrappedComponent) => {
	class PreventDoubleClick extends React.Component {
		debouncedOnPress = () => {
			this.props.onPress && this.props.onPress()
		}

		onPress = debounce(this.debouncedOnPress, 500, { leading: true, trailing: false })

		render() {
			return <WrappedComponent {...this.props}  buttonStyle = { styles.buttonStyle } titleStyle = { styles.titleStyle } onPress = { this.onPress } />
		}
	}
	
	PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`

	return PreventDoubleClick
}

export default withPreventDoubleClick

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: colors.ummnhYellow
	},
	titleStyle: {
		color: colors.ummnhDarkBlue,
		fontFamily: 'Whitney-Black',
		fontSize: fontSizes.button,
	},
})