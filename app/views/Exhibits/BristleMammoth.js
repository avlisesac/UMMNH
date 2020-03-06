import React from 'react'

import images from '../../modules/Images'
import ExhibitScreen from '../ExhibitScreen'

export default class BristleMammoth extends React.Component {

	render(){
		return (
			<ExhibitScreen
				//Hero Info
				heroImage = { images.heroImages.bristlemammoth }
				gallery = {[
					{
						image: images.galleries.bristlemammoth.image1,
						source: images.galleries.bristlemammoth.image1,
						description: 'Securing and inspecting the apparatus that holds the mammoth skull.',
						caption: 'Securing and inspecting the apparatus that holds the mammoth skull.',
						dimensions: { width: 1280 , height: 853 }
					},
					{
						image: images.galleries.bristlemammoth.image2,
						source: images.galleries.bristlemammoth.image2,
						description: 'A close-up of how the skull is held aloft in the display.',
						caption: 'A close-up of how the skull is held aloft in the display.',
						dimensions: { width: 1280 , height: 1920 }
					},
					{
						image: images.galleries.bristlemammoth.image3,
						source: images.galleries.bristlemammoth.image3,
						description: 'Attaching the first of two cast reconstructed tusks to the mammoth skull.',
						caption: 'Attaching the first of two cast reconstructed tusks to the mammoth skull.',
						dimensions: { width: 1280 , height: 853 }
					},
					{
						image: images.galleries.bristlemammoth.image4,
						source: images.galleries.bristlemammoth.image4,
						description: 'Installing the skull into its new home in the People and the Planet gallery.',
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
			/>
		)
	}
}
