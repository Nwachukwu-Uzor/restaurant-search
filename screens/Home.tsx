import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
  },
  inner: {
    backgroundColor: "white",
    marginTop: 50,
    padding: 15,
  },
});
