import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'

import SoundPlayer from 'react-native-sound-player'
import BodyCopy from '../components/BodyCopy'

import fontSizes from '../modules/FontSizes'
import colors from '../modules/Colors'

var Sound = require('react-native-sound')
Sound.setCategory('Playback', true)

const AudioPlayer = (props) => {
  const [audioState, setAudioState] = useState('stopped');
  const [audioFile, setAudioFile] = useState(null)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const play = () => {
    if(!audioFile){
      const narration = new Sound(props.audioFile + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if(error){
          console.log('failed to load the sound file', error)
          return
        }


        console.log('successfully loaded sound file', narration._filename)
        setAudioFile(narration)
        setAudioState('playing')
        narration.play((success) => {
          if(success){
            console.log('successfully finished playing')
            stop()
          } else {
            console.log('Playback failed due to encoding errors')
          }
        })
      })
    }
  }

  const stop = () => {
    if(audioFile){
      console.log('stopping audio file:', audioFile._filename)
      audioFile.stop().release()
      setAudioState('stopped')
      setAudioFile(null)
    } else {
      console.log('no audio file to stop.')
    }
  }

  const playStop = () => {
    console.log('play/stop called')
    if(audioState === 'playing'){
      stop()
    } else {
      play()
    }
  }

  useFocusEffect(
		React.useCallback(() => {
      console.log(props.header, 'screen is focused')

      return() => {
        if(audioFile){
          console.log(props.header, 'screen unfocused while there is an audio file:', audioFile._filename)
          stop()
        } else {
          console.log(props.header, 'screen unfocused while no audio file exists:', audioFile)
        }
      }
    }, [audioFile])
  );


  return(
    <View style = { styles.mainContainer }>

      <View style = { styles.audioPlayer }>
        <Text style = { styles.audioPlayerHeader }>Audio Tour</Text>

        <View style = { styles.audioPlayerButtonContainer }>
        <View style = { styles.audioButtonWrapper }>
        <Button
        buttonStyle = { styles.button }
        icon = {{ name: (audioState === 'playing' ? 'md-square' : 'md-play'), type: 'ionicon', size: fontSizes.button, style: {marginRight: 0}}}
        onPress = { () => {
          playStop()
        }}
        />
        </View>

        <View style = { styles.textButtonWrapper }>
        <Button
        buttonStyle = { styles.button }
        titleStyle = { styles.buttonTitle }
        title = 'Show/Hide Text'
        onPress = { () => setShowFullDescription(!showFullDescription)}
        />
        </View>
        </View>
      </View>

      { showFullDescription &&
        <Text style = { styles.fullDescription }>
          <BodyCopy textString = { props.fullText }/>
        </Text>
      }
    </View>
  )
}

export default AudioPlayer

const styles = StyleSheet.create({
	mainContainer: {

	},
	audioPlayer: {
		backgroundColor: colors.ummnhLightBlue,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 5,
	},
	audioPlayerHeader: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Whitney-Black',
		fontSize: fontSizes.header,
		marginTop: 5,
		marginBottom: 5,
	},
	audioPlayerButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		//justifyContent: 'space-around',
		marginBottom: 10,
	},
	audioButtonWrapper: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
	},
	textButtonWrapper: {
		flex: 3,
		marginLeft: 5,
		marginRight: 5,
	},
	button: {
		height: '100%',
		backgroundColor: colors.ummnhYellow,
		paddingLeft: 10,
		paddingRight: 10,
	},
	buttonTitle: {
		fontSize: fontSizes.button,
		fontFamily: 'Whitney-Black',
		color: colors.ummnhDarkBlue,
	},
	fullDescription:  {
		fontSize: fontSizes.body,
		fontFamily: 'Whitney-Medium',
		lineHeight: (fontSizes.body * 1.25),
		textAlign: 'justify',
	}
})
