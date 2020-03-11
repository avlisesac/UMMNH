import images from './Images'

import BristleMammoth from '../views/Exhibits/BristleMammoth'
import DynamicPlanet from '../views/Exhibits/DynamicPlanet'
import Majungasaurus from '../views/Exhibits/Majungasaurus'
import Mastodons from '../views/Exhibits/Mastodons'
import MichiganRivers from '../views/Exhibits/MichiganRivers'
import Quetz from '../views/Exhibits/Quetz'
import UnderTheMicroscope from '../views/Exhibits/UnderTheMicroscope'

const Exhibits =
  [
    {
      key: 'Bristle Mammoth',
      location: 'Lower Level, Rotating Gallery',
      screen: BristleMammoth,
      previewImage: images.heroImages.bristlemammoth
    },
    {
      key: 'Dynamic Planet',
      location: '2nd Floor, West Wing',
      screen: DynamicPlanet,
      previewImage: images.heroImages.dynamicplanet
    },
    {
      key: 'Giant Cell',
      location: '2nd Floor, Under the Microscope',
      screen: UnderTheMicroscope,
      previewImage: images.heroImages.underthemicroscope
    },
    {
      key: 'Majungasaurus',
      location: '2nd Floor, Evolution Gallery',
      screen: Majungasaurus,
      previewImage: images.heroImages.majungasaurus
    },
    {
      key: 'Mastodons',
      location: '1st Floor, Main Atrium',
      screen: Mastodons,
      previewImage: images.heroImages.mastodons
    },
    {
      key: 'Michigan Rivers',
      location: '1st Floor, Exploring Michigan Gallery',
      screen: MichiganRivers,
      previewImage: images.heroImages.michiganrivers
    },
    {
      key: 'Quetzalcoatlus',
      location: '2nd Floor, West Atrium',
      screen: Quetz,
      previewImage: images.heroImages.quetz
    },
  ]


export default Exhibits
