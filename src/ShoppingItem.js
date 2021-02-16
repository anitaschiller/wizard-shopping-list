import "./ShoppingItem.css";

export default function ShoppingItem({ title, isDone, onToggleItem }) {
  return (
    <div class="shopping--item">
      <label>
        <input
          type="checkbox"
          checked={isDone}
          class="input"
          onChange={onToggleItem}
        />
        {title}
      </label>
    </div>
  );
}
