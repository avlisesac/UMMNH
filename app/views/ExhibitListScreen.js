import React from 'react'

import {
  FlatList,
  Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
  TouchableOpacity,
	View
} from 'react-native'

import {
	Button,
	Icon
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

import withPreventDoubleClick from '../modules/WithPreventDoubleClick'
import colors from '../modules/Colors'
import fontSizes from '../modules/FontSizes'

import Exhibits from '../modules/ExhibitList'

const ButtonEx = withPreventDoubleClick(Button)

function ExhibitListScreen({ navigation }) {
	// componentDidMount = () => {
	// 	Analytics.logEvent('Viewed_ExhibitListScreen')
	// }
  //
  // pushScreen = (screenToPush) => {
  //   this.props.navigation.push(screenToPush)
  // }

	// render() {
		return (
			<SafeAreaView style = { styles.safeArea }>
        <FlatList
          data = { Exhibits }
          renderItem = {({item}) =>
            <TouchableOpacity onPress = { () => navigation.push(item.key) }>
              <View style = { styles.listItem }>
                <View style = { styles.imageHolder }>
                  <Image source = { item.previewImage } style = { styles.image } />
                </View>
                <View style = { styles.infoContainer }>
                  <Text style = { styles.info }>{ item.key }</Text>
                  <Text style = { styles.info }>{ item.location }</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
			</SafeAreaView>
		)
	// }
}

const styles = StyleSheet.create({
	safeArea: {
    flex: 1,
	},
  listItem: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    paddingBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',

  },
  imageHolder: {
    height: 100,
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  infoContainer: {
    marginLeft: 10,
  },
  info: {
    fontFamily: 'Whitney-Semibold',
    fontSize: fontSizes.body
  },
})

export default ExhibitListScreen
