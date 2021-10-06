const {graphQLFetch} = require('../src/index.js')
// const fetcher = new RetryFetcher('http://localhost:8081/v1/graphql')

// An example mutation.
graphQLFetch( 'http://localhost:8081/v1/graphql',
  `
mutation MyMutation {
    insert_message_one(object: {author: "author", chat_room_id: "03f0b258-a274-4934-ac44-cfdabe797bcd", text: "texts2ss"}) {
      author
      chat_room_id
      created_at
      id
      text
      updated_at
    }
  }`,
)
  .then(response => response.json())
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.error(error)
  })