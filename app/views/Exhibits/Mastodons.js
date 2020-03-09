import React from 'react'

import images from '../../modules/Images'
import ExhibitScreen from '../ExhibitScreen'

const Mastodons = (props) => {
	console.log('mastodons props', props)
	return (
		<ExhibitScreen
			//Hero Info
			heroImage = { images.heroImages.mastodons }
			gallery = {[
				{
					source: images.galleries.mastodons.image1,
					caption: 'Installing the trail of mastodon prints.',
					dimensions: { width: 933 , height: 1920 }
				},
				{
					source: images.galleries.mastodons.image2,
					caption: 'Pieces of the mastodon display laid out and labeled.',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.mastodons.image3,
					caption: 'Mastodon skull on its way to join its body at the new museum space',
					dimensions: { width: 1280 , height: 853 }
				},
				{
					source: images.galleries.mastodons.image4,
					caption: 'Map showing the location of the Owosso mastodon dig site.',
					dimensions: { width: 1280 , height: 1223 }
				},
				{
					source: images.galleries.mastodons.image5,
					caption: 'Newspaper clipping of the discovery of a mastodon in a local barnyard.',
					dimensions: { width: 1484 , height: 1920 }
				},
				{
					source: images.galleries.mastodons.image6,
					caption: 'Dr. Dan Fisher displays a mastodon jawbone.',
					dimensions: { width: 889 , height: 1423 }
				},
				{
					source: images.galleries.mastodons.image7,
					caption: 'A map of the mastodon trackway.',
					dimensions: { width: 1280 , height: 900 }
				},
			]}

			//Quick Info
			header = { 'Stop: The Mastodons' }
			subheader = { 'Ancient Herbivores' }
			shortDescription = { 'These two mastodons lived at the end of the last ice age. The smaller skeleton is a female that was discovered in Owosso, Michigan in 1944. The larger one is a male that was found in 1998 near Fort Wayne, Indiana.' }

			//Audio Tour
			audioFile = { 'mastodons' }

			//Audio Tour Text
			fullText = {
`Mastodons had large bodies, long tusks, and trunks, much like modern elephants. They also most likely had fur covering their bodies. They were 8 to 11 feet tall and weighed 8,000 to 14,000 pounds. Their tusks curved upward and could grow to be up to 9 feet long!

Mastodons used their unusually shaped teeth to chew leaves, twigs, fruit, and cones. Their ancestors originated in Africa and then spread into Europe and Asia. They reached the Americas over the Bering Land bridge about 18 million years ago. American mastodons went extinct around 10,000 years ago. While scientists can’t say for sure what caused their extinction, work being done at U-M suggests that over-hunting by early North Americans played a big part.

The two mastodon skeletons in the museum’s main atrium show an adult male and adult female side by side. The smaller one is the female. She lived about 11,000 years ago, making her one of the last Mastodons. She was found near Owosso, Michigan in 1944. The female’s skeleton is mostly real bone, with a few plaster reconstructions of bones not found in the excavation. During the move to the Biological Sciences Building, the female mastodon had alterations made to correct her posture (including creating a scaled down 3D print of the male’s sternum to use as hers). Her left tusk was broken off at some point during her life. Because the broken surface is smooth, we know that she survived long after the injury caused it to break.

The larger skeleton is from a male that lived about 13,000 years ago. He was found in 1998 near Fort Wayne, Indiana. During excavation, about 80% of his bones were found. However, our display is made completely from casts and reconstructions. The real bones were mostly returned to Indiana after U-M scientists finished studying them. This mastodon died due to a fight with a rival male. You can see evidence of the mortal wound—a hole on the lower right side of his skull is damage from the tip of another mastodon’s tusk.`
			}

			//TLAS
			q1 = { `Q: Can you find a bone that looks different from the rest? (hint: look at the legs!)` }
			q2 = { `Q: Can you guess what might have caused the death of the male Mastodon?` }
			q3 = { `Q: Can you spot any indications of the presence of humans on the Mastodons?` }
			a1 = { `A: The male mastadon’s right rear leg might look a bit different. That’s because the scientists at the museum left this 3D printed bone partially unfinished. They wanted to give visitors a look at how they create model bones. If you look closely, you might notice a slight 'Pixelated' appearance that shows the polygonal modeling. This right leg is actually a copy of the left leg that they scanned in and mirrored to create a missing piece!` }
			a2 = { `A: While you might think that humans killed this male mastodon, it was actually much more likely another male in a fight over a female. This male has a hole in his skull near his jaw that was probably made by the other male’s tusk.` }
			a3 = { `A: On the ribs of the male mastodon, you can observe some cut marks that were made by human tools. After this mastodon was felled by a competing male, humans likely found the body and harvested meat from it. You can also see some severed toes where humans chopped right through.` }

			//While You're Here
			substop1title = { 'Fossil Prep Lab' }
			substop1text = { `Get a look at where U-M scientists prepare fossils for study and display. The Fossil Prep Lab allows visitors the chance to see some of the people and tools that help bring our museum to life!`}
			substop2title = { `Research Station` }
			substop2text = { `Investigate the Field Research Station located next to the Welcome Desk to get some extra info about what scientists at the University of Michigan are currently studying! Look for the block 'M'.` }
		>
			{ props.children }
		</ExhibitScreen>
	)
}

export default Mastodons
