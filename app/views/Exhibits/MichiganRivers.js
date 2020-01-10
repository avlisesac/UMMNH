import React from 'react'

import images from '../../modules/Images'
import StopScreen from '../StopScreen'

export default class MichiganRivers extends React.Component {

	render(){
		return (
			<StopScreen
				//Hero Info
				heroImage = { images.heroImages.michiganrivers }
				gallery = {[
					{
						image: images.galleries.michiganrivers.image1,
						description: 'Sometimes the shoreline needs a little help being carved in.'
					},
					{
						image: images.galleries.michiganrivers.image2,
						description: 'Artisans ensure that the giant cottonwood tree is as accurate as possible.'
					},
					{
						image: images.galleries.michiganrivers.image3,
						description: 'A group bear hug helps our new addition fit in as his riverside home.'
					},
					{
						image: images.galleries.michiganrivers.image4,
						description: 'Have YOU gotten a chance to view our diarama from the Kids Cave? Trust me, adults can fit inside to have a look too!'
					},
				]}

				//Quick Info
				header = { 'Stop: Michigan Rivers' }
				subheader = { 'Our Shared Shores' }
				shortDescription = { 'Michigan’s over three hundred rivers offer resources, transportation, recreation and inspiration that are unique to the area. From the mighty falls in the Tahquamenon to the famous trout-fishing in the Au Sable, experiencing the bounty of nature that the river systems offer is an enriching and rewarding adventure.' }

				//Audio Tour
				audioFile = { 'mastodons' }

				//Audio Tour Text
				fullText = {
`Geologically speaking, Michigan’s rivers are relatively young and were formed around twelve thousand years ago when glaciers retreated at the end of the last Ice Age. When these glaciers receded, they also left behind material that would eventually form river channels. These rivers are now home to a wide variety of life from algae and insects, invertebrates and reptiles, all the way to large game fish.

While talking about the majesty of Michigan rivers, we must also address the equally important Riparian Zone. The Riparian Zone is comprised of the banks of a river, and the associated wetlands and their vegetation. These places are also habitats to a great percentage of wildlife species, including many birds, mammals, and plants.

Unfortunately, the people who utilize Michigan’s rivers have not always been as kind to them as they could be. Physical alterations such as damming, dredging, and loss of bankside vegetation have forever altered the shape of these rivers. Combined with urban runoff and agricultural pollution, our rivers need our attention like never before to preserve their natural beauty as well as their ability to provide food and shelter for their inhabitants.`
				}

				//TLAS
				q1 = { `Q: If you were able to lay all of Michigan’s rivers end-to-end, how far do you think they would stretch?` }
				q2 = { `Q: How many kinds of fish can you spot in the river?` }
				q3 = { `Q: Which animals in the diorama can you spot from inside the Kids Cave at the rear of the display?` }
				a1 = { `A: The total length would be over 36,000 miles. That’s more than the entire circumference of the Earth!` }
				a2 = { `A: Our diorama displays six different types of fish that call the Michigan rivers their home. If you’re having trouble finding the tiny minnows, check for one in the mouth of the painted turtle!` }
				a3 = { `A: The Kids Cave offers a great view of both the Red Squirrel on the Cottonwood tree, as well as the Black Bear perched on his fallen log. While you’re here, take a look at some of the grubs, worms, and other invertebrates that inhabit the soil!` }

				isOnTour = { this.props.isOnTour }
				bottomButtonTitle = { this.props.bottomButtonTitle }
				bottomButtonTarget = { this.props.bottomButtonTarget }

			/>
		)
	}
}