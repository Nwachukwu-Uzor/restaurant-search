import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useMemo } from "react";

interface Props {
  text: string;
  value: string;
  handleButtonClick(value: string): void;
  currentValue: string;
}

const HeaderButton: React.FC<Props> = ({
  text,
  value,
  handleButtonClick,
  currentValue,
}) => {
  const computedContainerStyles = useMemo(() => {
    const activeStyles =
      currentValue === value
        ? styles.containerBlack
        : styles.containerTransparent;
    return { ...styles.container, ...activeStyles };
  }, [currentValue]);

  const computedTextStyles = useMemo(() => {
    const activeStyles =
      currentValue === value ? styles.textWhite : styles.textBlack;
    return { ...styles.text, ...activeStyles };
  }, [currentValue]);

  const handleClick = () => {
    handleButtonClick(value);
  };

  return (
    <TouchableOpacity style={computedContainerStyles} onPress={handleClick}>
      <Text style={computedTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  containerBlack: {
    backgroundColor: "black",
  },
  containerTransparent: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: "900",
  },
  textWhite: {
    color: "white",
  },
  textBlack: {
    color: "black",
  },
});

export default HeaderButton;
