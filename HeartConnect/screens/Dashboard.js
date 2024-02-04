import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import InfoView from "../components/nestedComponents/InfoView";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import LikeDislikeButtons from "../components/nestedComponents/LikeDislikeButtons";

export default function Dashboard() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [activeSlide, setActiveSlide] = React.useState(0);
  const renderItem = ({ item }) => (
    <View style={styles.image}>
      {/* <Image source={item.source} style={styles.image} /> */}
      <Text>Photo to be like {item.id}</Text>
      <Text style={styles.imageEntity}>Name of User & age</Text>
    </View>
  );
  return (
    <ScrollView
      style={{
        margin: 5,
        backgroundColor: "#fcf0f0",
        padding: 3,
        borderRadius: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainImage}>
        <Text>User Photo</Text>
        <Text style={styles.imageEntity}>Name of User & age</Text>
      </View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={300}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <LikeDislikeButtons
          icon={<FontAwesome5 name="heart-broken" size={24} color="black" />}
          buttonData={"Not for me"}
        />
        <LikeDislikeButtons
          icon={<AntDesign name="heart" size={24} color="black" />}
          buttonData={"For me"}
        />
      </View>
      <View>
        <Text style={styles.text}>Intrests in common</Text>
        <View style={styles.userInfo}>
          <InfoView data={"Gym"} />
        </View>
        <Text style={styles.text}>My Basics</Text>
        <View style={styles.userInfo}>
          <InfoView data={"154cm"} />
          <InfoView data={"In College"} />
          <InfoView data={"Women"} />
          <InfoView data={"Relationship"} />
          <InfoView data={"Capricorn"} />
        </View>
        <Text style={styles.text}>My Intrests</Text>
        <View style={styles.userInfo}>
          <InfoView data={"Design"} />
          <InfoView data={"Photography"} />
          <InfoView data={"Horror"} />
          <InfoView data={"Road Trips"} />
          <InfoView data={"Deep Chats"} />
        </View>
      </View>
      <Text style={styles.text}>Languages I know</Text>
      <View style={styles.userInfo}>
        <InfoView data={"English"} />
        <InfoView data={"Hindi"} />
      </View>
      <Text style={styles.text}>User's Location</Text>
      <View>
        <Text style={{fontWeight:"bold", fontSize:18, margin:4}}>Pune</Text>
        <Text style={{fontWeight:"bold", fontSize:18, marginLeft:4}}>5 km away</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <LikeDislikeButtons
          icon={<FontAwesome5 name="heart-broken" size={24} color="black" />}
          buttonData={"Not for me"}
        />
        <LikeDislikeButtons
          icon={<AntDesign name="heart" size={24} color="black" />}
          buttonData={"For me"}
        />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          margin: 5,
          borderRadius: 50,
          padding: 5,
          width: 200,
        }}
      >
        <Text style={{ fontSize: 19, alignSelf: "center", fontWeight: "bold" }}>
          Hide & Report
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          margin: 5,
          borderRadius: 50,
          padding: 5,
          width: 380,
          backgroundColor:"#d1cdcb",
        }}
      >
        <Text style={{ fontSize: 19, alignSelf: "center", fontWeight:"bold" }}>
          Recommend to a friend
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainImage: {
    alignItems: "center",
    borderWidth: 1,
    height: 340,
    width: 280,
    alignSelf: "center",
    borderRadius: 20,
    margin: 4,
  },
  image: {
    alignItems: "center",
    borderWidth: 1,
    height: 340,
    width: 280,
    borderRadius: 20,
    margin: 4,
  },
  imageEntity: {
    alignSelf: "flex-start",
    top: 280,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  paginationContainer: {
    margin: -20,
  },

  paginationDot: {
    width: 14,
    backgroundColor: "#ffcb37",
  },
  paginationInactiveDot: {
    backgroundColor: "rgba(0, 0, 0, 0.32)",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
    margin: 5,
  },
  userInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
