import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView, Button, View, Image} from 'react-native';
import {pegarPokemon} from './services/PokemonService';
import {capitalize} from './util'

export default props => {
  let id = props.route.params.id
  let pokemon = pegarPokemon(id)
  let name = capitalize(pokemon.name);
  let type = [];
  let typeColor = getColorFromType(pokemon.types[0]);

  for (let key in pokemon.types) {
    type.push(<Text style={styles.type} key={key}>{pokemon.types[key]}</Text>);
  }

  const botaoVoltar = () => {
    props.navigation.goBack()
  }

  useEffect(() => {
    props.navigation.setOptions({title: name, backgroundColor: 'black'})
  })
  
  return(
    <ScrollView style={[styles.container, {backgroundColor: typeColor}]}>
      
      <View style={styles.fotoContainer}>
        <Image
        style={styles.foto} 
          source={{uri:pokemon.image}}
        />
      </View>
      <Text style={styles.texto}>{name}</Text>
      <View style={styles.typeContainer}>{type}</View>
      <View style={styles.botaoContainer}>
        <Button
        style={styles.botao}
          onPress={botaoVoltar}
          title="Voltar"
        />

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 20,
    overflow: 'hidden',
  
  },
  texto: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  botaoContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  fotoContainer:{
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBotton: 10,
    overflow: 'hidden',
    borderRadius: 150
  },
  foto:{
    flex: 1,
    aspectRatio: 1,
    risizeMode: 'contain'
  },
  type: {
    color: '#FFFFFF',
    fontSize: 15,
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 5,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
});

const getColorFromType = type => {
  switch (type) {
    default:
      return '#000';
    case 'bug':
      return '#8BD674';
    case 'dark':
      return '#6F6E78';
    case 'dragon':
      return '#7383B9';
    case 'electric':
      return '#ffd86f';
    case 'fairy':
      return '#EBA8C3';
    case 'fighting':
      return '#EB4971';
    case 'fire':
      return '#fb6c6c';
    case 'flying':
      return '#83A2E3';
    case 'ghost':
      return '#8571BE';
    case 'grass':
      return '#48d0b0';
    case 'ground':
      return '#F78551';
    case 'ice':
      return '#91D8DF';
    case 'normal':
      return '#B5B9C4';
    case 'poison':
      return '#9F6E97';
    case 'psychic':
      return '#FF6568';
    case 'rock':
      return '#D4C294';
    case 'steel':
      return '#4C91B2';
    case 'water':
      return '#76bdfe';
  }
};
