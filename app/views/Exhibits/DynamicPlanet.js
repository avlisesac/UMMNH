import React from 'react'

import images from '../../modules/Images'
import StopScreen from '../StopScreen'

export default class DynamicPlanet extends React.Component {

	render(){
		return (
			<StopScreen
				//Hero Info
				heroImage = { images.heroImages.dynamicplanet }
				gallery = {[
					{
						image: images.galleries.dynamicplanet.image1,
						description: 'Installing minerals into the Dynamic Planet exhibit.'
					},
					{
						image: images.galleries.dynamicplanet.image2,
						description: 'The drawers throughout Dynamic Planet hold even more to see!'
					},
					{
						image: images.galleries.dynamicplanet.image3,
						description: 'Two pieces of wood, one modern and one petrified. Interact with these to learn more about petrification!'
					},		
				]}

				//Quick Info
				header = { 'Stop: Dynamic Planet' }
				subheader = { 'Our Changing Earth' }
				shortDescription = { `Our world is constantly changing. From the air we breathe to the water we drink and the ground beneath our feet, no part of Earth stays the same forever. Exploring the Dynamic Planet exhibit will show you how and why Earth changes.` }

				//Audio Tour
				audioFile = { 'mastodons' }

				//Audio Tour Text
				fullText = {
`One of the biggest ways our planet has changed is through changes in the shape and positions of Earth’s continents. At several points in Earth’s history, all the continents were connected forming one giant landmass or supercontinent. Scientists refer to the most recently occurring supercontinent as Pangaea, and we explain the movement of continents through plate tectonics. Earth’s crust is made up of moving pieces called “plates.” As these plates moved around, Pangaea separated to form the continents we know today. Though the continents are still moving, the fastest are only moving apart at a rate of mere inches every year!

When this concept was initially suggested, most geologists were not on board--still not convinced that a viable mechanism capable of moving the continents had been discovered. However, UM Alum and Ypsilanti native Marie Tharp was instrumental in helping to prove the theory with her mapping of the seafloor.

You can also observe evidence of global climate change in the Dynamic Planet exhibit, both over Earth’s history and today. In the ‘Climate’ section you can see a fossilized palm frond, which shows that much of North America, including Michigan, once had a tropical climate. At that time it was closer to the equator. Today, greenhouse gasses such as carbon dioxide are causing global warming.

While the Universe began about 13.7 billion years ago, our solar system did not form until around 4.6 billion years ago. In the ‘Origins’ section you can see and touch some rocks that aren’t from Earth. Be sure to observe the meteorites as well as some ‘meteor-wrongs’, or rocks that were mistaken for meteorites.`
				}

				//TLAS
				q1 = { `Q: Find the two pieces of wood. Lift them. Which one is heavier? Why do you think that is?` }
				q2 = { `Q: What is the difference between ‘weather’ and ‘climate’?` }
				q3 = { `Q: Why might the Bobolink, pigeons, and some other birds grow magnetite crystals in their body?` }
				a1 = { `A: The piece of wood on the left is heavier. This is petrified wood, and it is heavier because all of the wood has been replaced by mineral!` }
				a2 = { `A: While weather describes the ever changing, short-term state of the atmosphere (It’s raining today! I hope it cools down tonight), climate refers to the overall state of an area (The desert is hot and dry, while the tundra is bitterly cold).` }
				a3 = { `A: The tiny piece of magnetite that they grow will interact with Earth's magnetic field, aiding in navigation.` }

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