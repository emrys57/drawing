import styled from "styled-components";

const Circle = styled.div.attrs(({ x, y, radius }) => ({
  style: {
    transform: `translate(${x - radius}px, ${y - radius}px)`,
  }
}))`
  cursor: grab;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;

  ${({ isDragging }) =>
    isDragging &&
    `
    opacity: 0.8;
    background-color: green;
    border: 5px solid whitesmoke;
    cursor: grabbing;
  `}  
`;

export default Circle;
