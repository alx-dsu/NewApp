import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
} from "react-native";
import "../global.css";

import { getLatestGames } from "../lib/games.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard, AnimateGameCard } from "./GameCard.jsx";
import Screen from "./Screen.jsx";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen>
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
    </Screen>
  );
}
