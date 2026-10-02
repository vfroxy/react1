function TodoItem({ text }) {
return (
<div>
<input type="checkbox" />
<span>{text}</span>
</div>
);
}

export default TodoItem;