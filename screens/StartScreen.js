import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/Color'

const StartScreen = props => {
    return(
        <View style={styles.startScreen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" color={Colors.accent} onPress={() => {}} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    startScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        marginVertical: 15
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    button: {
        width: 90
    }
})

export default StartScreen