import React, {
    useState
} from 'react'

import {
    SafeAreaView,
    Text
} from 'react-native'

import {
    Button,
    Input
} from 'react-native-elements'

import { insertObject } from '../../DB'

const Cadastro = (props) => {

    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

    const limparCampos = () => {
        setUsuario('')
        setEmail('')
        setSenha('')
        setConfirmacaoSenha('')
    }

    const validar = () => {
        if ( usuario.trim().length === 0 ) {
            alert('Usuário não informado!')
            return false
        }

        const re = /^([\w]\.?)+@([\w]+\.)+([a-zA-Z]{2,4})+$/
            if ( ! re.test( email ) ) {
                alert('E-mail inválido!')
                return false
            }

        if ( senha.length === 0 ) {
            alert('Senha não informada!')
            return false
        }

        if ( senha !== confirmacaoSenha ) {
            alert('Senhas não coincidem!')
            return false
        }

        return true
    }

    const salvar = () => {
        if ( validar() ) {
            insertObject(usuario, {email, senha}, ( error ) => {
                if ( error ) {
                    alert('Não foi possível cadastrar o usuário em nosso Banco de Dados!')
                } else{
                    alert('Usuário cadastrado com sucesso!')
                    limparCampos()
                    props.navigation.navigate('Login')
                }
            })
        }
    }

    return(
      <SafeAreaView>
        <Text>Digite o nome de seu usuário:</Text>
        <Input 
            onChangeText={ (txt) => setUsuario(txt) }
            value={ usuario } />

        <Text>Digite seu e-mail:</Text>
        <Input 
            onChangeText={ (txt) => setEmail(txt) }
            value={ email } />

        <Text>Digite sua senha:</Text>
        <Input 
            onChangeText={ (txt) => setSenha(txt) }
            secureTextEntry
            value={ senha } />

        <Text>Confirme sua senha:</Text>
        <Input 
            onChangeText={ (txt) => setConfirmacaoSenha(txt) }
            secureTextEntry
            value={ confirmacaoSenha } />

        <Button 
            onPress={ () => salvar() }
            title='Cadastrar'/>
      </SafeAreaView>
    )
}  

export default Cadastro