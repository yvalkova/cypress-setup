declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Command to login to the application.
       */
      login(username: string, password: string): Chainable<Subject>;
    }
  }
}

export {};
