import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firsWord}?size=50&color=red?json=true'

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    // fetch(CAT_ENDPOINT_RANDOM_FACT)
    //   .then(response => response.json())
    //   .then(data => setFact(data.fact))
    (async () => {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const data = await res.json()
      setFact(data.fact)
    })()
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
