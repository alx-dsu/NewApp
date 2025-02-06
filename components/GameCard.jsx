import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Pressable,
} from "react-native";
import "../global.css";
import { Link } from "expo-router";
// import { styled } from "nativewind";

// const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.id}`}>
      <Pressable
        className="active:opacity-70 border border-black 
      active:border-white/50 mb-2 bg-gray-200/10 rounded-xl p-4"
      >
        <View className="flex-row gap-4" key={game.id}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View>
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Text style={styles.title}>{game.releaseDate}</Text>
            <Text className="mt-2 flex-1" style={styles.description}>
              {game.description}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimateGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 25,
  },
  image: {
    width: 225,
    height: 125,
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#eee",
  },
});
