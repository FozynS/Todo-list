import styled from "styled-components";

const PopoverDiv = styled.div`
  position: absolute;
  top: 60px;
  left: 360px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 40%;
`;
const BtnEdit = styled.button`
  cursor: pointer;
  display: flex;
  padding: 1em;
  width: 100%;
  height: 50%;
  font-size: 15px;
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  color: #cac8bd;
`;
const Line = styled.hr`
  margin: 0;
  border: none;
  background-color: #ccc;
  height: 1px;
`;
const BtnDelete = styled.button`
  cursor: pointer;
  display: flex;
  padding: 1em;
  font-size: 15px;
  width: 100%;
  height: 50%;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  color: #cac8bd;

  &:active {
    transform: scale(0.95);
  }
`;

function Popover({ handleDeleteTodo }) {
  return (
    <PopoverDiv>
      {/* <BtnEdit>Edit...</BtnEdit> */}
      <Line />
      <BtnDelete onClick={handleDeleteTodo}>Delete</BtnDelete>
    </PopoverDiv>
  );
}

export default Popover;