import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FooterMenu from "../Menus/FooterMenu";

const ContactScreen = () => {
  const handleLocationSelect = (data, details) => {
    const { lat, lng } = details.geometry.location;
    console.log("Selected Location:", { lat, lng });
    // You can update the map region here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline
          placeholder="Message"
        />
        <Button title="Submit" onPress={() => {}} />
      </View>

      <View style={styles.mapContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={handleLocationSelect}
          query={{
            key: "YOUR_GOOGLE_PLACES_API_KEY",
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInputContainer: {
              backgroundColor: "rgba(0,0,0,0)",
              borderTopWidth: 0,
              borderBottomWidth: 0,
              paddingHorizontal: 20,
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: "#5d5d5d",
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
        />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 25.594095,
            longitude: 85.1375664,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 25.594095, longitude: 85.137566 }}
            title={"Marker Title"}
            description={"Marker Description"}
          />
        </MapView>
        <FooterMenu />
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  mapContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  map: {
    flex: 1,
  },
});
