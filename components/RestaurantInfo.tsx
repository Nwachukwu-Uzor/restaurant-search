import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RestaurantInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Farmhouse Kitchen Thai Cuisine</Text>
        <Text style={styles.distance}>30-45 · min</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>4.5</Text>
      </View>
    </View>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 13,
    color: "gray",
  },
  rating: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 12
  }
});
