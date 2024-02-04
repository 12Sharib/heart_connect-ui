import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ChatBox from "../components/ChatBox";

export default function Chats() {
  return (
    <SafeAreaView style={{ flex: 3 }}>
      <Text style={styles.text}>Match Queue</Text>
      <ChatBox
        photo={"photo"}
        description={"Spotlight is the easiest way ti up your odds of a match!"}
      />

      <Text style={styles.text}>Chats</Text>
      <ChatBox
        photo={"photo"}
        name={"Bumble"}
        description={"Woohoo! you've got a free like you've..."}
      />
      <ChatBox
        photo={"photo"}
        name={"Chayn"}
        description={"Hello, we're Chayn a survivor-led non..."}
      />
      <ChatBox
        photo={"photo"}
        name={"It's all about safety"}
        description={"Thanks you for being on bumble! Please be in..."}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:"bold"
  }
})
