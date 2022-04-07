import React, {useState, useEffect} from 'react';
import Icon from 'react-native-ionicons';
import {
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  ActivityIndicator,
  Text,
  Image,
  FlatList
} from 'react-native';

import PokemonCard from './PokemonCard';
import PokemonsDb from './PokemonsDb';


const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 8,
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  title: {
    color: '#747476',
    padding: 5,
    fontSize: 32,
    fontWeight: 'bold',
  },
  text1: {
    color: '#747476',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 5,
    padding: 5,
  },
  imgPokeball: {
    zIndex: -1,
    opacity: 0.03,
    width: 400,
    height: 400,
    alignSelf: 'center',
    top: -200,
    position: 'absolute',
  },
});

const stylesSearch = StyleSheet.create({
  input: {
    color: '#747476',
    padding: 15,
    paddingLeft: 50,
    marginBottom: 5,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
  },
  icon: {
    color: '#747476',
    position: 'absolute',
    left: 20,
    bottom: 22,
    fontFamily: 'Ionicons',
    fontSize: 22
  },
});

const App = props => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    setTimeout(carregarDados, 2000);
  });

  const carregarDados = () => {
    
    setData(PokemonsDb);
    setLoading(false);
  };

  const abrirDetalhe = id => {
    props.navigation.navigate('Detalhes', {id});
  };


  const jsxPokemon = () => (
    <View style={[{backgroundColor: '#fff'},styles.container]}>
      <Image
          style={styles.imgPokeball}
          source={
            require('./assets/pokeball.png')
          }
        />
      <View >
        <Text style={styles.title}>Pokédex</Text>
        <Text style={styles.text1}>
          Pesquise um pokemon pelo nome ou usando o número da National Pokedex
        </Text>
        <View>
        
          <TextInput
            style={stylesSearch.input}
            value={q}
            onChangeText={setQ}
            placeholder="Qual pokemon você está procurando?"
            placeholderTextColor="#747476"
          />
          <Icon name="search" style={stylesSearch.icon}/>
        </View>
        
        {/* {jsxLista()} */}
        <FlatList data={dataFiltrado} renderItem={Item} />
      </View>
    </View>
  );

  const Item = props => {
    
    return (
      <PokemonCard
          id={props.item.id}
          name={props.item.name}
          image={props.item.image}
          types={props.item.types}
          onPress={abrirDetalhe}
          description={props.item.description}
          key={props.indexOf}
        />
    );
  };

 /*  const jsxLista = () => {
    let tmp = [];
    for (let key in dataFiltrado) {
      let PokemonDb = dataFiltrado[key];
      let name = capitalize(PokemonDb.name);
      let id = '#' + ('000' + PokemonDb.id).slice(-3);
      tmp.push(
        <PokemonCard
          id={id}
          name={name}
          image={PokemonDb.image}
          types={PokemonDb.types}
          onPress={abrirDetalhe}
          key={key}
        />,
      );
    }
    return tmp;
  }; */

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );

  let dataFiltrado;
  if (q == '') {
    dataFiltrado = data;
  } else {
    dataFiltrado = [];
    let q2 = q.toUpperCase();
    for (let key in data) {
      let texto = `${data[key].id} ${data[key].name}`;
      if (texto.toUpperCase().indexOf(q2) >= 0) {
        dataFiltrado.push(data[key]);
      }
    }
  }

  if (loading) {
    return jsxLoading();
  } else {
    return jsxPokemon();
  }
};

export default App;
