import "./Form.css";

export default function Form({ onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.title;
    onCreateShoppingItem(input.value);
    form.reset();
    input.focus();
  }

  return (
    <form onSubmit={handleSubmit} class="form">
      <input type="text" name="title" placeholder="What else to buy" />
      <br />
      <button class="btn">Add to list</button>
    </form>
  );
}
