import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { MapView, Location, Permissions, Constants } from 'expo';
import MapContainer from './MapContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GooglePlacesAutocomplete } from './SearchBar';
import { styles, searchBarStyle } from '../../assets/styles/map_styles';

const { width, height } = Dimensions.get('window');

export default class MapScreen extends React.Component {
	static navigationOptions = {
		title: 'MAP'
	};

	render() {
		return (
			<View
				style={{
					flex: 1
				}}
			>
					<GooglePlacesAutocomplete
					minLength={2}
					listViewDisplayed="auto"
					autoFocus={false}
					returnKeyType={'search'}
					fetchDetails={true}
					query={{
						key: 'AIzaSyANkUfLBovPhWMJohvoCTbFbo3Rd7uPLSo',
						language: 'en'
					}}
					textInputProps={{
						clearButtonMode: 'never',
						ref: input => {
							this.textInput = input;
						}
					}}
					onPress={(data, details = null) => {
						this.props.setMarker(
							details.geometry.location.lat,
							details.geometry.location.lng,
							details.name
						);
					}}
					styles={searchBarStyle}
					renderLeftButton={() => console.warn()}
				/>
				<MapContainer NewMarker={""}/>

				<TouchableOpacity
					activeOpacity={0.5}
					style={{
						width: width / 7.5,
						height: width / 7.5,
						backgroundColor: '#4ebaaa',
						justifyContent: 'center',
						position: 'absolute',
						right: width / 20,
						bottom: height / 25,
						elevation: 15,
						borderRadius: 35
					}}
					onPress={() => console.warn('added')}
				>
					<Icon
						name="plus"
						size={30}
						style={{ alignSelf: 'center', color: '#fff' }}
					/>
				</TouchableOpacity>


			</View>
		);
	}
}
