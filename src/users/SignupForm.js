import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {signupServer} from './SignupSlice';

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




    return(<>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Usuário:
                <input type="text" name="username" id="username" {...register('username')} />
                &nbsp;<span id="username_err_msg">{errors.signup?.message}</span>
            </label>
            <br/>
            <label>
                Senha:
                <input type="password" name="password" id="password" {...register('password')} />
                &nbsp;<span id="password_err_msg">{errors.password?.message}</span>
            </label>
            <br/>
            <br/>   
            <button type="submit" id="Signup" name="btn_signup" variant="contained" color="primary">Criar Conta</button>
            </form>
          </>
    );
}