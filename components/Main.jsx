import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

import { getLatestGames, getGameDetails } from "../lib/games.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard, AnimateGameCard } from "./GameCard.jsx";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 10 }}>
        <Image source={require("../assets/favicon.png")} />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item, index }) => (
            <AnimateGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
