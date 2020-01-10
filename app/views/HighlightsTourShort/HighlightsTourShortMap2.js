import React from 'react'

import MapScreen from '../MapScreen'

import colors from '../../modules/Colors'

export default class HighlightsTourShortMap2 extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	render(){
		return (
			<MapScreen showOverlay = { true } xPercent = { 0.68 } yPercent = { 0.38 } />
		)
	}
}