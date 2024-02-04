import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";

const SettingsInfoView = ({ data, showToggle = true }) => {
  const [dateMode, setDateMode] = useState(false);

  const toggleSwitch = () => {
    setDateMode((previousState) => !previousState);
    // You can add any additional logic here based on the state change
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={toggleSwitch}
      >
        <Text style={styles.label}>{data}</Text>
        {showToggle && (
          <Switch
            trackColor={{ false: "#deddd7", true: "black" }}
            thumbColor={dateMode ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={dateMode}
            style={{
              transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Adjust the size as needed
              marginRight: 9, // Adjust the spacing between the text and the toggle
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 50,
    flexWrap: "nowrap",
    marginTop: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  label: {
    margin: 4,
    paddingLeft: 5,
    flexWrap: "nowrap",
    fontSize: 20,
  },
});

export default SettingsInfoView;
