import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function LikeDislikeButtons({ icon, buttonData }) {
  return (
    <View>
      <TouchableOpacity style={styles.likeDislike}>
        {icon}
        <Text style={styles.likeDislikeButtons}>{buttonData}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  likeDislike: {
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "#ffcb37",
    elevation: 4,
    shadowColor: "red",
  },
  likeDislikeButtons: {
    fontSize: 18,
    justifyContent: "center",
    marginLeft: 5,
    fontWeight: "bold",
  },
});
