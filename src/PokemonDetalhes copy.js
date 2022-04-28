import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView, Button, View, Image} from 'react-native';
import {pegarPokemon} from './services/PokemonService';
import {capitalize, getColorFromType} from './util';

export default props => {
  let id = props.route.params.id;
  let pokemon = pegarPokemon(id);
  let name = capitalize(pokemon.name);
  let type = [];
  let typeDefences = [];
  let typeColor = getColorFromType(pokemon.types[0]);

  for (let key in pokemon.types) {
    type.push(
      <Text style={styles.type} key={key}>
        {pokemon.types[key]}
      </Text>,
    );
  }

  for (let key in pokemon.typeDefences) {
    if(pokemon.typeDefences[key])
    typeDefences.push(
      <Text style={styles.dataText} key={key}>
        {pokemon.typeDefences[key]}
      </Text>,
    );
  }

  const botaoVoltar = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    props.navigation.setOptions({title: name, backgroundColor: 'black'});
  });

  return (
    <ScrollView style={[styles.container, {backgroundColor: typeColor}]}>
      <Image
        style={styles.pokeball}
        source={require('../assets/pokeball.png')}
      />
      <View style={styles.fotoContainer}>
        <Image style={styles.foto} source={{uri: pokemon.image}} />
      </View>
      <Text style={styles.texto}>{name}</Text>
      <View style={styles.typeContainer}>{type}</View>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descriptionText}>{pokemon.description}</Text>
      <Text style={styles.dataText}>Species: {pokemon.species}</Text>
      <Text style={styles.dataText}>Height: {pokemon.height}</Text>
      <Text style={styles.dataText}>Weight: {pokemon.weight}</Text>
      <Text style={styles.description}>TypeDefences:</Text>
      <View >{typeDefences}</View>
      <View style={styles.botaoContainer}>
        <Button style={styles.botao} onPress={botaoVoltar} title="Voltar" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBotton: 15,
    flex: 1,
  },
  texto: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  botaoContainer: {
    flex: 1,
    
    justifyContent: 'center',
    marginVertical: 15,
  },
  fotoContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginBotton: 10,
    overflow: 'hidden',
    borderRadius: 150,
  },
  foto: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
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
    margin: 10,
  },
  pokeball: {
    zIndex: -1,
    opacity: 0.15,
    width: 2000,
    height: 2000,
    position: 'absolute',
    tintColor: '#FFF',
    resizeMode: 'repeat',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  dataText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
