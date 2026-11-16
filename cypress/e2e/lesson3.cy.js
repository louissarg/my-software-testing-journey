describe('Lesson 3: ES6+ and Async', () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts'

  it('Should handle promises using .then() and arrow functions', () => {
    cy.request(endpoint).then((response) => {
      const firstPost = response.body[0]
      expect(response.status).to.eq(200)
      expect(firstPost.title).to.include('sunt aut')
    })
  })

  it('Should use forEach with arrow functions', () => {
    cy.request(endpoint).then((response) => {
      const titles = response.body.slice(0, 3)
      titles.forEach((post) => {
        expect(post).to.have.property('title')
      })
    })
  })
})
