import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../constants/Color";
import IconButton from "../components/IconButton";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength, rndColor, itemData) => {
  console.log(itemData);
  return (
    <View
      style={{
        ...styles.listItem,
        borderColor: rndColor,
        borderEndColor: rndColor,
      }}
    >
      <Text style={styles.roundText}>#{listLength - itemData.index} Guess</Text>
      <Text style={styles.itemText}>{itemData.item}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const initialColor =
    initialGuess < userChoice ? Colors.lower : Colors.greater;

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const [color, setColor] = useState(initialColor);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
      setColor(Colors.lower);
    } else {
      currentLow.current = currentGuess + 1;
      setColor(Colors.greater);
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((curPastGuess) => [nextNumber.toString(), ...curPastGuess]);
  };

  return (
    <View style={styles.screen}>
      <Text
        style={{
          fontFamily: "open-sans-bold",
          fontSize: 20,
          marginVertical: 15,
        }}
      >
        Opponent's Guess
      </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <IconButton
          onPress={() => {
            nextGuessHandler("lower");
          }}
          style={{ backgroundColor: Colors.lower }}
        >
          <Ionicons name="md-remove" size={25} />
        </IconButton>
        <IconButton
          onPress={() => {
            nextGuessHandler("greater");
          }}
          style={{ backgroundColor: Colors.greater }}
        >
          <Ionicons name="md-add" size={25} />
        </IconButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}

        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length, color)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  listContainer: {
    flex: 1,
    width: "90%",
    marginTop: 20,
  },
  listItem: {
    borderWidth: 1.5,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    borderTopEndRadius: 2,
    borderEndWidth: 4,
    elevation: 2,
  },
  roundText: {
    fontFamily: "open-sans",
    fontSize: 17,
  },
  itemText: {
    fontFamily: "open-sans-bold",
    fontSize: 21,
    color: "#0a043c",
  },
});

export default GameScreen;
