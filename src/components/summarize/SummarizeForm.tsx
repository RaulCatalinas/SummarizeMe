import SummarizeButton from '../buttons/SummarizeButton'

interface Props {
  toggleThereIsSummary: () => void
}

export default function SummarizeForm(props: Props) {
  return (
    <form
      className={`
        flex flex-col w-full max-w-sm mx-auto 
        mt-16 border-dashed border-white border-2 
        m-4 p-4 items-center justify-center
      `}
    >
      <label htmlFor="summarize" className="font-medium mb-2">
        Summarize <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="summarize"
        className={`
          w-full p-2 border border-gray-300 rounded-md 
          focus:outline-none focus:ring focus:ring-blue-500 
          text-black text-center
        `}
        placeholder="Topic"
        required
        autoFocus
      />
      <SummarizeButton toggleThereIsSummary={props.toggleThereIsSummary} />
    </form>
  )
}
