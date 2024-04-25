// Controllers
import { summarizeController } from '@/controllers/summarize'

// Utils
import { $ } from '@/utils/dom'

// React
import type { MouseEvent } from 'react'

interface Props {
  toggleThereIsSummary: () => void
}

export default function SummarizeButton(props: Props) {
  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const inputTopic = $('#summarize') as HTMLInputElement

    props.toggleThereIsSummary()

    await summarizeController(inputTopic.value)

    props.toggleThereIsSummary()
  }

  return (
    <button
      type="submit"
      className={`
        mt-4 bg-blue-500 hover:bg-blue-700 
        lg:hover:scale-110 lg:active:scale-90 
        text-white font-bold py-2 px-4 rounded
      `}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleClick}
    >
      Summarize
    </button>
  )
}
