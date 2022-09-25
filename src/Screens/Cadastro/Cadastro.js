import { StatusBar } from 'expo-status-bar';
import { useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View, TouchableOpacity, TextInput, Switch, SafeAreaView, Modal, Image } from 'react-native';


import styles from './style'
import React from 'react';
import Tabela from '../../Tabela/Tabela';

export default function HomeScreen() {

  const [titulo, setTitulo]             = useState("")
  const [btnMsg, setBtnMsg]             = useState("Cadastrar Tarefa!")
  const [msg, setMsg]                   = useState("")
  let tabela = Tabela
  const timeOut=()=>{
    setTimeout(()=>{
      setBtnMsg("Cadastrar Tarefa!")
      setMsg('')
    }, 2000)
  }
  const storeData = async ()=>{
    try {
      if(!tabela.includes(titulo)){
        tabela.push(titulo)
        setBtnMsg("Tarefa Cadastrada")
        setMsg(`Tarefa [ ${titulo} ] cadastrada com sucesso!`)
        setTitulo("");
        const value = JSON.stringify(tabela);
        await AsyncStorage.setItem("@CGK_API", value)
        timeOut()
      }else{
        setMsg("Você está tentando inserir uma tarefa já cadastrada!")
        timeOut()
      }
    } catch (error) {
      return <Text>Algum erro ocorreu ao armazenar a tarefa!</Text>
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro de Tarefas</Text>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Digite o resumo da sua tarefa</Text>
        <Text style={styles.formLabel}>{msg}</Text>
        <TextInput style={styles.formInput} onChangeText={setTitulo} value={titulo} placeholder='Título da tarefa'/>
      </View>
      <TouchableOpacity style={styles.button} onPress={storeData} >
        <Text style={styles.textButton}>{btnMsg}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


