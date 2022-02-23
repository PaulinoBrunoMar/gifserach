import styled from "styled-components";

export const BodyDiv = styled.div`
  position: absolute;
  padding-top: 23vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2dd6e;
  @media (max-width: 1200px) {
    padding-top: 260px;
  }
  @media (max-width: 600px) {
    padding-top: 200px;
  }
`;

export const GifDiv = styled.div`
  margin: auto auto 10px;
  border: 3px solid #b87d4b;
  border-radius: 3px;
  width: 320px;
  height: 200px;
  background-image: url(${(props) => props.src});
`;

export const Button = styled.button`
  padding: 5px;
  border: 3px solid #b87d4b;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.7;
  @media (max-width: 800px) {
    padding: 10px;
    margin-top: 10px;
  }
  &:hover {
    background-color: #b87d4b;
    border: 3px solid #f2dd6e;
    color: #f2dd6e;
    box-shadow: 5px 5px 15px #b87d4b;
    opacity: initial;
  }
`;
