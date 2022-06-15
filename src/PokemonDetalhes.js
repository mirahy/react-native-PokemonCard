import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, StyleSheet, ScrollView, View, Image, ActivityIndicator} from 'react-native';
import {pegarPokemons} from './services/PokemonService';
import {capitalize, getColorFromType} from './util';

export default props => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let id = props.route.params.id;
  
  useEffect(() => {
    //setTimeout(carregarDados, 2000);
    carregarDados()
  }, []);

  const carregarDados = () => {
    
    pegarPokemons()
      .then(pokemons => {
        
        setData(pokemons)
        setLoading(false)
      })
  }
  console.log(data[id])
  let pokemon = data[id]
  console.log(pokemon)
  let type = [];
  let typeDefences = [];
  //let typeColor = getColorFromType(pokemon.types[0]);
  // let idTitle = '#' + ('000' + id).slice(-3);
  // let name = capitalize(pokemon.name);

  // for (let key in pokemon.types) {
  //   type.push(
  //     <Text style={styles.type} key={key}>
  //       {pokemon.types[key]}
  //     </Text>,
  //   );
  // }

  // for (let key in pokemon.typeDefences) {
  //   if (pokemon.typeDefences[key])
  //     typeDefences.push(
  //       <Text style={styles.dataText} key={key}>
  //         {pokemon.typeDefences[key]}
  //       </Text>,
  //     );
  // }

  const botaoVoltar = () => {
    props.navigation.goBack();
  };

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );


 const jsxPokemon = () => (
    //<View style={[styles.container, {backgroundColor: typeColor}]}>
      {/* <View style={styles.header}>
        <Ionicons name="arrow-back" style={styles.icon} onPress={botaoVoltar} />
      </View>
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
          <Text style={[styles.titulo, {color: typeColor}]}>
            Sobre o pokemon
          </Text>
          <Text style={styles.descricao}>{pokemon.description}</Text>
          <Text style={[styles.titulo2, {color: typeColor}]}>
            Dados principais
          </Text>
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
          <View style={styles.row}>
            <Text style={styles.textoL}> EV Yield: </Text>
            <Text style={styles.textoR}>{pokemon.training.evYield}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textoL}> Catch Rate: </Text>
            <Text style={styles.textoR}>{pokemon.training.catchRate.text}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textoL}>  Base Friendship: </Text>
            <Text style={styles.textoR}>{pokemon.training.baseFriendship.value},
              {pokemon.training.baseFriendship.text}</Text>
          </View>

          <Text style={[styles.titulo2, {color: typeColor}]}>Breending</Text>
          <View style={styles.row}>
            <Text style={styles.textoL}> Egg Groups: </Text>
            <Text style={styles.textoR}>{pokemon.breedings.eggGroups}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textoL}> Egg Cycles: </Text>
            <Text style={styles.textoR}>{pokemon.breedings.eggCycles.text}</Text>
          </View>
        </View>
      </ScrollView> */}
    //</View>
  );

  return loading ? jsxLoading() : jsxPokemon();

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  navbar: {
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  header: {
    padding: 20,
  },
  id: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imgPokemon: {
    zIndex: 1,
    width: 170,
    height: 170,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 5,
    bottom: -70,
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
    bottom: -45,
  },
  titulo: {
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 22,
    fontWeight: 'bold',
  },
  titulo2: {
    marginVertical: 20,
    marginHorizontal: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoL: {
    color: '#000000',
    width: 120,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoR: {
    flex: 1,
    color: '#747476',
    fontSize: 14,
    marginBottom: 10,
  },
  descricao: {
    color: '#747476',
    fontSize: 16,
    marginBottom: 10,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 60,
    marginHorizontal: 10,
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 60,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  icon: {
    color: '#FFF',
    position: 'absolute',
    left: 20,
    bottom: 22,
    fontFamily: 'Ionicons',
    fontSize: 32,
  },
});
