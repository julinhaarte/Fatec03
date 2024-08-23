
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import exercicio.controller.controller;
import static org.junit.jupiter.api.Assertions.assertTrue;


public class Teste1 {
     @Test
    public void TestaRegistro(){
        controller controle = new controller();
        controle.cadastrar("user", "senha123");
        
        assertTrue(controle.login("user", "senha123"));
    }
    
    @Test
    public void TestLoginInvalido(){
        controller controle = new controller();
        controle.cadastrar("user", "senha123");
        
        assertFalse(controle.login("user", "senha124")); 
    }
}
