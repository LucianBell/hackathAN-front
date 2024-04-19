'use client'
import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const handleLogin = (e) => {
        e.preventDefault();
        const options = {headers: {'Content-Type': 'application/json'}};
        const user = {
            email: e.target[0].value,
            senha: e.target[1].value
        }
        axios.post('http://localhost:8080/auth/login', user, options).then((res) => {
            console.log(res.data);
            localStorage.setItem('token', res.data);
            router.push('/contribuicao');
        }).catch((err) => {
            console.log(err);
            alert('Erro ao logar usuário');
        });
    };

    return (
        <main className=' w-full bg-white pt-20 pb-[140px]' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
            <h1 className=' text-3xl font-bold'>Entre com sua conta</h1>

            <form style={{display: "flex",flexDirection: 'column', width: '40%'}} onSubmit={handleLogin}>
                <label htmlFor="email">E-mail</label>
                <input className=' border-2 border-color-blue rounded' type="text" id="email" name="email" required />

                <label className=' mt-5' htmlFor="password">Senha</label>
                <input className=' border-2 border-color-blue rounded' type="password" id="password" name="password" required />

                <a href="" className=' mb-5 text-red-500'>Esqueci minha senha</a>

                <button className=" p-3 text-2xl text-white bg-color-blue rounded-lg transition-all ease-in-out duration-100 hover:bg-color-orange" type="submit">Entrar</button>
            </form>
            <p>Não tem uma conta?</p>
            <div className=' items-center align-middle'>
                <a className=' text-color-blue hover:text-color-orange' href="/criaConta">Crie uma conta</a>
            </div>
        </main>
    );
}