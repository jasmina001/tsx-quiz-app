export default function AnswerInput({
    value,
    onChange,
    onSubmit
  }: {
    value: string
    onChange: (v: string) => void
    onSubmit: () => void
  }) {
    return (
      <div className="mt-6">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Javob yozing..."
          className="w-full border p-2 rounded"
        />
        {value.trim() && (
          <button
            onClick={onSubmit}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Yuborish
          </button>
        )}
      </div>
    )
  }
  