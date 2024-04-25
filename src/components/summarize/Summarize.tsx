// Components
import SummarizeForm from './SummarizeForm'
import SummarizeResult from './SummarizeResult'

// Hooks
import { useThereIsSummary } from '@/hooks/useThereIsSummary'

export default function Summarize() {
  const { getThereIsSummary, toggleThereIsSummary } = useThereIsSummary()

  return (
    <>
      <SummarizeForm toggleThereIsSummary={toggleThereIsSummary} />
      <SummarizeResult getThereIsSummary={getThereIsSummary} />
    </>
  )
}
