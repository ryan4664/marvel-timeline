import * as React from "react";
import { StyleSheet } from "react-native";
import { IMovie } from "../../types";
import { Text, View } from "../Themed";

interface IProps {
  movie: IMovie;
  index: number;
}

export default function MovieTimelineInfoBox({ movie, index }: IProps) {
  const alignment = index % 2 ? "right" : "left";

  return (
    <View style={[styles.container, styles[alignment]]}>
      <View style={styles.infoContainer}>
        <Text>{movie.title}</Text>
        <Text>{movie.releaseDate.toString()}</Text>
        <Text>{movie.description}</Text>
      </View>
      <View style={styles.spineConnection}></View>
      <View style={styles.spineAttachment}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  left: {
    backgroundColor: "red",
  },
  right: {
    backgroundColor: "white",
  },
  infoContainer: {
    width: 400,
    height: 150,
    backgroundColor: "red",
  },
  spineConnection: {
    width: 150,
    borderBottomColor: "white",
    borderWidth: 1,
    position: "absolute",
    right: -150,
    top: 50,
  },
  spineAttachment: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 30,
    position: "absolute",
    right: -157,
    top: 35,
  },
});
