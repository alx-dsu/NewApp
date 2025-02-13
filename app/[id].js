import { Text, View, Pressable, ActivityIndicator, ScrollView, Image } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import "../global.css";
import Screen from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/games";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if(id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id])

  return (
    <Screen>
      <Stack.Screen options={{
        headerStyle:{backgroundColor: "#ffee12"},
        headerTintColor: "black",
        headerLeft: () => {},
        headerTitle: `Juego ${id}`,
        headerRight: () => {},
      }}/>

      <View>
        {
          gameInfo === null ? (
            <ActivityIndicator color={"#fff"} size={"large"}/> ) : 
          (
            <ScrollView>
              <View className="justify-center items-center text-center">
              <Image className="mb-4 rounded" source={{ uri: `${gameInfo.image}` }} style={{width: 225, height:125}} />
              <Text className="text-white font-bold mb-8 text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
              </View>
            </ScrollView>
          )
        }
      </View>
    </Screen>
  );
}
