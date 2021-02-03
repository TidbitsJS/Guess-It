import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Colors from "../constants/Color";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>The Game is Over !</Text>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
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
      <Button title="New game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gameOver: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },

  image: {
    width: "80%",
    height: 300,
    borderRadius: 75,
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
