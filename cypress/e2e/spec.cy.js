describe('Fluxos principais do Kanban', () => {

  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app');
  });

  it('Adicionar um novo card', () => {
    cy.get('.sc-jqUVSM').first().click();
    cy.get('.sc-gsnTZi').type("Nova tarefa teste");
    cy.get('.btn').click();
    cy.get('.drop-list > :nth-child(4)').should('exist');
  });

  it('Mover card entre colunas', () => {
    cy.get(':nth-child(1) > .board-cards > :nth-child(1) > .content').first().trigger('dragstart');
    cy.get('.drop-list > :nth-child(2)').trigger('drop');
    cy.get('.drop-list') .find('.card').should('contain.text', "Nova tarefa teste");
  });

  it('Adicionar tag a um card', () => {
    cy.get(':nth-child(1) > .board-cards > :nth-child(1) > .content').click();
    cy.get('section > .custom-input > p').type("Urgente{enter}");
    cy.get('.btn').should('exist');
  });

});