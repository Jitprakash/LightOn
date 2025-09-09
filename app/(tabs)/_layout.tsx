import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "@/constants/theme";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    position: "absolute",
                    elevation: 0,
                    height: 40,
                    paddingBottom: 8,
                },
            }}>
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
                }}/>
            <Tabs.Screen
                name='Bookmarks'
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="bookmarks" size={size} color={color}/>
                }}/>
            <Tabs.Screen
                name='Create'
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="add-circle" size={size} color={COLORS.primary}/>
                }}/>
            <Tabs.Screen
                name='Notifications'
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="heart" size={size} color={color}/>
                }}/>
            <Tabs.Screen
                name='Profile'
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color}/>
                }}/>
        </Tabs>
    )
}
