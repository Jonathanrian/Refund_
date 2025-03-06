import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { useState } from "react";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, email, password, confirmPassword);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="seu nome..."
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="12345"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="confirmar senha"
        type="password"
        placeholder="12345"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit">Criar conta</Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
