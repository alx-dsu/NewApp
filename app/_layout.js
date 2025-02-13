import { Stack } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { InfoIcons } from "../components/Icons";
import "../global.css";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Image source={require("../assets/favicon.png")} />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <InfoIcons />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
