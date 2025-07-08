import {useState} from 'react'
import { InputStyle, Btn } from './style';


type InputProps = {
    handleSet: (value: string) => void;
};

function Input({ handleSet }: InputProps) {

    const [task, setTask] = useState<string>("");
    
  return (
    <div>
        <InputStyle type="text" placeholder='Digite uma tarefa...' value={task} onChange={(e) => setTask(e.target.value)}/>
        <Btn onClick={() => {
            handleSet(task)
            setTask("")
        }}
        >Enviar</Btn>
    </div>
  )
}

export default Input