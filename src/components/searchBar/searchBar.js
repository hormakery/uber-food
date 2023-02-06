import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            marginTop: 7,
            fontWeight: "700",
            borderRadius: 20,
            backgroundColor: "#fff",
          },
          textInputContainer: {
            marginRight: 10,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
          },
        }}
        renderLeftButton={() => (
          <View style={styles.searchIcon}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightSearchIcon}>
            <AntDesign name="clockcircle" size={11} style={styles.clock} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchIcon: {
    marginLeft: 10,
  },
  rightSearchIcon: {
    padding: 9,
    marginRight: 10,
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eee",
  },
  clock: {
    marginRight: 6,
  },
});
