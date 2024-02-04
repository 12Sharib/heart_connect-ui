import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";

export default function BestBees() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [activeSlide, setActiveSlide] = React.useState(0);
  const renderItem = ({ item }) => (
    <View style={styles.image}>
      {/* <Image source={item.source} style={styles.image} /> */}
      <Text>Photo {item.id}</Text>
      <Text style={styles.imageEntity}>Name of User & age</Text>
    </View>
  );
  return (
    <View style={{position:"relative"}}>
      <View style={styles.container}>
        <View>
          <Text style={{ marginTop: 10 }}>
            <Ionicons name="diamond" size={40} color="red" />
          </Text>
        </View>
        <Text style={styles.text}>Best Bees</Text>
        <Text style={{ width: 300, textAlign: "center" }}>
          Today's Super Comapatible people, picked for you. Buzzing about
          someone? Like them to see where it leads
        </Text>
      </View>
      <View style={{position:"absolute", top:170}}>
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
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
     alignItems: "center",
    backgroundColor:"#ffcb37",
    height:350,
    borderBottomLeftRadius:120,
    borderBottomRightRadius:120
  
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    position: "relative",
    height: 500,
    width: 300,
    borderWidth: 1,
    alignItems: "center",
    marginTop: 35,
    borderRadius: 30,
  },
  imageEntity: {
    alignSelf: "flex-start",
    top: 430,
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
});
