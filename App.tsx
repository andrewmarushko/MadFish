import React, {useEffect} from 'react';
import { SafeAreaView, SafeAreaViewBase, Text, View } from 'react-native';
import { TezosToolkit } from '@taquito/taquito';

const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');

const App: React.FC = () => {

  useEffect(() => {
    Tezos.tz
    .getBalance('tz1a17ZmuN3yrnFHFyxyxovhVKuoP5YuCdr8')
    .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
    .catch((error) => console.log(JSON.stringify(error)));
  }, [])
 

  return(
    <SafeAreaView>
      <Text>Hello App</Text>
    </SafeAreaView>
  )
}

export default App;