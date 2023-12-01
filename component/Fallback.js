import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/to-do-list.png')}
                style={styles.image}
            />
            <View style={styles.contentContainer}
            >
                <Text style={styles.contentText}>Start Adding Your Task</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    image: {
        height: 300,
        width: 300
    },
    contentContainer: {
        backgroundColor: "#000",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        marginTop: 20,
    },
    contentText: {
        color: "#fff"
    }
});

export default Fallback;