import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 7,
            fontWeigth: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            marginRight: 10,
            borderRadius: 50,
            alignItems: "center",
            flexDirection: "row",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center"
            }}
          >
            <AntDesign name="clockcircle" size={11} style={{marginRight: 6}}/>
            <Text>Search</Text>
          </View>
        )}
      />
      {/* <Text>Search Bar</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
  },
});

export default SearchBar;
