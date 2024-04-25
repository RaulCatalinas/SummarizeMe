import { $ } from '@/utils/dom'

export function downloadSummaryController() {
  const summaryPElement = $('#summarize-result') as HTMLParagraphElement

  const summaryBlob = new Blob([summaryPElement.innerText])

  const link = document.createElement('a')
  link.href = URL.createObjectURL(summaryBlob)
  link.download = 'summary.txt'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
