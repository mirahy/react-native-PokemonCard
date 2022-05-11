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
  let idTitle = '#' + ('000' + id).slice(-3);

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
    <View style={[styles.container, {backgroundColor: typeColor}]}>
      <View style={styles.navbar}>
      <Text style={styles.id}>{idTitle}</Text>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.typeContainer}>{type}</View>
      <Image
        style={styles.imgPokeball}
        source={require('../assets/pokeball.png')}
      />
        <Image style={styles.imgPokemon} source={{uri: pokemon.image}} />
      </View>
      
      <ScrollView style={styles.body}>
        <View style={styles.containerBody}>
          <Text style={[styles.titulo, {color: typeColor}]}>Sobre o pokemon</Text>
          <Text style={styles.descricao}>{pokemon.description}</Text>
          <Text style={[styles.titulo2, {color: typeColor}]}>Dados principais</Text>
          <View style={styles.row}>
          <Text style={styles.textoL}>Espécie: </Text>
          <Text style={styles.textoR}>{pokemon.species}</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.textoL}>Tamanho: </Text>
          <Text style={styles.textoR}>{pokemon.height}m</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.textoL}>Peso: </Text>
          <Text style={styles.textoR}>{pokemon.weight}Kg</Text>
          </View>

          <Text style={[styles.titulo2, {color: typeColor}]}>Treinamento</Text>
          
          <Text style={styles.description}>TypeDefences:</Text>
          <View >{typeDefences}</View>
          <View style={styles.botaoContainer}>
          <Button style={styles.botao} onPress={botaoVoltar} title="Voltar" />
          </View>

        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  navbar: {
    paddingVertical: 0,
    paddingHorizontal: 20
  },
  header: {
    padding: 20
  },
  id: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  name: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
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
  imgPokemon: {
    zIndex: 1,
    width: 200,
    height: 200,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
    bottom: -80
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
    margin: 10,
  },
  imgPokeball: {
    width: 200,
    height: 200,
    opacity: 0.2,
    tintColor: '#FFF',
    position: 'absolute',
    right: -30,
    bottom: -45
  },
  titulo: {
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 22,
    fontWeight: 'bold'
  },
  titulo2: {
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 16,
    fontWeight: 'bold'
  },
  descricao: {
    color: '#747476',
    fontSize: 16,
    marginBottom: 10
  },
  dataText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 60,
    marginHorizontal: 10
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 20
  },
  textoL: {
    color: '#000000',
    width: 120,
    fontSize: 14,
    fontWeight: 'bold'
  },
  textoR: {
    color: '#747476',
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
});
