package exercicio.view;


import exercicio.controller.controller;
import javax.swing.JOptionPane;


public class view extends javax.swing.JFrame {

controller controle;

    public view() {
        initComponents();
        controle = new controller();
    }
    

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Painel = new javax.swing.JPanel();
        txtAutenticação = new javax.swing.JLabel();
        senhaTxt = new javax.swing.JLabel();
        loginField = new javax.swing.JTextField();
        loginTxt = new javax.swing.JLabel();
        logarBtn = new javax.swing.JButton();
        senhaField = new javax.swing.JPasswordField();
        cadastrarBtn = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        Painel.setBackground(new java.awt.Color(51, 51, 51));

        txtAutenticação.setFont(new java.awt.Font("Segoe UI", 1, 24)); // NOI18N
        txtAutenticação.setForeground(new java.awt.Color(255, 255, 255));
        txtAutenticação.setText("Autenticação");

        senhaTxt.setForeground(new java.awt.Color(255, 255, 255));
        senhaTxt.setText("Senha");

        loginField.setBackground(new java.awt.Color(102, 102, 102));
        loginField.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                loginFieldActionPerformed(evt);
            }
        });

        loginTxt.setForeground(new java.awt.Color(255, 255, 255));
        loginTxt.setText("Login");

        logarBtn.setBackground(new java.awt.Color(153, 153, 153));
        logarBtn.setText("Login");
        logarBtn.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                logarBtnMouseClicked(evt);
            }
        });
        logarBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                logarBtnActionPerformed(evt);
            }
        });

        senhaField.setBackground(new java.awt.Color(102, 102, 102));
        senhaField.setText("jPasswordField1");

        cadastrarBtn.setBackground(new java.awt.Color(153, 153, 153));
        cadastrarBtn.setText("Cadastrar");
        cadastrarBtn.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                cadastrarBtnMouseClicked(evt);
            }
        });

        javax.swing.GroupLayout PainelLayout = new javax.swing.GroupLayout(Painel);
        Painel.setLayout(PainelLayout);
        PainelLayout.setHorizontalGroup(
            PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, PainelLayout.createSequentialGroup()
                .addContainerGap(60, Short.MAX_VALUE)
                .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(loginTxt)
                    .addComponent(senhaTxt))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(txtAutenticação)
                    .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                        .addGroup(PainelLayout.createSequentialGroup()
                            .addComponent(logarBtn)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(cadastrarBtn))
                        .addComponent(senhaField, javax.swing.GroupLayout.PREFERRED_SIZE, 186, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGap(75, 75, 75))
            .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, PainelLayout.createSequentialGroup()
                    .addContainerGap(103, Short.MAX_VALUE)
                    .addComponent(loginField, javax.swing.GroupLayout.PREFERRED_SIZE, 187, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(75, 75, 75)))
        );
        PainelLayout.setVerticalGroup(
            PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(PainelLayout.createSequentialGroup()
                .addGap(36, 36, 36)
                .addComponent(txtAutenticação)
                .addGap(46, 46, 46)
                .addComponent(loginTxt)
                .addGap(18, 18, 18)
                .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(senhaTxt)
                    .addComponent(senhaField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(27, 27, 27)
                .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(logarBtn)
                    .addComponent(cadastrarBtn))
                .addContainerGap(35, Short.MAX_VALUE))
            .addGroup(PainelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(PainelLayout.createSequentialGroup()
                    .addGap(113, 113, 113)
                    .addComponent(loginField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addContainerGap(117, Short.MAX_VALUE)))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(Painel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(Painel, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void loginFieldActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_loginFieldActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_loginFieldActionPerformed

    private void logarBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_logarBtnActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_logarBtnActionPerformed

    private void cadastrarBtnMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_cadastrarBtnMouseClicked
        controle.cadastrar(loginField.getText(), senhaField.getText());
        JOptionPane.showMessageDialog(null, "Cadastro Efetuado");
    }//GEN-LAST:event_cadastrarBtnMouseClicked

    private void logarBtnMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_logarBtnMouseClicked
       if(controle.login(loginField.getText(), senhaField.getText())){
           JOptionPane.showMessageDialog(null, "Login Efetuado");
       }
       else{
           JOptionPane.showMessageDialog(null, "Senha Incorreta");
       }
        
		}//GEN-LAST:event_logarBtnMouseClicked

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(view.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(view.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(view.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(view.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new view().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel Painel;
    private javax.swing.JButton cadastrarBtn;
    private javax.swing.JButton logarBtn;
    private javax.swing.JTextField loginField;
    private javax.swing.JLabel loginTxt;
    private javax.swing.JPasswordField senhaField;
    private javax.swing.JLabel senhaTxt;
    private javax.swing.JLabel txtAutenticação;
    // End of variables declaration//GEN-END:variables
}
