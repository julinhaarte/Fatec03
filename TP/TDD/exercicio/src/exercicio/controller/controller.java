package exercicio.controller;

import exercicio.model.Usuario;

public class controller {

    Usuario user1;

    public void cadastrar(String login, String senha) {
        user1 = new Usuario(login, senha);
    }

    public boolean login(String login, String senha) {
        if (login == user1.getLogin() && senha == user1.getSenha()) {
            return true;
        } else {
            return false;
        }
    }
}
