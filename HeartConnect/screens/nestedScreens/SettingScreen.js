import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import SettingsInfoView from "../../components/nestedComponents/SettingsInfoView";

export default function SettingScreen() {
  return (
    <ScrollView>
      <SettingsInfoView data={"Choose mode"} showToggle={false} />
      <SettingsInfoView data={"Date mode"} />
      <Text style={styles.description}>
        Hide you profile in Date and just use BFF or Bizz. If you do this you'll
        lose your connections and chats in Date
      </Text>
      <SettingsInfoView data={"Snooze"} showToggle={false} />
      <Text style={styles.description}>
        Temporarily hide your profile from all modes. If you do this, you won't
        lose any connections or chats.
      </Text>
      <SettingsInfoView data={"Incognito mode"} />
      <Text style={styles.description}>
        Enable Incognito mode so one sees you unless you want them to. Only
        people you swipe right on will be able to view your profile.
      </Text>
      <SettingsInfoView data={"Auto-Spotlight"} />
      <Text style={styles.description}>
        We'll use Spotlight automatically to boost your profile when most people
        will see it
      </Text>
      <Text style={styles.description}>
        Location
      </Text>
      <SettingsInfoView data={"Current location"} showToggle={false} />
      <SettingsInfoView data={"Travel"} showToggle={false} />
      <Text style={styles.description}>
        Change your location to connect with people in other locations.
      </Text>
      <SettingsInfoView data={"Video autoplay settings"} showToggle={false} />
      <SettingsInfoView data={"Notification settings"} showToggle={false} />
      <SettingsInfoView data={"Contact & FAQ"} showToggle={false} />
      <SettingsInfoView data={"Security & Privacy"} showToggle={false} />
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={{fontSize:25, fontWeight:"bold"}}>Log out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  description: {
    textAlign:"left",
    margin:4,
    marginLeft:15
  },
  logoutButton:{
    margin:5,
    alignItems:"center",
    borderRadius:50,
    marginTop:10,
    marginBottom:20,
    padding:6,
    backgroundColor:"#deddd7"
  }
});
