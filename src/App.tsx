import { useState, useEffect } from 'react'
import Input from './components/input'
import Task from './components/task'

type Item = {
  id: string;
  text: string;
}

function App() {
  const stored = JSON.parse(localStorage.getItem("list") || "[]")

  const [list, setList] = useState<Item[]>(stored)

  const handleSet = (value: string) => {
    const newItem = {
      id: crypto.randomUUID(),
      text: value
    }
    setList((prev) => [...prev, newItem])
  }

  const handleDelete = (task: Item) => {
    setList((prev) => prev.filter((item) => item.id !== task.id))
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  return (
    <>
      <Input handleSet={handleSet}/>
      <Task handleDelete={handleDelete} list={list}/>
    </>
  )
}

export default App
