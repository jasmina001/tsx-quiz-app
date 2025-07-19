import { useState } from 'react'

export default function AddQuestion({ onAdd }: { onAdd: (q: string) => void }) {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input)
      setInput('')
    }
  }

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Yangi savol yozing"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  )
}
