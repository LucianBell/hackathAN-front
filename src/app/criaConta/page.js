"use client";
import axios from "axios";
import React from "react";

export default function CriarConta() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[3].value != e.target[4].value) {
      alert("As senhas não coincidem");
      return;
    }
    const options = { headers: { "Content-Type": "application/json" } };
    const user = {
      nome: e.target[0].value,
      apelido: e.target[1].value,
      email: e.target[2].value,
      senha: e.target[3].value,
      dataNascimento: e.target[5].value,
      estado: e.target[6].value,
      cidade: e.target[7].value,
      genero: e.target[8].value,
    };
    console.log(user);
    axios
      .post("http://localhost:8080/auth/create", user, options)
      .then((res) => {
        console.log(res);
        alert("Usuário criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao criar usuário");
      });
  };

  return (
    <main
      className=" bg-white"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className=' text-3xl font-bold mt-5'>Crie sua conta</h1>

      <form
        style={{ display: "flex", flexDirection: "column", width: "40%" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nome completo</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="nickname">Apelido</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="text"
          id="nickname"
          name="nickname"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="password"
          id="password"
          name="password"
          required
        />

        <label htmlFor="confirmPassword">Confirme sua senha</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <label htmlFor="birthDate">Data de nascimento</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="date"
          id="birthDate"
          name="birthDate"
          required
        />

        <label htmlFor="state">Estado</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="text"
          id="state"
          name="state"
          required
        />

        <label htmlFor="city">Cidade</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="text"
          id="city"
          name="city"
          required
        />

        <label htmlFor="genre">Genero</label>
        <input
          className=" border-2 border-color-blue rounded"
          type="text"
          id="genre"
          name="genre"
          required
        />

        <button
          className=" mt-4 p-3 text-2xl text-white bg-color-blue rounded-lg transition-all ease-in-out duration-100 hover:bg-color-orange"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
      <p>Já tem uma conta?</p>
      <div>
        <a className=' text-color-blue hover:text-color-orange' href="/login">Entre com sua conta</a>
      </div>
    </main>
  );
}
