import React from 'react'

import MapScreen from '../MapScreen'

import colors from '../../modules/Colors'

export default class HighlightsTourShortMap1 extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	render(){
		return (
			<MapScreen showOverlay = { true } xPercent = { 0.51 } yPercent = { 0.51 } />
		)
	}
}