import styled from "styled-components";

const ItemImage = styled.div`
  background-image: url("${(props) => props.$src}");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: none;
  
  @media (min-width: 1000px) {
    display: block;
  } 
`;

export default ItemImage;
