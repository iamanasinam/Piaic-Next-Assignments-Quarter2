"use client"
import {useState} from 'react'

// enter 50 muslim student names in the array 

const muslimStudentNames = ['Abdul-Aziz', 'Ahmad', 'Aisha', 'Amar', 'Ammar', 'Anas', 'Anwar', 'Arafat', 'Arman', 'Asif', 'Ashfaq', 'Ashraf', 'Atif', 'Awais', 'Aziz', 'Badr', 'Bashir', 'Bilal', 'Bilal', 'Bilal']


const StatesConcept= () => {
    const [index, setIndex] = useState(0)
    const handleNextStudentName = () => {
        setIndex(index+1)
    }
    const handlePreviousStudentName = () => {
        setIndex(index-1)
    }

  return (
    <div className='text-center mt-6'>
      <h1>Student Name</h1>
      {index >= 0 && index<muslimStudentNames.length ? <p>{index+1} - {muslimStudentNames[index]}</p> : <p>No student at {index}</p>}
      <hr />
      <div>
      <button onClick={handleNextStudentName} className='bg-blue-700 text-white p-4 mr-6'>Next Student Name</button>
      <button onClick={handlePreviousStudentName} className='bg-red-700 text-white p-4 mt-6'>Previous Student Name</button>
      </div>
    </div>
  )
}

export default StatesConcept