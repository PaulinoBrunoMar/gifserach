import styled from "styled-components";

export const DivHead = styled.div`
  width: 100%;
  min-height: 20%;
  text-align: center;
  padding: 20px;
  background-color: #e5b25d;
  box-shadow: 0px 5px 5px #b87d4b;
  position: fixed;
  z-index: 2;
  @media (max-width: 1200px) {
    padding: 50px;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  border: 3px solid #b87d4b;
  border-radius: 5px;
  margin-top: 5px;
  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  padding: 5px;
  border: 3px solid #b87d4b;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  @media (max-width: 800px) {
    padding: 10px;
    margin-top: 10px;
  }
`;

export const Tittle = styled.div`
  display: inline-block;
  font-size: 30px;
`;

export const Logo = styled.div`
  margin-left: 40px;
  font-size: 30px;
  font-weight: bold;
  color: #b87d4b;
  display: inline-block;
`;

export const Subtittle = styled.p`
  padding: 3px;
  color: #383737;
`;