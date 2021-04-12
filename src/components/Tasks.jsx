import {Task} from './Task'

export const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <>
            {tasks.map((el, index) => 
                <Task 
                    key={index}
                    task={el}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            )}
        </>
    )
}
