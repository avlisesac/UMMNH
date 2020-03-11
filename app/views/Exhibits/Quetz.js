import React from 'react'

import images from '../../modules/Images'
import ExhibitScreen from '../ExhibitScreen'

const Quetz = (props) => {
	return (
		<ExhibitScreen
			//Hero Info
			heroImage = { images.heroImages.quetz }
			gallery = {[
				{
					source: images.galleries.quetz.image1,
					caption: 'Bringing the <i>Quetzalcoatlus</i> to its home at the museum in the Biological Sciences Building.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.quetz.image2,
					caption: 'Detail view of the <i>Quetzalcoatlus</i> model.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.quetz.image3,
					caption: 'Detail view of the <i>Quetzalcoatlus</i> model.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.quetz.image4,
					caption: 'A piece of the <i>Quetzalcoatlus</i> before being attached.',
					dimensions: { width: 1280 , height: 1920 }
				},
				{
					source: images.galleries.quetz.image5,
					caption: 'A few final details are applied before lifting <i>Quetzalcoatlus</i> to its place above the atrium.',
					dimensions: { width: 1280 , height: 853 }
				},
			]}

			//Quick Info
			header = { 'Stop: Quetzalcoatlus' }
			subheader = { 'Flying Reptile' }
			shortDescription = { `Soaring high in the hair, <i>Quetzalcoatlus northropi</i> (ketts-all-koh-AHT-uh-liss NORTH-rop-eye) would scour the ground below to find small animals to swoop down and devour. They weren’t picky, though. If given the chance, they were just as likely to eat carrion, the remnants of feedings left behind by other hunters.` }

			//Audio Tour
			audioFile = { 'mastodons' }

			//Audio Tour Text
			fullText = {
`<i>Quetzalcoatlus</i> is a member of the azhdarchid family of pterosaurs. Azhdarchidae are known for having small bodies, large wings, long necks, big heads, and long, toothless beaks. <i>Quetzalcoatlus</i> specifically is named after the Aztec feathered serpent god Quetzalcoatl.

<i>Quetzalcoatlus</i> and other giant azhdarchids were the largest flying animals that ever lived. They were as big as small planes when flying and as tall as giraffes when walking on land. Despite being so big, they were relatively light. At around 640 pounds, our hand-painted fiberglass model is probably heavier than <i>Quetzalcoatlus</i> was in life!

<i>Quetzalcoatlus</i> was set apart from other pterosaurs because it mostly lived inland as opposed to by the water, and was likely an opportunistic feeder. Unlike modern birds, pterosaurs used all four of their limbs to launch into flight. Modeling their flight, some scientists think <i>Quetzalcoatlus</i> was capable of flying long distances at speeds of up to 80 miles per hour!`
			}

			//TLAS
			q1 = { `Q: How large do you think this massive creatures wingspan is?` }
			q2 = { `Q: What do you notice about the size of <i>Quetzalcoatlus</i> head compared to its body?` }
			q3 = { `Q: How much of its time would you guess <i>Quetzalcoatlus</i> spent in the air?` }
			a1 = { `A: From tip to tip, the wings are 33.5 feet across!` }
			a2 = { `A: Although our model’s proportions are speculative, based on other discovered species, we think that its skull was nearly four times the length of its torso!` }
			a3 = { `A: Due to its size, <i>Quetzalcoatlus</i> would have used up a lot of energy launching into the air. Because of this, it would probably only take flight to evade danger, travel long distances, or search for food.` }

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

export default Quetz
