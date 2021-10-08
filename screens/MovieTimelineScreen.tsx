import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MovieList from "../components/movie-list/MovieList";
import { IMovie } from "../types";

const movies: IMovie[] = [
  {
    id: 0,
    title: "Captain America",
    description:
      "During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.",
    releaseDate: new Date("07-22-2011"),
  },
  // {
  //   id: 1,
  //   title: "Captain Marvel",
  //   description:
  //     "Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent.",
  //   releaseDate: new Date("07-22-2011"),
  // },
];

export default function MovieTimelineScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MovieList movies={movies} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
