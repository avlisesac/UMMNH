import React from 'react'
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	Button,
} from 'react-native-elements'

import firebase from 'react-native-firebase'
let Analytics = firebase.analytics()

import moment from 'moment'
import NetInfo from '@react-native-community/netinfo'

import LoadingIndicator from '../components/LoadingIndicator'
import WebScheduleLinks from '../components/WebScheduleLinks'

import colors from '../modules/Colors'
import links from '../modules/Links'
import fontSizes from '../modules/FontSizes'
import withPreventDoubleClick from '../modules/WithPreventDoubleClick'

const ButtonEx = withPreventDoubleClick(Button)

export default class TodayAtUMMNHScreen extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			dataLoaded: false,
			dataToDisplay: 'No data to display...',
			activeConnection: null,
			connectionType: null,
		}

	}

	componentDidMount = async () => {
		console.log('componentDidMount fired...')
		await this.loadData(urlToFetchFrom)
		Analytics.logEvent('Viewed_TodayAtUMMNHScreen')
	}

	//Attempt to load data from Happenings
	loadData = async (urlToFetchFrom) => {
		//Check for active internet connection
		let hasConnection = this.checkConnection()
		console.log(hasConnection)

		//If there is a connection, fetch data
		if(hasConnection){
			this.fetchData(urlToFetchFrom)
		}
	}

	//Get info about internet connection
	checkConnection = async () => {
		let connected = false
		const state = await NetInfo.fetch()
		this.setState({
			activeConnection: state.isConnected,
			connectionType: state.type
		})
	}

	//Fetch data from URL
	fetchData = async (urlToFetchFrom) => {
		try {
			let response = await fetch(urlToFetchFrom)
			let responseJson = await response.json()
			let numberOfEvents = Object.keys(responseJson).length
			let returnArray = []

			for(i = 0; i < numberOfEvents; i++){
				let thisEvent = responseJson[Object.keys(responseJson)[i]]
				let thisEventKey = Object.keys(responseJson)[i]
				let objectToPush = {
					key: thisEventKey,
					title: thisEvent['combined_title'],
					startTime: moment(thisEvent['time_start'], 'hh:mm:ss').format('hh:mm a'),
					endTime: moment(thisEvent['time_end'], 'hh:mm:ss').format('hh:mm a'),
					description: thisEvent['description'],
				}

				returnArray.push(objectToPush)
			}

			this.setState({
				dataToDisplay: returnArray,
				dataLoaded: true,
			})
		} catch (error){
			console.log('error in fetchData', error)
		}
	}

	render() {
		//Before Anything
		if(this.state.activeConnection === null){
			console.log('connection is nullllllll')
			return(
				<View style = {  styles.notifContainer }>
					<LoadingIndicator />
				</View>
			)
		}


		//No internet connection
		if(!this.state.activeConnection){
			console.log('activeConnection is false, but does not equal null')
			return(
				<View style = { styles.notifContainer }>
					<Text style = { styles.notifText }>You do not appear to have an active internet connection!</Text>
					<Text style = { styles.notifText }>Pease ensure you have an active internet connection and...</Text>
					<View style = { styles.buttonWrapper }>
						<ButtonEx
							title = 'Try Again'
							onPress = { () => this.loadData(urlToFetchFrom) }
						/>
					</View>
				</View>
			)
		}

		//Connected - Loading
		if(!this.state.dataLoaded){
			console.log('we have connection, data loading')
			return(
				<View style = { styles.notifContainer }>
					<LoadingIndicator />
					<Text style = { styles.notifText }>Connected</Text>
					<Text style = { styles.notifText }>Attempting to load data...</Text>
				</View>
			)
		}

		//Connected - No events today
		if(this.state.dataToDisplay.length < 1){
			console.log('connection, data done loading, no events...')
			return(
				<SafeAreaView style = { styles.mainContainer}>
					<View style = { styles.notifContainer }>
						<Text style = { styles.notifText }>No events at the museum today.</Text>
						<WebScheduleLinks />
					</View>
				</SafeAreaView>
			)
		}

		//Connected - Events to show
		return(
			<SafeAreaView style = { styles.mainContainer }>
				<Text style = { styles.dateText }>{ (moment().format("dddd MMM Do YYYY").toString()) }</Text>
				<FlatList
					data = { this.state.dataToDisplay }
					renderItem = {({ item }) =>
						<View style = { styles.listItem }>
							<Text style = { styles.title }>{ item.title }</Text>
							<Text style = { styles.time }>{ item.startTime } - { item.endTime }</Text>
							<Text style = { styles.description }>{ item.description }</Text>
						</View>
					}

					ListFooterComponent = { this.renderFooter }
				/>
			</SafeAreaView>
		)
	}

	renderFooter = () => {
		return (
			<WebScheduleLinks />
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	notifContainer: {
		flex: 1,
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	notifText: {
		fontFamily: 'Whitney-Medium',
		textAlign: 'center',
		fontSize: fontSizes.body,
		lineHeight: (fontSizes.body * 1.25),
		marginTop: 10,
		width: '80%',
	},
	dateText:{
		textAlign: 'center',
		fontFamily:'Whitney-Semibold',
		fontSize: fontSizes.body,
		marginTop: 10,
		marginBottom: 10,
	},
	listItem: {
		marginTop: 10,
		width: '90%',
		alignSelf: 'center',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		paddingBottom: 10,
	},
	title: {
		fontSize: fontSizes.header,
		fontFamily: 'Whitney-Black',
	},
	time: {
		fontSize: fontSizes.subheader,
		fontFamily: 'Whitney-Semibold',
	},
	description: {
		fontSize: fontSizes.body,
		fontFamily: 'Whitney-Medium',
		textAlign: 'justify',
		lineHeight: (fontSizes.body * 1.25),
	},
	buttonWrapper: {
		marginTop: 10,
		marginBottom: 10,
		width: '60%'
	}
})


//-----REAL SOURCE-----
const urlToFetchFrom = 'https://events.umich.edu/day/json?filter=sponsors:3445,3825'

//-----DATE FILTER-----
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3445,3825&range=2019-10-12to2019-10-12'


//-----TEST SOURCES-----
//All future events
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3445,3825'

//No planetarium
//const urlToFetchFrom = 'https://events.umich.edu/day/json?filter=sponsors:3445'

//No Events
//const urlToFetchFrom = 'https://events.umich.edu/list/json?filter=sponsors:3825'
