import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function InfoView({ data }) {
  return (
    <View>
      <TouchableOpacity style={styles.dataView}>
        <Text style={styles.dataText}>{data}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dataView: {
    paddingVertical: 3,
    paddingHorizontal:8,
    borderRadius: 50,
    margin: 8,
    backgroundColor: "#FFDB4D",
    flexWrap: 'nowrap', // Prevent text from wrapping
  },
  dataText: {
    margin: 5,
    paddingLeft: 5,
    flexWrap: 'nowrap', // Ensure text content stays on the same line
  },
});
