import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import "../global.css";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { getLatestGames, getGameDetails } from "../lib/games.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard, AnimateGameCard } from "./GameCard.jsx";
import { InfoIcons } from "./Icons.jsx";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View className="bg-black">
      {/* <View className="flex-row justify-between items-center mb-4 mx-2">
        <View>
          <Image source={require("../assets/favicon.png")} />
        </View>
        <Link asChild href="/about">
          <Pressable>
            <InfoIcons />
          </Pressable>
        </Link>
      </View> */}
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
