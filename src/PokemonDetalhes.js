import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {pegarPokemon} from './services/PokemonService';
import PokemonTexto from './PokemonTexto';
import PokemonFoto from './PokemonFoto';


const Tab = createBottomTabNavigator();

export default props => {
  let id = props.route.params.id;
  let pokemon = pegarPokemon(id);

  useEffect(() => {
    props.navigation.setOptions({ title: pokemon.name })
  })

  // screenOptions={{ headerShow: false }}

  return (
      <Tab.Navigator
      screenOptions={params => {
        return {
          headerShown: false,
          tabBarIcon: params2 => {
            let iconName;
            if (params.route.name == 'Texto') {
              iconName = 'text-outline'
            } else if (params.route.name == 'Foto') {
              iconName = 'image-outline'
            }
    
            return <Ionicons name={iconName}
              size={params2.size} color={params2.color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        }
      }}
      >
        <Tab.Screen name="Texto" component={PokemonTexto}
          initialParams={{id}} />
        <Tab.Screen name="Foto" component={PokemonFoto}
          initialParams={{id}} />
      </Tab.Navigator>
  );
};

