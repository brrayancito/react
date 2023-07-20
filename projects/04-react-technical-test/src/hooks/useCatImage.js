import { useState, useEffect } from 'react'

// Custom hook
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Recupera la imagen cada vez que tengamos una cita nueva
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`).then(res => res.json()).then(data => setImageUrl(data.url))
  }, [fact])

  return { imageUrl }
} // { imageUrl: 'hppts://...' }
