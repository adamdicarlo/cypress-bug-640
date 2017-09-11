describe('onBeforeLoad', function(){

  beforeEach(() => {
    cy.server()
    cy.route('/static/some-data.json', 'fixture:some-data')
  })

  it('is called, and so we see the MOCKED response', function(){
    cy.visit('/index.html')
    cy.get('body')
      .should('contain', 'orange (mocked data)')
      .should('not.contain', 'blue (actual data)')
  })
})
