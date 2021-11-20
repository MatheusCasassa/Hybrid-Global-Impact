import React, {
    useState
} from 'react'

import {
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    Button,
    Input
} from 'react-native-elements'

import { read } from '../../DB'

const Login = (props) => {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const validar = () => {
        if (usuario.trim().length === 0) {
            alert('informe seu Usuário!')
            return false
        }

        if (senha.length === 0) {
            alert('Informe a Senha!')
            return false
        }

        return true
    }

    const entrar = () => {
        if (validar()) {
            read(usuario, (error, sucess) => {
                if (error || !sucess) {
                    alert('Usuário ou Senha Inválidos!')
                    return
                }

                let obj = JSON.parse(sucess)
                if (senha === obj.senha) {

                    let email = obj.email

                    props.navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'Home',
                            params: { usuario, email }
                        }]
                    })
                } else {
                    alert('Usuário ou Senha Inválidos!')
                }
            })
        }
    }

    return (
        <SafeAreaView>
            <Text>Digite seu usuário:</Text>
            <Input
                onChangeText={(txt) => setUsuario(txt)}
                value={usuario} />

            <Text>Digite sua senha:</Text>
            <Input
                onChangeText={(txt) => setSenha(txt)}
                secureTextEntry
                value={senha} />

            <Button
                onPress={() => entrar()}
                title='Entrar' />

            <TouchableOpacity
                onPress={() => props.navigation.navigate('Cadastro')}>
                <Text>Cadastre-se</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Login