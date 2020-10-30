import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
    <View style = {styles.container}>
        <Text>Getting the Weather</Text>
    </View>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1
    }
});