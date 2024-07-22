/// <reference types="cypress" />

describe('Technical Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/todo')
  })

  // Première tâche :
  it('Create a task', () => {
    cy.get('input.new-todo').type('Cook a cake{enter}');

    // Vérifier que la nouvelle tâche apparaît dans la liste des tâches
    cy.get('ul.todo-list').should('contain', 'Cook a cake');
  })

  // Deuxième tâche
  it('Update a task', () => {
    cy.contains('Pay electric bill').dblclick()

    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('li.editing .edit').clear().type('Cook a pie{enter}')

    cy.get('ul.todo-list').should('contain', 'Cook a pie')
  })

  // Troisième tâche
  it('Mark as done a task', () => {
    cy.get('.view').first().within(() => {
      cy.get('.toggle').check();
    });
      
    cy.get('.todo-count strong').should('contain', '1')
  })
})