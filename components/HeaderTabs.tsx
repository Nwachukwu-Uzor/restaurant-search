import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";

const HeaderTabs = () => {
  const [currentVal, setCurrentVal] = useState("delivery");

  const handleButtonClick = (value: string) => {
    setCurrentVal(value);
  };

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        value="delivery"
        handleButtonClick={handleButtonClick}
        currentValue={currentVal}
      />
      <HeaderButton
        text="Pickup"
        value="pickup"
        handleButtonClick={handleButtonClick}
        currentValue={currentVal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 4
  },
});

export default HeaderTabs;
