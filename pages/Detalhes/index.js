import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Detalhes(){
    return(
       <View>
            <Text>Pagina detalhes do usuario</Text>
       </View>
    );
}