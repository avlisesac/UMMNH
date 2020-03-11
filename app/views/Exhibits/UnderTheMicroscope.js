import React from 'react'

import images from '../../modules/Images'
import ExhibitScreen from '../ExhibitScreen'

const UnderTheMicroscope = (props) => {
	return (
		<ExhibitScreen
			//Hero Info
			heroImage = { images.heroImages.underthemicroscope }
			gallery = {[
				{
					source: images.galleries.underthemicroscope.image1,
					caption: 'What the home of the Giant Cell looked like when it was just forming.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.underthemicroscope.image2,
					caption: 'Ensuring that the cell structure is stable.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.underthemicroscope.image3,
					caption: 'Watching other cells form - a view from the nucleus.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.underthemicroscope.image4,
					caption: 'Our Giant Cell is so big, we need help reaching the top.',
					dimensions: { width: 1280 , height: 853 }
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
		>

			{/* Do not modify below */}
			{ props.children }

		</ExhibitScreen>
	)
}

export default UnderTheMicroscope
