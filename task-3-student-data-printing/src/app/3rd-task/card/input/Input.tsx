"use client"
import { useState } from 'react'
import { cardProps} from '../../type'

export default function Input(props: cardProps) {
    console.log(props.initialData)
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [students, setStudents] = useState(props.initialData)

    const namehandlechange=(event: React.ChangeEvent<HTMLInputElement>)=>{setName(event.target.value)}
    const agehandlechange=(event: React.ChangeEvent<HTMLInputElement>)=>{setAge(Number(event.target.value))}
    const formSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        const newStudent = { name, age }
        setStudents([...students, newStudent])
        setName('')
        setAge(0)

    }

  return (<>
    <div className="flex justify-center items-center">
    <div className='flex flex-col justify-center w-96 p-8  bg-slate-600 border'>
      <label className='mb-2'>Name: </label>
      <input type="text" onChange={namehandlechange} value={name} />
      <label className='my-2'>Age: </label>
      <input type="number" onChange={agehandlechange} value={age} />
      <button onClick={formSubmit}>Add Card</button>
    </div>
    </div>

    <h1 className='text-center text-5xl font-bold mt-6'>Student Cards</h1>
    <div className=" flex grid grid-cols-4 gap-8">
        {students.map((student, index)=>{
            return <div key={index} className=" w-48 h-full m-6 p-4 mt-6 bg-slate-400 text-white">
                        <p>Name: {student.name}</p>
                        <p>Age: {student.age}</p>
                    </div>
        })}
    </div>
  </>
  )
}
