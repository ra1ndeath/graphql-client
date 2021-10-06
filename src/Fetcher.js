import fetch from 'node-fetch';
export const fetchOptions = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' }
}

export default function graphQLFetch (url, query, variables = {}, operationName = null, init = fetchOptions) {
  return fetch(
    url,
    {
      ...init,
      body: JSON.stringify({
        query,
        variables,
        operationName
      })
    }
  )
}

// module.exports = { graphQLFetch: (url, query, operationName = null, init = fetchOptions) => graphQLFetch(url, query, operationName, init) };