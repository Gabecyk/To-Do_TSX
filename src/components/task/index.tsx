import { Div, Del } from "./style";
import { MdDelete } from "react-icons/md";

type Item = {
  id: string;
  text: string;
};

type TaskProps = {
  handleDelete: (item: Item) => void;
  list: Item[];
};

function Task({ handleDelete, list }: TaskProps) {
  return (
    <div>
        {list.map((task) => (
            <Div key={task.id}>
                <h2>{task.text}</h2>
                <Del><MdDelete className='btn' onClick={() => handleDelete(task)}/></Del>
            </Div>
        ))}
    </div>
  );
}

export default Task;
