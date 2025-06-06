Feature: Perfil

  Scenario: Login exitoso de un usuario registrado
    Given el usuario navega a la página de login
    When completa el formulario de login con credenciales válidas
    And envía el formulario de login
    Then ve un mensaje de bienvenida
    Then el usuario navega a la página de perfil
    Then Contiene su nombre de usuario y una hora