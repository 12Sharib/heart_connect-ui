import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import  Carousel  from "react-native-snap-carousel";
import ViewPropTypes from 'deprecated-react-native-prop-types';


export default function Profile() {
  const data = [
    {
      id: 1,
      heading: "Premium",
      description:
        "Unlock all of our features to be in complete control of your experience",
      rate: "Upgrade from from 199.00 INR",
    },
    {
      id: 2,
      heading: "Boost",
      description:
        "More chances to match with extra features to boost your profile",
      rate: "Upgrade from from 99.00 INR",
    },
  ];
  const features = [
    "Unlimited Likes",
    "Beeline",
    "Advanced filters",
    "Incognito mode",
    "Travel mode",
    "5 SuperSwipes a week",
    "1 Spotlight a week",
    "Unlimited Extends",
    "Unlimited Rematch",
    "Unlimited Backtrack",
    "Unlimited Best Bee likes"
  ];

  const options = [
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      <Entypo name="check" size={24} color="#ffcb37" />,
    ],
    [<Entypo name="check" size={24} color="#ffcb37" />, " "],
    [<Entypo name="check" size={24} color="#ffcb37" />, " "],
    [<Entypo name="check" size={24} color="#ffcb37" />, " "],
    [<Entypo name="check" size={24} color="#ffcb37" />, " "],
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      <Entypo name="check" size={24} color="#ffcb37" />,
    ],
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      <Entypo name="check" size={24} color="#ffcb37" />,
    ],
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      <Entypo name="check" size={24} color="#ffcb37" />,
    ],
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      <Entypo name="check" size={24} color="#ffcb37" />,
    ],
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      <Entypo name="check" size={24} color="#ffcb37" />,
    ],
    [
      <Entypo name="check" size={24} color="#ffcb37" />,
      " ",
    ],
  
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselContainer}>
      {/* <Image source={item.source} style={styles.image} /> */}
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.heading}</Text>
      <Text style={{ textAlign: "center", width: 300 }}>
        {item.description}
      </Text>
      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={{ color: "black" }}>{item.rate}</Text>
      </TouchableOpacity>
    </View>
  );
  const [selectedPlan, setSelectedPlan] = useState("MyPayPlan");

  const handlePress = (plan) => {
    setSelectedPlan(plan);
  };
  const navigation = useNavigation();

  const goToSettingsScreen = () => {
    // Navigate to the "Settings" screen
    navigation.navigate("Settings"); // Replace 'Settings' with the actual name of your settings screen
  };
  const goToCompleteProfileScreen = () =>{
    navigation.navigate("CompleteProfile");
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <View>
          <Ionicons name="reorder-three-outline" size={40} color="black" />
        </View>
        <View style={styles.rightIcons}>
          <View style={styles.iconStyle}>
            <MaterialIcons name="qr-code-scanner" size={30} color="black" />
          </View>
          <TouchableOpacity onPress={goToSettingsScreen}>
            <Ionicons name="settings-sharp" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.profileImage}></View>
          <Text style={styles.text}>Sharib, 23</Text>
          <TouchableOpacity style={styles.completeProfileLabel} onPress={goToCompleteProfileScreen}>
            <Text>Complete my profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.plans}>
          <TouchableOpacity
            style={[
              styles.planLabel,
              selectedPlan === "MyPayPlan" && { backgroundColor: "black" },
            ]}
            onPress={() => handlePress("MyPayPlan")}
          >
            <Text
              style={{
                color: selectedPlan === "MyPayPlan" ? "white" : "black",
                paddingLeft: 10,
                paddingRight: 10,
                fontWeight: "bold",
              }}
            >
              My pay plan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.planLabel,
              selectedPlan === "SafetyWellbeing" && {
                backgroundColor: "black",
              },
            ]}
            onPress={() => handlePress("SafetyWellbeing")}
          >
            <Text
              style={{
                color: selectedPlan === "SafetyWellbeing" ? "white" : "black",
                paddingLeft: 10,
                paddingRight: 10,
                fontWeight: "bold",
              }}
            >
              Safety & Wellbeing
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.spotlight}>
        <TouchableOpacity style={styles.spotlightLabel}>
          <View style={{ marginRight: 4 }}>
            <MaterialIcons name="stars" size={40} color="black" />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Spotlight</Text>
            <Text>from 29.97 INR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.spotlightLabel}>
          <View style={{ marginRight: 4 }}>
            <MaterialIcons name="stars" size={40} color="black" />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>SuperSwipe</Text>
            <Text>from 19.94 INR</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={350}
      />
      <View style={styles.upgradeFeatures}>
        <View style={styles.featureSection}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.featureTitle}>What you get:</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 5, fontWeight: "bold" }}>
                Premium
              </Text>
              <Text>Boost</Text>
            </View>
          </View>
          <View>
            {features.map((feature, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin:5,
                }}
              >
                <Text style={{fontWeight:"500"}}>{feature}</Text>
                <View style={styles.optionItem}>
                  <Text
                    style={[
                      styles.featureItem,
                      options[index][1] !== " " ? { marginRight: 27 } : null,
                    ]}
                  >
                    {options[index][0]}
                  </Text>

                  <Text>{options[index][1]}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* <View style={styles.featureSection}>
          <View style={styles.upgradeOptions}>
            <View style={styles.optionItem}></View>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  rightIcons: {
    flexDirection: "row",
    marginRight: 8,
  },
  iconStyle: {
    marginRight: 15,
  },
  profileContainer: {
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderRadius: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  completeProfileLabel: {
    paddingLeft: 15,
    paddingRight: 15,
    padding: 3,
    margin: 3,
    borderRadius: 50,
    backgroundColor: "#deddd7",
  },
  plans: {
    flexDirection: "row",
    margin: 4,
  },
  planLabel: {
    marginRight: 6,
    padding: 10,
    borderRadius: 50,
  },
  spotlight: {
    flexDirection: "row",
    margin: 4,
    padding: 5,
    justifyContent: "space-evenly",
    flexWrap: "nowrap",
  },
  spotlightLabel: {
    borderWidth: 0.5,
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
    paddingRight: 20,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  carouselContainer: {
    height: 150,
    width: 350,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    flexWrap: "nowrap",
    paddingTop: 10,
    backgroundColor: "#ffcb37",
  },
  upgradeButton: {
    backgroundColor: "white",
    margin: 4,
    padding: 10,
    borderRadius: 50,
    marginTop: 15,
  },
  upgradeFeatures: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  upgradeOptions: {
    flexDirection: "row",
  },
  upgradeFeatures: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  featureSection: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  featureTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  featureItem: {
    marginBottom: 5,
    marginRight: 50,
  },
  upgradeOptions: {
    flexDirection: "column",
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
