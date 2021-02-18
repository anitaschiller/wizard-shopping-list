import PropTypes from "prop-types";

import styled from "styled-components";

export default function Form({ onCreateShoppingItem, onDeleteList }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.title;
    if (input.value) onCreateShoppingItem(input.value);
    form.reset();
    input.focus();
  }

  return (
    <MainForm onSubmit={handleSubmit} class="form">
      <input type="text" name="title" placeholder="What else to buy" />
      <br />
      <Button>Add to list</Button>
      <Button onClick={onDeleteList}>Delete list</Button>
    </MainForm>
  );
}

Form.propTypes = {
  onCreateShoppingItem: PropTypes.func,
};

const MainForm = styled.form`
  margin: 4rem, 0;
`;

const Button = styled.button`
  padding: 0.3rem;
  background-color: #ffbe0b;
  color: black;
  margin: 0.5rem 0;
  font-size: 0.8rem;
`;
