import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/Screens/Home/HomeScreen'
import Cadastro from './src/Screens/Cadastro/Cadastro'
import Tarefas from './src/Screens/Tarefas/Tarefas'
import { Alert, Modal, Platform, TouchableOpacity, View, Text} from 'react-native';
import * as LocalAuth from 'expo-local-authentication';
import styles from './src/Screens/Home/styles';
import About from './src/Screens/About/About';

const Tab = createMaterialBottomTabNavigator();


export default function App() {

  // useEffect(()=>{
    
  // }, [])

  const [isModalVisible, setisModalVisible] = useState(true)

  async function authenticate(){
    const hasPass = await LocalAuth.isEnrolledAsync()
    if(!hasPass) return;
    const {sucess} = await LocalAuth.authenticateAsync()
    if(!sucess){
      Alert.alert("Autenticação realizada com sucesso!")
    }else{
      Alert.alert("Autenticação falhou...")
    }
    setisModalVisible(false)
  }

  Platform.OS === 'ios' && authenticate()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            {
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-outline'
                  : 'home-outline';
              } else if (route.name === 'Acessar Tarefa') {
                iconName = focused ? 'attach-outline' : 'attach-outline';
              } else if (route.name === 'Cadastrar Tarefa') {
                iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
              } else if (route.name === 'Sobre o ToDo List') {
                iconName = focused ? 'alert-circle-outline' : 'alert-circle-outline';
              }

            // You can return any component that you like here!
              return <Ionicons name={iconName} size={20} color={color} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        initialRouteName="Home"
        activeColor="#FFF"
        inactiveColor="#FFF" 
        barStyle={{backgroundColor: "#c20000", height: 60 }}>
        <Tab.Screen name="Home" component={HomeScreen} t />
        <Tab.Screen name="Acessar Tarefa" component={Tarefas} />
        <Tab.Screen name="Cadastrar Tarefa" component={Cadastro} />
        <Tab.Screen name="Sobre o ToDo List" component={About} />
      </Tab.Navigator>
      {
        Platform.OS === 'android' && (
          <Modal animationType='slide' transparent={true} visible={isModalVisible} onShow={authenticate}>
            <View style={styles.cont}>
              <TouchableOpacity onPress={()=>{
                  setisModalVisible(false)
                }}>
                  <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        )
      }
    </NavigationContainer>
  );
}
