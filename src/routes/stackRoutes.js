import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/Home';
import Detalhes from "../pages/Detalhes";
import Hospitais from "../pages/Hospitais";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

        <Stack.Screen
            name="Detalhes"
            component={Detalhes}
        />

        <Stack.Screen
            name="Hospitais"
            component={Hospitais}
        />
        </Stack.Navigator>
    )
}