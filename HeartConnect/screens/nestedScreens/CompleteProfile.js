import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome6,
  Octicons,
} from "@expo/vector-icons";
import InfoView from "../../components/nestedComponents/InfoView";

export default function CompleteProfile() {
  const basicsData = [
    {
      id: 1,
      logo: <Entypo name="home" size={24} color="black" />,
      info: "Work",
    },
    {
      id: 2,
      logo: <Entypo name="graduation-cap" size={24} color="black" />,
      info: "Education",
    },
    {
      id: 3,
      logo: <Entypo name="man" size={24} color="black" />,
      info: "Gender",
    },
    {
      id: 4,
      logo: <Entypo name="location-pin" size={24} color="black" />,
      info: "Location",
    },
    {
      id: 5,
      logo: <Entypo name="home" size={24} color="black" />,
      info: "Hometown",
    },
  ];
  const moreAboutData = [
    {
      id: 1,
      logo: <MaterialIcons name="linear-scale" size={24} color="black" />,
      info: "Height",
    },
    {
      id: 2,
      logo: <MaterialCommunityIcons name="dumbbell" size={24} color="black" />,
      info: "Exercise",
    },
    {
      id: 3,
      logo: <Entypo name="graduation-cap" size={24} color="black" />,
      info: "Education level",
    },
    {
      id: 4,
      logo: <Entypo name="drink" size={24} color="black" />,
      info: "Drinking",
    },
    {
      id: 5,
      logo: <MaterialCommunityIcons name="smoking" size={24} color="black" />,
      info: "Smoking",
    },
    {
      id: 6,
      logo: <AntDesign name="search1" size={24} color="black" />,
      info: "Looking for",
    },
    {
      id: 7,
      logo: <Octicons name="north-star" size={24} color="black" />,
      info: "Star sign",
    },
    {
      id: 8,
      logo: <AntDesign name="home" size={24} color="black" />,
      info: "Politics",
    },
    {
      id: 9,
      logo: <FontAwesome6 name="hands-bubbles" size={24} color="black" />,
      info: "Religion",
    },
  ];
  return (
    <ScrollView>
      <Text style={styles.heading}>Profile Strength</Text>
      <TouchableOpacity style={styles.strength}>
        <Text>44% Complete</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Photos and videos</Text>
      <Text style={styles.text}>Pick some that show the true you</Text>
      <View style={styles.imagePicker}>
        <View style={styles.topImagesRowContainer}>
          <View style={styles.mainImage}>
            <Text>Best Photo</Text>
          </View>
          <View style={styles.topRightImageContainer}>
            <View style={styles.topRightImageCorner}>
              <Text>Right corner</Text>
            </View>
            <View style={styles.topRightLowerCorner}>
              <Text>Right Corner lower</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.lowerFirstImage}>
            <Text>Lower first</Text>
          </View>
          <View style={styles.lowerSecondImage}>
            <Text>Lower second </Text>
          </View>
          <View style={styles.lowerThirdImage}>
            <Text>Lower Third </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.bestPhotoVerifyContainer}>
        <FontAwesome name="photo" size={24} color="black" />
        <Text style={{ marginLeft: 10, fontSize: 16 }}>Best Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bestPhotoVerifyContainer}>
        <MaterialIcons name="verified-user" size={24} color="black" />
        <Text style={{ marginLeft: 10, fontSize: 16 }}>Verify my profile</Text>
      </TouchableOpacity>
      {/* My intrests */}
      <View>
        <Text style={styles.heading}> My Interests </Text>
        <Text style={styles.text}>Get specific about the things you love</Text>

        {/* My intrest container */}
        <View style={styles.intrestContainer}>
          {/* Intrest Upper Column */}
          <View style={styles.interestUpperColumnContainer}>
            <Text>No favorite interest added</Text>

            <TouchableOpacity style={styles.interestUpperColumn}>
              <Text style={{ fontSize: 17 }}>
                <AntDesign name="plus" size={24} color="black" />
                Add
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.interestLowerColumn}>
            <InfoView data={"Gym"} />
            <InfoView data={"Cooking"} />
            <InfoView data={"Biryani"} />
          </View>
        </View>
      </View>
      {/* Profile prompts */}
      <View style={{ marginTop: 5 }}>
        <Text style={styles.heading}>Profile prompts</Text>
        <Text style={styles.text}>
          Make your personality stand out from the crowd
        </Text>
        <TouchableOpacity style={styles.addPrompt}>
          <Text style={{ fontSize: 17 }}>Add a prompt</Text>
        </TouchableOpacity>
      </View>
      {/* Opening question */}
      <View style={{ marginTop: 5 }}>
        <Text style={styles.heading}>Opening a question</Text>
        <Text style={styles.text}>See who you vibe before matching</Text>
        <TouchableOpacity style={styles.addPrompt}>
          <Text style={{ fontSize: 17 }}>Add an opening question</Text>
        </TouchableOpacity>
      </View>
      {/* My bio */}
      <View style={{ marginTop: 5 }}>
        <Text style={styles.heading}>My bio</Text>
        <Text style={styles.text}>write a fun and punchy intro</Text>
        <TouchableOpacity style={styles.addBio}>
          <Text style={{ fontSize: 17 }}>A little bit about you...</Text>
        </TouchableOpacity>
      </View>
      {/* My basics */}
      <View style={{ margin: 5 }}>
        <Text style={[styles.heading, { marginTop: 10, marginBottom: 10 }]}>
          My basics
        </Text>

        {basicsData.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              margin: 7,
              padding: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text> {data.logo}</Text>
              <Text style={{ margin: 5, marginLeft: 10, fontSize: 16 }}>
                {data.info}
              </Text>
            </View>

            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>
      {/* More about me */}
      <View>
        <Text style={styles.heading}>More about me</Text>
        <Text style={styles.text}>
          Cover the thing most people are curios about
        </Text>
        {moreAboutData.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              margin: 7,
              padding: 1,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text> {data.logo}</Text>
              <Text style={{ margin: 5, marginLeft: 10, fontSize: 16 }}>
                {data.info}
              </Text>
            </View>

            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>
      {/* My pronouns */}
      <View style={{ marginTop: 5 }}>
        <Text style={styles.heading}>My pronouns</Text>
        <Text style={styles.text}>Be you on Bumble and pick your pronouns</Text>
        <TouchableOpacity style={styles.addPrompt}>
          <Text style={{ fontSize: 17 }}>he/him</Text>
        </TouchableOpacity>
      </View>
      {/* Languages I know */}
      <View style={{ marginTop: 5 }}>
        <Text style={styles.heading}>Languages I know</Text>
       
        <TouchableOpacity style={styles.addPrompt}>
          <Text style={{ fontSize: 17 }}>English, Hindi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 4,
  },
  text: {
    marginLeft: 10,
  },
  strength: {
    borderWidth: 0.5,
    borderRadius: 30,
    padding: 15,
    margin: 5,
  },
  imagePicker: {},
  topImagesRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainImage: {
    height: 250,
    width: 260,
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 5,
  },
  topRightImageContainer: {
    height: 250,
    width: 140,
    borderRadius: 20,
    margin: 5,
    marginRight: 10,
  },
  topRightImageCorner: {
    borderWidth: 0.5,
    height: 120,
    borderRadius: 20,
    marginBottom: 7,
    marginRight: 10,
  },
  topRightLowerCorner: {
    borderWidth: 0.5,
    height: 120,
    borderRadius: 20,
    marginRight: 10,
  },
  lowerFirstImage: {
    borderWidth: 0.5,
    height: 120,
    width: 125,
    borderRadius: 20,
    marginRight: 8,
    marginLeft: 8,
  },
  lowerSecondImage: {
    borderWidth: 0.5,
    height: 120,
    width: 125,
    borderRadius: 20,
    marginRight: 8,
  },
  lowerThirdImage: {
    borderWidth: 0.5,
    height: 120,
    width: 125,
    borderRadius: 20,
  },
  bestPhotoVerifyContainer: {
    margin: 5,
    padding: 10,
    flexDirection: "row",
  },
  intrestContainer: {
    flexDirection: "column",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
  selectedIntrest: {
    flexDirection: "row",
    borderTopWidth: 1,
    margin: 10,
    padding: 4,
  },
  interestUpperColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  interestUpperColumn: {
    width: 100,
    backgroundColor: "#ffcb37",
    padding: 5,
    borderRadius: 20,
    alignItems: "center",
  },
  interestLowerColumn: {
    flexDirection: "row",
    borderTopWidth: 1,
    marginTop: 5,
    padding: 5,
  },
  addPrompt: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 20,
  },
  addBio: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 20,
    height: 100,
  },
});
