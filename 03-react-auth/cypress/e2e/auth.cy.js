describe('Funcionalidad de login', () => {
  it('Mi aplicacion carga leyendo Home en /', () => {
    // AAA (ARRANGE, ACT, ASSERT)
    // 01 ARRANGE: SETUP DEL ESTADO INICIAL DE MI APLICACIÓN
    cy.visit('/')
    // 02 ACT: INTERACTUAR CON LA APLICACIÓN
    cy.get('h1').contains('Bienvenido al Home') // 03 ASSERT: ESPERO ESTE RESULTADO
  })

  it('Probar el login como CUSTOMER', () => {
    // intercepta la petición de login y la guarda en el alias login
    // intercept lo uso para saber cuando una llamada a la api es resuelta y puedo esperarla en otro momento usando
    // wait
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01. Arrange: setup del estado de mi aplicación
    cy.visit('/login')

    // 02. Act: interactuar con la aplicación
    cy.doLogin('drstrange@marvel.com', 'multiverso') // tipo admin
    cy.wait('@login') // resuelve la petición y esperamos hasta que se resuelva la petición (iniciar sesión)
    cy.get('h1').contains('Bienvenido al Home') // 03. Assert: espero un resultado
  })
  //* Cuando se que mi test es asincrono, hay que usar wait('@login')
  //* Intercerptors: para tiempos de espera mayor a los 4000 milisegundos

  it('Cuando haga logout como ADMIN me lleve a la página de Home', () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01. Arrange: setup del estado de mi aplicación
    cy.visit('/login')

    // 02. Act: interactuar con la aplicación
    cy.doLogin('superman@dc.com', 'superman') // tipo admin
    cy.wait('@login') // resuelve la petición y esperamos hasta que se resuelva la petición (iniciar sesión)
    cy.get('h1').contains('Please sing in') // 03. Assert: espero un resultado
  })
})
