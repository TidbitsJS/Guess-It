import React from "react";
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
  return (
    <ScrollView contentContainerStyle={styles.scrollScreen}>
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
        <CustomButton onPress={props.onRestart}>NEW GAME</CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollScreen: {
    flex: 1,
  },

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
