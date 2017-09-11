Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  console.log('Overwrite of "visit" called with url', url)

  return originalFn(url, {
    // The bug: This hook is never getting called!
    onBeforeLoad (win) {
      // Just to make sure it's really evident this isn't getting called... call alert()!
      alert('This alert does not happen - it should, though')

      // Since onBeforeLoad isn't getting called, we can't erase win.fetch to trigger the actual
      // app code to use XMLHttpRequest (which Cypress knows how to mock).
      win.fetch = null
    }
  })
})
