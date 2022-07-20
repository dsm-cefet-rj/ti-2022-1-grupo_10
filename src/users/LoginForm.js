import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {loginServer} from './LoginSlice';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { TextInput, Button, Group, Box, Text, Title } from '@mantine/core';


/**
*@module users/LoginForm
*/

/**
 * neste componente é feito o formulário de login do site, contendo validação através de token jwt e caso um não exista usuário ou conexão com o banco de dados será feito uma notificação de erro
 * @param {Login} login - informação de usuário e senha a ser passado para validação de conexão ao site
 */

export default function LoginForm(props){

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const status = useSelector(state => state.logins.status);

    const { register, formState: { errors }, handleSubmit } = useForm(/*{
            resolver: yupResolver(projetoSchema)
        }*/);

    function onSubmit(login){
        console.log(login);
        dispatch(loginServer(login));
    }


    useEffect(() => {
        if (status === 'logged_in' ) {
            navigate('/home');
        }
        else if (status === 'failed'){
            toast.error('Algo deu errado!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }, [status])




    return(
    <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Title order={1} style={{ marginTop: 20, fontWeight: 500 }}>Login</Title>

                <Text align="left" mt={'md'}>Nome</Text>
                <TextInput
                    required
                    sx={{marginTop:5}}
                    class="form-control-material" 
                    type="text" name="username"
                    id="username" {...register('username')}
                />
                    &nbsp;<span id="username_err_msg">{errors.login?.message}</span>
                
                <Text align="left">Senha</Text>
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
                        Login
                    </Button>
                    <Button
                        class="btn_4 btn-primary btn-ghost"
                        variant="contained"
                        color="primary"
                    >
                        <Text 
                            size="xs"
                            variant="link"
                            component="a"
                            href="/signup"
                            align="left"
                            >
                            Criar conta
                        </Text>
                    </Button>
                </Group>
            </form>
        </Box>
    </>
);
}