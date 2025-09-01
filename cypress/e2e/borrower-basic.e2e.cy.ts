describe('Borrower basics', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/borrowers/pipeline', {
      fixture: 'pipeline.json',
    }).as('getPipeline');
    cy.intercept('GET', '/api/borrowers/1', { fixture: 'borrower-1.json' }).as(
      'getBorrower'
    );

    cy.intercept('POST', '/api/borrowers/1/request-documents', {
      success: true,
      message: 'Documents requested.',
    }).as('postRequestDocs');

    cy.intercept('POST', '/api/borrowers/1/send-valuer', {
      success: true,
      message: 'Valuer notified.',
    }).as('postSendValuer');

    cy.intercept('POST', '/api/borrowers/1/approve', {
      success: true,
      message: 'Loan approved.',
    }).as('postApprove');

    cy.intercept('POST', '/api/borrowers/1/escalate', {
      success: true,
      message: 'Escalated to Credit Committee.',
    }).as('postEscalate');
  });

  it('Borrower selection updates the center pane', () => {
    cy.visit('/');
    cy.wait('@getPipeline');

    cy.get('[data-testid="borrower-item-1"]').click();
    cy.wait('@getBorrower');

    cy.get('[data-testid="center-pane"]').within(() => {
      cy.contains('Sarah Dunn').should('be.visible');
      cy.contains('sarah.dunn@example.com').should('be.visible');
      cy.contains('(355)123-4557').should('be.visible');
    });
  });

  it('Explainability section expands/collapses', () => {
    cy.visit('/');
    cy.wait('@getPipeline');
    cy.get('[data-testid="borrower-item-1"]').click();
    cy.wait('@getBorrower');

    cy.get('[data-testid="explainability-content"]').should('not.be.visible');

    cy.get('[data-testid="explainability-toggle"]').click();
    cy.get('[data-testid="explainability-content"]').should('be.visible');

    cy.get('[data-testid="explainability-toggle"]').click();
    cy.get('[data-testid="explainability-content"]').should('not.be.visible');
  });

  it('Buttons trigger actions and log to console (mocked)', () => {
    cy.visit('/');
    cy.wait('@getPipeline');
    cy.get('[data-testid="borrower-item-1"]').click();
    cy.wait('@getBorrower');

    cy.window().then(win => cy.spy(win.console, 'log').as('log'));

    cy.get('[data-testid="btn-request-docs"]').click();
    cy.wait('@postRequestDocs');
    cy.get('@log').should('have.been.calledWithMatch', /request-documents/i);

    cy.get('[data-testid="btn-send-valuer"]').click();
    cy.wait('@postSendValuer');
    cy.get('@log').should('have.been.calledWithMatch', /send-valuer/i);

    cy.get('[data-testid="btn-approve"]').click();
    cy.wait('@postApprove');
    cy.get('@log').should('have.been.calledWithMatch', /approve/i);

    cy.get('[data-testid="btn-escalate"]').click();
    cy.wait('@postEscalate');
    cy.get('@log').should('have.been.calledWithMatch', /escalate/i);
  });

  it('Buttons trigger the right network calls (no console required)', () => {
    cy.visit('/');
    cy.wait('@getPipeline');
    cy.get('[data-testid="borrower-item-1"]').click();
    cy.wait('@getBorrower');

    cy.get('[data-testid="btn-request-docs"]').click();
    cy.wait('@postRequestDocs');

    cy.get('[data-testid="btn-send-valuer"]').click();
    cy.wait('@postSendValuer');

    cy.get('[data-testid="btn-approve"]').click();
    cy.wait('@postApprove');

    cy.get('[data-testid="btn-escalate"]').click();
    cy.wait('@postEscalate');
  });
});
