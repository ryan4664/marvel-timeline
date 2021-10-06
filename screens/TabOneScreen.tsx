import * as React from "react";
import { FlatList, SafeAreaView, StyleSheet, TextInput } from "react-native";
import HeroRow from "../components/hero-row/HeroRow";
import { Text, View } from "../components/Themed";
import { IHero, RootTabScreenProps } from "../types";

const herosList: IHero[] = [
  {
    name: "Thor Odinson",
    description:
      "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
    profilePhotoPath: require("../assets/heroes/thor.png"),
  },
  {
    name: "Bruce Banner (Hulk)",
    description:
      "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
    profilePhotoPath: require("../assets/heroes/hulk.png"),
  },
];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [heros, setHeros] = React.useState<IHero[]>(herosList);
  const [searchText, setSearchText] = React.useState<string>("");

  React.useEffect(() => {
    if (searchText.length) {
      let newHeroList = herosList.filter((x) => x.name.includes(searchText));
      setHeros([...newHeroList])
    } else {
      setHeros(herosList);
    }
  }, [searchText]);

  const renderItem = ({ item, index }: { item: IHero; index: number }) => (
    <HeroRow hero={item} index={index} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={heros}
        renderItem={renderItem}
        keyExtractor={(x) => x.name}
      />
    </SafeAreaView>
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
  searchInput: {
    minHeight: 40,
    minWidth: "90%",
    backgroundColor: "white",
  },
});
