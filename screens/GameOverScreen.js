import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>The Game is Over !</Text>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Number of rounds: {props.rounds} </Text>
      <Text style={styles.text}>User Number: {props.userNumber}</Text>
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
    fontSize: 15,
  },
});

export default GameOverScreen;
