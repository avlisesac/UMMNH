import React from 'react'

import MapScreen from '../MapScreen'

import colors from '../../modules/Colors'

export default class HighlightsTourShortMap7 extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	render(){
		return (
			<MapScreen showOverlay = { true } xPercent = { 0.81 } yPercent = { 0.68 } />
		)
	}
}