import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {signupServer} from './SignupSlice';
import { TextInput, Button, Group, Box, Text, Title } from '@mantine/core';

/**
*@module users/SignupForm
 */

/**
 * neste componente é feito o formulário de registro do site, portanto, onde será criado a conta do usuário
 * @param {Login} login - entidade a ser utilizada
 * @param {string} Usuário - nome do Usuário a ser cadastrado
 * @param {string} Senha - senha do usuário que será encriptada no banco de dados
 */

export default function SignupForm(props){

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const status = useSelector(state => state.signups.status);

    const { register, formState: { errors }, handleSubmit } = useForm(/*{
            resolver: yupResolver(projetoSchema)
        }*/);

    function onSubmit(signup){
        console.log(signup);
        dispatch(signupServer(signup));
    }


    useEffect(() => {
        if (status === 'signup_sucessful' ) {
            navigate('/');
        }
    }, [status])

    return(
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Title order={1} style={{ marginTop: 20, fontWeight: 500 }}>Signup</Title>

                <Text align="left" mt={'md'}>Usuário:</Text>
                <TextInput
                    required
                    sx={{marginTop:5}}
                    class="form-control-material" 
                    type="text"
                    name="username"
                    id="username" {...register('username')}
                    />
                    &nbsp;<span id="username_err_msg">{errors.signup?.message}</span>
                
                <Text align="left">Senha:</Text>
                <TextInput
                    required
                    sx={{marginTop:5}}
                    class="form-control-material"
                    type="password"
                    name="password"
                    id="password" {...register('password')}
                    />
                    &nbsp;<span id="password_err_msg">{errors.password?.message}</span>

                <Group position="center">
                    <Button
                        class="btn_4 btn-primary btn-ghost"
                        type="submit" 
                        id="Login"
                        name="btn_login"
                        variant="contained"
                        color="primary"
                    >
                        Criar Conta
                    </Button>
                </Group>
            </form>
        </Box>
    );
}