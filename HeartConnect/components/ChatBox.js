import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ChatBox({ photo, name, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Text>{photo}</Text>
      </View>
      <View style={styles.details}>
        <Text>{name}</Text>
        <Text numberOfLines={2}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 5,
    padding: 5,
    borderRadius: 15,
    backgroundColor:"#ffcb37",
    padding:8,
  },
  photo: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
  },
  details: {
    flex: 1, // Allow details to take remaining space
    margin: 5,
    padding: 3,
  },
});
