import { useState, useEffect } from 'react'

import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Get la cita de la página
  useEffect(() => {
    (async () => {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const data = await res.json()
      setFact(data.fact)
    })()
  }, [])

  // Get imagen cada vez que cambia la cita
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`).then(res => res.json()).then(data => setImageUrl(data.url))
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word of the ${fact}`} />}
      {}
    </main>
  )
}
