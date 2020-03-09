import React from 'react'

import MapScreen from '../MapScreen'

import colors from '../../modules/Colors'

export default class HighlightsTourShortMap5 extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	render(){
		return (
			<MapScreen showOverlay = { true } xPercent = { 0.18 } yPercent = { 0.15 } />
		)
	}
}