function TodoForm() {
    return (
        <div>
            <input 
                placeholder="Wpisz zadanie..." id = 'todo-input' 
                onChange = {e => (value = e.target.value)}
            />
            <button
                onClick={() => {    
                    setTodos(prevTodos => [...prevTodos, value]);
                    value = '';
                }}>
                Dodaj
            </button>
        </div>
    );
}

export default TodoForm;