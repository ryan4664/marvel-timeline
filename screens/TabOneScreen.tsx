import * as React from "react";
import { StyleSheet } from "react-native";
import HeroRow from "../components/hero-row/HeroRow";
import { Text, View } from "../components/Themed";
import { IHero, RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const heroList: IHero[] = [
    {
      name: "Thor Odinson",
      description:
        "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
      profilePhotoPath: "../assets/heroes/thor.png",
    },
    {
      name: "Bruce Banner (Hulk)",
      description:
        "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
      profilePhotoPath: "../assets/heroes/hulk.png",
    },
  ];

  return (
    <View style={styles.container}>
      {heroList.map((x, index) => (
        <HeroRow index={index} hero={x} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
