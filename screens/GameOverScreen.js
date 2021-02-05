import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import Colors from "../constants/Color";
import CustomButton from "../components/CustomButton";

const GameOverScreen = (props) => {
  const [availableWidth, setAvailableWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollScreen}>
      <View style={styles.screen}>
        <Text style={styles.gameOver}>The Game is Over !</Text>
        <Image
          source={require("../assets/success.png")}
          style={{
            width: availableWidth * 0.8,
            height: availableWidth * 0.9,
            borderRadius: (availableWidth * 0.8) / 5,
          }}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          {" "}
          Your phone needed <Text style={styles.highlight}>
            {props.rounds}
          </Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </Text>
        <CustomButton onPress={props.onRestart}>NEW GAME</CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollScreen: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  screen: {
    justifyContent: "center",
    alignItems: "center",
  },

  gameOver: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },

  image: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.9,
    borderRadius: (Dimensions.get("window").width * 0.7) / 5,
  },

  text: {
    marginBottom: 10,
    fontSize: 17,
    textAlign: "center",
    marginBottom: 20,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.primary,
  },
});

export default GameOverScreen;
