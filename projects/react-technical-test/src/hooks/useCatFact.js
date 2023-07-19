import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    const newfact = await getRandomFact()
    setFact(newfact)
  }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
