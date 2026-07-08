import { IconSymbol } from "@/components/components/ui/icon-symbol";
import { Tabs } from "expo-router";
import React from "react";



export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color} />
                }}
            />
            <Tabs.Screen
                name="stopwatch"
                options={{
                    title:'Stopwatch',
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
                }}
            />
        </Tabs>
    )
}