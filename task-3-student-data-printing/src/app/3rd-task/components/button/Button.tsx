"use client"
export default function Button() {
  return (
    <div>
      <button className="p-4 bg-black text-white" onClick={() => alert('Add Student')}>Add Student</button>
    </div>
  )
}
