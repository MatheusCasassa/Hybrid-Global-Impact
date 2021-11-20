import AsyncStorage from "@react-native-async-storage/async-storage";
import { keyword } from "chalk";

const insertObject = async (key, value, callback = null) => {
    try {
        const obj = JSON.stringify(value)
        await AsyncStorage.setItem(key, obj, callback)
    } catch (error) {
        throw new Error('Não foi possível inserir objeto no Banco de Dados!')
    }
}

const read = async (key, callback = null) => {
    try{
        await AsyncStorage.getItem(key, callback)
    } catch (error) {
        throw new Error('Não foi possível ler o registro com a chave: ' + key)
    }
}

const clear = async (callback = null) => {
    try{
        await AsyncStorage.clear(callback)
    } catch (error) {
        throw new Error('Não foi possível limpar o Banco de Dados!')
    }
}

export { clear, insertObject, read }