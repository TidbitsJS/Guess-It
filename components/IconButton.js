import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const IconButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 15,
  },
});

export default IconButton;
