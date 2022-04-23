import React from 'react';
import {StyleSheet, Text, TouchableHighlight, Image, View} from 'react-native';

import {capitalize} from './util'

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 20,
    overflow: 'hidden',
    marginBottom: 5,
    borderRadius: 15,
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(23, 23, 27, 0.3)',
  },
  name: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  pokemon: {
    width: 115,
    height: 115,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  pokeball: {
    opacity: 0.15,
    width: 150,
    height: 150,
    position: 'absolute',
    right: -15,
    bottom: -15,
    tintColor: '#FFF',
  },
});

const styles2 = {
  container: {
    flexDirection: 'row',
  },
  type: {
    color: '#FFF',
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 5,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
};

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

const PokemonCard = props => {
  let type = [];
  for (let key in props.types) {
    type.push(<Text style={styles2.type} key={key}>{props.types[key]}</Text>);
  }

  let name = capitalize(props.name);
  let id = '#' + ('000' + props.id).slice(-3);

  let typeColor = getColorFromType(props.types[0]);
  
  return (
    <TouchableHighlight onPress={() => props.onPress(props.id)}>
      <View style={[styles.container, {backgroundColor: typeColor}]}>
        <Image
          style={styles.pokemon}
          source={{
            uri: props.image,
          }}
        />
        <Text style={styles.id}>{id}</Text>
        <Text style={styles.name}>{name}</Text>
        <Image
          style={styles.pokeball}
          source={require('../assets/pokeball.png')}
        />
        <View style={styles2.container}>{type}</View>
      </View>
    </TouchableHighlight>
  );
};

export default PokemonCard;
