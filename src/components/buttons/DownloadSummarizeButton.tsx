// Controllers
import { downloadSummaryController } from '@/controllers/download-summary'

interface Props {
  getThereIsSummary: boolean
}

export default function DownloadSummarizeButton({ getThereIsSummary }: Props) {
  return (
    <button
      className={`
        mt-4 bg-green-500 hover:bg-green-700 
        lg:hover:scale-110 lg:active:scale-90 
        text-white font-bold py-2 px-4 rounded
        disabled:bg-slate-800 disabled:cursor-not-allowed
      `}
      onClick={() => {
        downloadSummaryController()
      }}
      disabled={!getThereIsSummary}
    >
      Download summary
    </button>
  )
}
