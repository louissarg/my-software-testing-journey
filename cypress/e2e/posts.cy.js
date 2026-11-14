describe('Posts Fetch Test', () => {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';

  it('Should load the first five posts', () => {
    cy.request(endpoint).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.slice(0, 5)).to.have.length(5);
    });
  });

  it('Should have the correct first post title', () => {
    cy.request(endpoint).then((response) => {
      expect(response.body[0].title).to.eq(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      );
    });
  });
});


