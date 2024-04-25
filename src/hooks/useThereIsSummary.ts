import { useState } from 'react'

export function useThereIsSummary() {
  const [getThereIsSummary, setThereIsSummary] = useState(false)

  const toggleThereIsSummary = () => {
    setThereIsSummary(!getThereIsSummary)
  }

  return { toggleThereIsSummary, getThereIsSummary }
}
