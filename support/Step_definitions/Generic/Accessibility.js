When('I check for AA 2.1 compliance', () => {
    cy.configureAxe({
            // How to configure this: https://www.deque.com/axe/core-documentation/api-documentation/#api-name-axeconfigure
            reporter: 'v2',
            runOnly: {
              type: 'tag',
              values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa','wcag21aaa'],
            },
          })
});

Then('I should see not see compliance errors', () => {
    cy.checkA11y()
});