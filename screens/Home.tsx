import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <HeaderTabs />
      </View>
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
