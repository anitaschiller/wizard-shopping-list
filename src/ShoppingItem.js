import styled from "styled-components";

export default function ShoppingItem({
  title,
  isDone,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <Wrapper>
      <label>
        <MainInput
          type="checkbox"
          checked={isDone}
          class="input"
          onChange={onToggleItem}
        />
        {title}
        <DeleteIcon onClick={onDeleteItem}>&times;</DeleteIcon>
      </label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 0.4rem;
`;

const MainInput = styled.input`
  color: purple;
`;

const DeleteIcon = styled.span`
  color: red;
  padding-left: 10px;
`;
