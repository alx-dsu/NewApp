import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcons, InfoIcons } from "../../components/Icons";

export default function TabsLayout(){
    return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor:"#000"}
        }}>
            <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({color}) => <HomeIcons color={color}/>,
            }}
            />
            <Tabs.Screen
            name="about"
            options={{
                title: 'About',
                tabBarIcon: ({color}) => <InfoIcons color={color}/>,
            }}
            />
        </Tabs>
    </View>
    );
}