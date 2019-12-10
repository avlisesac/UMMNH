import React from 'react'

import MapScreen from './MapScreen'

import colors from '../modules/Colors'

export default class BlankMap extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: colors.ummnhLightRed
		},
	}

	render(){
		return (
			<MapScreen showOverlay = { false } xPercent = { null } yPercent = { null } />
		)
	}
}