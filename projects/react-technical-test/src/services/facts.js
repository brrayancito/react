import { CAT_ENDPOINT_RANDOM_FACT } from '../constants.js'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  return data.fact
}
