import React from "react";
import { StyleSheet, Text, ScrollView, View, Pressable} from "react-native";
import Mainslider from "./Mainslider";
import Searchbar from "./Searchbar";
import BoxWithImage from "./BoxWithImage";
import Bike from "./Bike";
import Car from "./Car";
import Truck from "./Truck";
import Set from "./Set";
// import { Icon } from '@rneui/base';
import Icon from "react-native-vector-icons/FontAwesome";

function Main({navigation}) {
  const images = [
    require("../assets/ad.jpg"),
    require("../assets/ad2.png"),
    require("../assets/ad3.jpeg"),
  ];
  return (
    <View style={styles.container}>
      <View style={{marginBottom:'7%'}}>
        <Mainslider images={images} navigation ={navigation}/>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Searchbar />
          <View style={styles.fil}>
            <Pressable onPress={() => navigation.navigate("Filter")}>
              <Icon name="filter" size={35} />
            </Pressable>
          </View>
          <View style={styles.fil}>
            <Icon name="sort" size={35} />
          </View>
        </View>
        <View style={styles.line}>
          <View style={styles.ic}>
            <Car />
          </View>
          <View style={styles.ic}>
            <Truck />
          </View>
          <View style={styles.ic}>
            <Bike />
          </View>
        </View>
        <View style={styles.line}>
          <View style={styles.ic}>
            <Set />
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.column}>
            <BoxWithImage
              imageSource={require("../assets/civic.jpg")}
              name="Honda Civic X"
              description="Automatic, 32,000 KM"
            />
            {/* Content for the first column */}
          </View>
          <View style={styles.column}>
            {/* Content for the second column */}
            <Pressable onPress={() => navigation.navigate("Descp")}>
            <BoxWithImage
              imageSource={require("../assets/corolla.jpg")}
              name="Toyota Corolla 1.3"
              description="Manual, 130,000 KM"
            />
            </Pressable>
          </View>
        </View>
        <View style={styles.grid}>
          <View style={styles.column}>
            <BoxWithImage
              imageSource={require("../assets/download.jpg")}
              name="John"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            {/* Content for the first column */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  grid: {
    // flex: 1,
    flexDirection: "row",
    marginVertical: 20, // Set the direction to horizontal
  },
  column: {
    flex: 0.5,
    paddingHorizontal: 10, // Optional: Add horizontal padding between columns
  },
  container: {
    backgroundColor: "#2F2F32",
    width: "100%",
    paddingTop: 30,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 20,
  },
  ic: {
    marginHorizontal: 12,
  },
  fil: {
    width: 60,
    height: 45,
    backgroundColor: "#ff6161",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 16,
  },
});
