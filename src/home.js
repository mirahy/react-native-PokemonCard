import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import PokemonCard from './PokemonCard';
import PokemonsDb from './PokemonsDb';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 4,
  },
});

const App = props => {
  const abrirDetalhe = id => {
    props.navigation.navigate('Detalhes', {id});
  };

  const capitalize = text => {
    text = text.replace('-', ' ');
    return text.charAt(0).toUpperCase() + text.slice(1, text.length);
  };

  let pokemonsJsx = [];
  for (let key in PokemonsDb) {
    let PokemonDb = PokemonsDb[key];
    let name = capitalize(PokemonDb.name);
    let id = "#" + ("000" + PokemonDb.id).slice(-3);
    pokemonsJsx.push(
    <PokemonCard 
        id={id} 
        name={name}
        image = {PokemonDb.image}
        types ={PokemonDb.types}
        onPress={abrirDetalhe}
        />
        );
  }

  return <ScrollView style={styles.container}>{pokemonsJsx}</ScrollView>;
};

export default App;
