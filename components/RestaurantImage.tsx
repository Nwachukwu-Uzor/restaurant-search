import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const url =
  "https://plus.unsplash.com/premium_photo-1661369783348-4ccc63b7a7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80";

const RestaurantImage = () => {
  return (
    <View>
      <Image source={{ uri: url }} style={styles.image} />
      <TouchableOpacity style={styles.icon}>
        <MaterialCommunityIcons name="heart-outline" color="#fff" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantImage;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  image: {
    width: "100%",
    height: 180,
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 999,
  },
});
