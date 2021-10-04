import * as React from "react";
import { View, Text } from "../Themed";
import { StyleSheet, Image } from "react-native";

export default function HeroRow() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/heroes/thor.png")}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Thor Odinson</Text>
        <Text style={styles.description}>Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxHeight: 150,
    minWidth: "90%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 20,
  },
  description: {
    fontSize: 15,
  },
  infoContainer: {
    paddingLeft: 10,
    flex: 1,
  },
});
