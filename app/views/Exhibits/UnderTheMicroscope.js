import React from 'react'

import images from '../../modules/Images'
import StopScreen from '../StopScreen'

export default class UnderTheMicroscope extends React.Component {

	render(){
		return (
			<StopScreen
				//Hero Info
				heroImage = { images.heroImages.underthemicroscope }
				gallery = {[
					{
						image: images.galleries.underthemicroscope.image1,
						description: 'What the home of the Giant Cell looked like when it was just forming.'
					},
					{
						image: images.galleries.underthemicroscope.image2,
						description: 'Ensuring that the cell structure is stable.'
					},
					{
						image: images.galleries.underthemicroscope.image3,
						description: 'Watching other cells form - a view from the nucleus.'
					},
					{
						image: images.galleries.underthemicroscope.image4,
						description: 'Our Giant Cell is so big, we need help reaching the top.'
					},
				]}

				//Quick Info
				header = { 'Stop: Giant Cell' }
				subheader = { 'The Building Blocks of Life' }
				shortDescription = { 'PLACEHOLDER' }

				//Audio Tour
				audioFile = { 'mastodons' }

				//Audio Tour Text
				fullText = {
`PLACEHOLDER`
				}

				//TLAS
				q1 = { `Q: PLACEHOLDER` }
				q2 = { `Q: PLACEHOLDER` }
				q3 = { `Q: PLACEHOLDER` }
				a1 = { `A: PLACEHOLDER` }
				a2 = { `A: PLACEHOLDER` }
				a3 = { `A: PLACEHOLDER` }

				//While You're Here
				substop1title = { `PLACEHOLDER` }
				substop1text = { `PLACEHOLDER`}
				substop2title = { `PLACEHOLDER` }
				substop2text = { `PLACEHOLDER` }

				isOnTour = { this.props.isOnTour }
				bottomButtonTitle = { this.props.bottomButtonTitle }
				bottomButtonTarget = { this.props.bottomButtonTarget }

			/>
		)
	}
}