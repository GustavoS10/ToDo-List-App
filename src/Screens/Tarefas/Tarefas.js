import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TouchableOpacity, TextInput, Linking, RefreshControl, ScrollView} from 'react-native';
import styles from './style';
import { useLayoutEffect, useState } from 'react';
import Tabela from '../../Tabela/Tabela';
import Table from './Table';

export default function Tarefas() {

  const [delT, setDelT]     = useState("")
  const [msg, setMsg]       = useState("")
  const [i, setI]           = useState(false)

  let tabela = Tabela
  
  const atualizar = ()=>{
    setI(true)
    getData()
    setTimeout(()=>{setDelT("algo")},1)
    setTimeout(()=>{setDelT("")},1)
    setI(false)
  }
  async function getData(){
    try {
      let title  = await AsyncStorage.getItem("@CGK_API");
      let table2 = JSON.parse(title)
      if(table2) {
        table2.map(teste=>{
          if(!Table.includes(teste)){
            Table.push(teste)
            console.log(teste)
          }
        })
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const timeOut= ()=>{
    setTimeout(()=>{
      setMsg("")
    }, 1500)
  }
  const delet = () =>{
    if(delT !== ""){
      Table.forEach(table=>{
        if(delT === table){
          tabela.splice(tabela.indexOf(delT), 1)
          Table.splice(Table.indexOf(delT), 1)
          removeItemValue()
          setMsg(`Tarefa [ ${delT} ] foi removida com sucesso!`)
          setDelT('')
          timeOut()
        }else if(delT !== table){
          setMsg("Não há tarefas cadastras com esse titulo")
          setDelT('')
          timeOut()
        }
      })
    }else if(delT === ''){
      setMsg("Por favor, não tente me bugar, sei que só esta clicando em deletar!")
      setDelT('')
      timeOut()
    }else{
      <View/>
    }
  }
  async function removeItemValue(){
    try {
      await AsyncStorage.removeItem(delT);
      storeData()
    }
    catch(exception) {
      console.log(exception)
    } 
  }
  const storeData = async ()=>{
    try {
      const value = JSON.stringify(Table);
      await AsyncStorage.setItem("@CGK_API", value)
      timeOut()
    } catch (error) {
      return <Text>Algum erro ocorreu ao armazenar a tarefa!</Text>
    }
  }
  useLayoutEffect(()=>{},[Table])
  return (
    <ScrollView style={{paddingTop: 30}} refreshControl={ <RefreshControl refreshing={i} onRefresh={atualizar}/> }>
      <View style={styles.container}>
        <Text style={styles.title}>Tarefas Cadastradas</Text>
        <View style={styles.tarefa}>
          {Table && Table.length > 0 ? Table.map(task=><Text style={styles.link} onPress={()=> Linking.openURL('https://google.com')} key={task}>{task}</Text>) :  <Text>Aguardando atualizar suas tarefas!</Text>}
        </View>
        <Text style={styles.formLabel}>Digite o titulo para deletar sua tarefa já feita</Text>
        <Text style={styles.formLabel}>{msg}</Text>
        <TextInput style={styles.formInput} keyboardType={'default'} value={delT} onChangeText={setDelT} placeholder='Número da tarefa'/>
        <TouchableOpacity style={styles.button} onPress={delet} >
          <Text style={styles.textButton}>Deletar Tarefa!</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


