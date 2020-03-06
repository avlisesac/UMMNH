import React from 'react'

import images from '../../modules/Images'
import ExhibitScreen from '../ExhibitScreen'

export default class Majungasaurus extends React.Component {

	render(){
		return (
			<ExhibitScreen
				//Hero Info
				heroImage = { images.heroImages.majungasaurus }
				gallery = {[
					{
						image: images.galleries.majungasaurus.image1,
						description: 'Installing <i>Majungasaurus</i> in the new museum space.'
					},
					{
						image: images.galleries.majungasaurus.image2,
						description: 'Making sure every detail is just right.'
					},
					{
						image: images.galleries.majungasaurus.image3,
						description: 'A close-up of <i>Majungasaurus’</i> extremely large scapula.'
					},
					{
						image: images.galleries.majungasaurus.image4,
						description: 'A great view of <i>Majungasaurus’</i> skull.'
					},
				]}

				//Quick Info
				header = { 'Stop: Majungasaurus' }
				subheader = { 'Island Carnivore' }
				shortDescription = { `Life in Madagascar during the late Cretaceous was tough. Intermittent droughts and floods left a scarcity of resources for the inhabitants of the island. To overcome these adversities, <i>Majungasaurus</i> (muh-JUNG-uh-sore-iss) evolved to have an edge in strength and power over its prey.` }

				//Audio Tour
				audioFile = { 'mastodons' }

				//Audio Tour Text
				fullText = {
`The <i>Majungasaurus</i> is an abelisaur from the late Cretaceous period, about 66 to 70 million years ago. It is named for the Mahajanga province of Madagascar, where it was discovered. It weighed about 2,400 lbs and was 20-23 feet long. <i>Majungasaurus</i> had a single small horn on top of its head. This horn had a hollow cavity inside, so it was not likely used in combat. Our best guess is that it was a display structure, but both males and females had these horns.

<i>Majungasaurus</i> is only found in Madagascar and evolved adaptations to its island habitat. Its large head and neck were well adapted for biting and holding on as its prey struggled to get free. Also, its legs are short and stocky. This probably gave <i>Majungasaurus</i> a lot of power when taking down prey. Scientists refer to adaptations such as these as “island dwarfism”, where otherwise large creatures develop smaller body sizes due to their limited range and resources.

<i>Majungasaurus</i>’ arms were even smaller than those of a <i>T. rex</i>. It is possible that instead of using their arms, they evolved to dedicate more muscle to their bite power and strength of their neck. Studies of growth lines in <i>Majungasaurus’</i> femur indicate that it grew more slowly than other large dinosaurs. These studies, along with evidence of cannibalism in <i>Majungasaurus</i>, suggest that Madagascar was a difficult place for a large carnivorous dinosaur to live 66 million years ago.`
				}

				//TLAS
				q1 = { `Q: Why do you think <i>Majungasaurus</i> has such large collar bones?` }
				q2 = { `Q: What differences do you notice comparing the <i>Majungasaurus</i> to the <i>Allosaurus</i> skull nearby?` }
				q3 = { `Q: <i>Majungasaurus</i> had a slow growth rate, taking around 20 years to fully mature. Why might this be?` }
				a1 = { `A: Scientists theorize that the large bones were developed so that there was more space for their neck muscles to attach to. More bone allows more muscle which equals more power!` }
				a2 = { `A: There are a couple of things that you might notice. For one, <i>Majungasaurus</i> has a shorter snout than <i>Allosaurus</i>. Also, the holes at the bottom of the jaw are much larger on <i>Majungasaurus</i>, in order to allow more muscle to attach. See how many more differences you can spot!` }
				a3 = { `A: The main reason is thought to be very limited food and water. Not only did this result in a slow growth rate, it even led to cannibalism among <i>Majungasaurus!</i>` }

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
