import React from 'react'
import {
	Animated,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Icon
} from 'react-native-elements'
import {
	PanGestureHandler,
	PinchGestureHandler,
	State,
} from 'react-native-gesture-handler'

import colors from '../modules/Colors'
import fontSizes from '../modules/FontSizes'

export default class PinchableMapImage extends React.Component {
	panRef = React.createRef()
	pinchRef = React.createRef()

	constructor(props){
		super(props)

		let { width } = Dimensions.get('window')

		this.state = {
			wrapperWidth: 0,
			wrapperHeight: 0,
		}

		console.log('constructor. wrapperWidth:', this.state.wrapperWidth, 'wrapperHeight:', this.state.wrapperHeight)


		//Panning
		this._translateX = new Animated.Value(0)
		this._translateY = new Animated.Value(0)
		this._lastOffset = { x: 0, y: 0 }
		this._onPanGestureEvent = Animated.event(
			[
				{
					nativeEvent: {
						translationX: this._translateX,
						translationY: this._translateY,
					},
				},
			],
			{ useNativeDriver: true }
		)

		//Pinching
		this._baseScale = new Animated.Value(1)
    	this._pinchScale = new Animated.Value(1)
    	this._scale = Animated.multiply(this._baseScale, this._pinchScale)
    	this._lastScale = 1
    	this._onPinchGestureEvent = Animated.event(
      		[{ nativeEvent: { scale: this._pinchScale } }],
      		{ useNativeDriver: true }
    	)
	}

	_onPinchHandlerStateChange = event => {
    	if (event.nativeEvent.oldState === State.ACTIVE) {
      		this._lastScale *= event.nativeEvent.scale
      		this._baseScale.setValue(this._lastScale)
      		this._pinchScale.setValue(1)
      	}
    }

	_onPanHandlerStateChange = event => {
  		if (event.nativeEvent.oldState === State.ACTIVE){
  			this._lastOffset.x += event.nativeEvent.translationX
  			this._lastOffset.y += event.nativeEvent.translationY
  			this._translateX.setOffset(this._lastOffset.x)
  			this._translateX.setValue(0)
  			this._translateY.setOffset(this._lastOffset.y)
  			this._translateY.setValue(0)
  		}
  	}

  	render() {
  		return (
  			<PinchGestureHandler
  				{ ...this.props }
  				ref = { this.pinchRef }
  				simultaneousHandlers = { this.panRef }
  				onGestureEvent = { this._onPinchGestureEvent }
  				onHandlerStateChange = { this._onPinchHandlerStateChange }>
  			
  				<Animated.View style = { styles.pinchWrapper }>

  					<PanGestureHandler
  						ref = { this.panRef }
  						simultaneousHandlers = { this.pinchRef }
  						onGestureEvent = { this._onPanGestureEvent }
  						onHandlerStateChange = { this._onPanHandlerStateChange }>

  						<Animated.View style = { styles.panWrapper } collapsable = { false }>

  							<Animated.View style = {[
  								styles.mainContainer,
  								{
  									transform: [{
  										scale: this._scale
  									},
  									{
  										translateX: Animated.divide(this._translateX, this._scale)
  									},
  									{
  										translateY: Animated.divide(this._translateY, this._scale)
  									}]
  								}
  							]}>
  								<Image 
	  								style = { styles.image }
	  								source = { this.props.image }
	  							/>								
  							</Animated.View>
  						</Animated.View>
  					</PanGestureHandler>
  				</Animated.View>
  			</PinchGestureHandler>
  		)
  	}
}

const styles = StyleSheet.create({
	pinchWrapper: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white',
	},
	panWrapper: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		width: '100%',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	mainContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	comboWrapper: {
		width: '100%',
		aspectRatio: 1680/1280,
	},
	image: {
		width: '100%',
		flex: 1,
		resizeMode: 'contain',
	}
})