import * as React from "react";
import { View, Text } from "../Themed";
import { StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { IHero } from "../../types";

interface IProps {
  index: number
  hero: IHero
}

export default function HeroRow({index, hero}: IProps) {
  const alignment = index % 2 ? "right" : "left" 

  return (
    <View style={{...styles.container, ...styles[alignment] }}>
      <Image
        style={styles.tinyLogo}
        source={hero.profilePhotoPath}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{hero.name}</Text>
        <Text style={styles.description}>{hero.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight: 150,
    minWidth: "90%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: "row"
  },
  right: {
    flexDirection: "row-reverse"
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
  iconContainer : {
    flex: 1,
    justifyContent: "center",
    alignItems:"flex-end",
    height: "100%"
  },
  icon: {
    color: 'white',
  }
});
