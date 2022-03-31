import React from 'react';
import Icon from 'react-native-ionicons'
import { StyleSheet, ScrollView, Text } from 'react-native';

import PokemonCard from './PokemonCard';
import PokemonsDb from './PokemonsDb';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 4,
  },
});

const App = props => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    setTimeout(carregarDados, 2000)
  })

  const carregarDados = () => {
    console.log('carregarDados')

    setData(PokemonsDb)
    setLoading(false)
  }
  const abrirDetalhe = id => {
    props.navigation.navigate('Detalhes', { id });
  };

  const capitalize = text => {
    text = text.replace('-', ' ');
    return text.charAt(0).toUpperCase() + text.slice(1, text.length);
  };

  const jsxPokemon = () => (
    <View>
      <Icon name="search" />
      <TextInput
        value={q}
        onChangeText={setQ}
      />
      <ScrollView style={styles.container}>
        {jsxLista()}
      </ScrollView>
    </View>
  )

  const jsxLista = () => {
    let tmp = [];
    for (let key in dataFiltrado) {
      let PokemonDb = dataFiltrado[key];
      let name = capitalize(PokemonDb.name);
      let id = "#" + ("000" + PokemonDb.id).slice(-3);
      tmp.push(
        <PokemonCard
          id={id}
          name={name}
          image={PokemonDb.image}
          types={PokemonDb.types}
          onPress={abrirDetalhe}
        />
      );
    }
    return tmp;

  }

  const jsxLoading = () => (
    <View>
      <ActivityIndicator size="large" />
    </View>
  )

  let dataFiltrado;
  if (q == '') {
    dataFiltrado = data
  } else {
    dataFiltrado = []
    let q2 = q.toUpperCase()
    for (let key in data) {
      let texto = `${data[key].id} ${data[key].name}`
      if (texto.toUpperCase().indexOf(q2) >= 0) {
        dataFiltrado.push(data[key])
      }
    }
  }

  return <ScrollView style={styles.container}>{loading ? jsxLoading : jsxPokemon}</ScrollView>;
};

export default App;
