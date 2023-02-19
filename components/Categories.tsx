import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const items = [
  {
    id: "1",
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    id: "2",
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    id: "3",
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    id: "4",
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    id: "5",
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    id: "6",
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    id: "7",
    image: require("../assets/images/desserts.png"),
    text: "Deserts",
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.categoryText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingVertical: 10,
    paddingLeft: 20,
    backgroundColor: "white"
  },
  image: { width: 50, height: 40, resizeMode: "contain" },
  category: { alignItems: "center", marginRight: 10 },
  categoryText: {
    fontSize: 13,
    fontWeight: "900",
  },
});

export default Categories;
