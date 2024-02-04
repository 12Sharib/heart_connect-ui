import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Interested() {
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
      <Ionicons name="heart-dislike-sharp" size={40} color="black" />
        <Text style={styles.title}>Interested in You</Text>
        <Text style={styles.description}>
          When someone swipes right on you, you'll be able to find them right here
        </Text>
      </View>
      <View style={styles.lowerContent}>
        <Text style={styles.subtitle}>Less isn't More</Text>
        <Text style={styles.description}>
          The more you share, the more likely you'll find some common ground
        </Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  upperContent: {
    flex:0.5,
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#ffcb37',
    paddingHorizontal: 20,
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30
  },
  lowerContent: {
    alignItems: 'center',
    margin:10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#ffcb37',
    padding: 10,
    borderRadius: 50,
    width:300
  },
  editProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
