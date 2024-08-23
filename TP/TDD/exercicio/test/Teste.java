import exercicio.controller.controller;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class Teste {
    @Test 
    public void TestaRegistro(){
        controller controle = new controller();
        controle.cadastrar("user", "senha123");
        
        assertTrue(controle.login("user", "senha123"));
    }
}
