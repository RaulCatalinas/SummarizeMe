// Components
import DownloadSummarizeButton from '../buttons/DownloadSummarizeButton'

interface Props {
  getThereIsSummary: boolean
}

export default function SummarizeResult({ getThereIsSummary }: Props) {
  return (
    <output>
      <p id="summarize-result" className="w-full mt-4 text-pretty"></p>
      <div className="flex items-center justify-center mt-1">
        <DownloadSummarizeButton getThereIsSummary={getThereIsSummary} />
      </div>
    </output>
  )
}
