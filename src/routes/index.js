import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from 'react-native-vector-icons/Feather';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Hospitais from '../pages/Hospitais';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
         <Tab.Navigator
         //  Se colocaar dentro do tab.navigator , todas screens nao vao ter
         screenOptions={{
            headerShown: false,
            // qndo teclado abrir a tab nao fica sobre o teclado
            tabBarHideOnKeyboard: true,
            // Se exibe ou não a descrição da tab
            tabBarShowLabel: false,
            // Para mudar a cor quando estiver ativo
            tabBarActiveTintColor: '#fff',
            // estilizando a tab bar
            tabBarStyle:{
                backgroundColor: '#00A374',
            // por padrão ele tem uma borda em cima
            // entao é possivel tiraar com o 0 
                borderTopWidth: 0,
                color: '#fff',
               
            }
         }}
         >
          <Tab.Screen
          name="HomeStack"
          component={StackRoutes}
          options={{
            tabBarIcon: ({color,size}) => {
                return <Feather name="home" color={color} size={size}/>
            },
          }}
          />

          <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            //Para esconder o header da pag contato
            headerShown:false,
            tabBarIcon: ({color,size}) => {
                return <Feather name="user-plus" color={color} size={size}/>
            },
          }}
          />

          <Tab.Screen
          name="Adicionar Hospitais"
          component={Hospitais}
          options={{
            //Para esconder o header da pag contato
            headerShown:true,
            tabBarIcon: ({color,size}) => {
                return <FontAwesome name="hospital-o" color={color} size={size}/>
            },
            headerStyle: {
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: "center",
          }}
          />
         </Tab.Navigator>
    )
}