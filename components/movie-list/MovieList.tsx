import * as React from "react";
import { StyleSheet } from "react-native";
import { IMovie } from "../../types";
import MovieTimelineInfoBox from "../movie-timeline-info-box/MovieTimelineInfoBox";
import { View } from "../Themed";

interface IProps {
  movies: IMovie[];
}

export default function MovieList({ movies }: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.movieContainer}>
        {movies
          .filter((x) => x.id % 2 === 0)
          .map((x, index) => (
            <MovieTimelineInfoBox index={index} movie={x} key={x.title} />
          ))}
      </View>
      <View style={styles.timelineSpineContainer}>
        <View style={styles.timelineSpine}></View>
      </View>
      <View style={styles.movieContainer}>
        {movies
          .filter((x) => x.id % 2 !== 0)
          .map((x, index) => (
            <MovieTimelineInfoBox index={index} movie={x} key={x.title} />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
  },
  movieContainer: {
    flex: 2,
    // backgroundColor: "green",
    alignItems: "center",
  },
  timelineSpineContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    backfaceVisibility: "hidden",
    alignItems: "center",
  },
  timelineSpine: {
    width: 1,
    borderRightColor: "white",
    borderLeftColor: "white",
    borderWidth: 1,
    height: "100%",
  },
});
