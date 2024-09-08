import React from 'react'
import Button from '../button/Button'

export default function Header() {
  return (
    <header >
        <div className="flex justify-between items-center m-4 bg-blue-200 p-6">
        <h1 className='font-sans font-bold text-5xl'>Student CRUD App</h1>
        <Button />
        </div>
      </header>
  )
}
