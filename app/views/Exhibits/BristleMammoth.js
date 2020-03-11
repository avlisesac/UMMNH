import React from 'react'

import images from '../../modules/Images'
import ExhibitScreen from '../ExhibitScreen'

const BristleMammoth = (props) => {
	return (
		<ExhibitScreen
			//Hero Info
			heroImage = { images.heroImages.bristlemammoth }
			gallery = {[
				{
					source: images.galleries.bristlemammoth.image1,
					caption: 'Securing and inspecting the apparatus that holds the mammoth skull.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.bristlemammoth.image2,
					caption: 'A close-up of how the skull is held aloft in the display.',
					dimensions: { width: 1280 , height: 1920 }
				},
				{
					source: images.galleries.bristlemammoth.image3,
					caption: 'Attaching the first of two cast reconstructed tusks to the mammoth skull.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.bristlemammoth.image4,
					caption: 'Installing the skull into its new home in the People and the Planet gallery.',
					dimensions: { width: 1280 , height: 788 }
				},
			]}

			//Quick Info
			header = { 'Stop: Bristle Mammoth' }
			subheader = { 'PLACEHOLDER' }
			shortDescription = { `PLACEHOLDER` }

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

export default BristleMammoth
