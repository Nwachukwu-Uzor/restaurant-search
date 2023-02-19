import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RestaurantImage from "./RestaurantImage";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.97} style={styles.item}>
      <View style={styles.container}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: { marginBottom: 30 },
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "white",
  },
});

export default RestaurantItem;
