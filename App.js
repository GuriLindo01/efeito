import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [mensagem, setMensagem]= useState("Carregando...")
  useEffect(()=>{
    setTimeout(()=>{setMensagem("Não pare, faça até dar errado!");
    },5000 );
  },[]);

  return (
    <View style={{marginLeft: 50, marginTop:50, fontSize: 80, alignItems: 'center', backgroundColor: "lightblue", padding: 20, borderRadius: 13, width: 300}}>
      <Text style={{fontWeight: 'bold'}}>{mensagem}</Text>
    </View>
  );
}
