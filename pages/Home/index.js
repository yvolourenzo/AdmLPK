import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { useNavigation } from '@react-navigation/native';
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';

export default function Home(){
    const navigation = useNavigation();

    function navegaDetalhes(){
        navigation.navigate('Detalhes')
    }

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.welcomeText}>Bem vindo, Luis</Text>
            </View>

            <ScrollView style={styles.rowBotoes}
             horizontal={true}
             showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.iconsStyle} onPress={ navegaDetalhes }>
            <Fontisto style={styles.fontI} name="clock" size={60}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconsStyle} onPress={ navegaDetalhes }>
            <FontAwesome5 style={styles.fontI} name="skull" size={60}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconsStyle} onPress={ navegaDetalhes }>
            <Materialicons style={styles.fontI} name="science" size={60}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconsStyle} onPress={ navegaDetalhes }>
            <AntDesign style={styles.fontI} name="appstore1" size={60}/>
            </TouchableOpacity>

            </ScrollView>

         
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsStyle:{
        color: '#000',
        borderColor: '#000',
        borderRadius: 30,
        borderWidth: 5,
        width: 80,
        alignItems: 'center',
        marginLeft: 10,
        height: 80,
        backgroundColor: '#0001'
    },
    fontI:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    rowBotoes:{
        marginTop: 10,
    },
    header:{
        alignItems: 'flex-start',
        color: '#000',
    },
    welcomeText:{
        fontSize: 30,
    }
 
})