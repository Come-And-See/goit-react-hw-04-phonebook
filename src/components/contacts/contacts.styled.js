import styled from 'styled-components';

export const DivAll = styled.div`
  background: #f0f0f0;
  width: 350px;
  border: 1px solid #000;
  border-radius: 15px;
  margin: 50px auto;
  padding: 15px;

  h1,
  h2,
  h3 {
    text-align: center;
  }
`;

export const DivContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px dashed;
  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
  }
  input {
    border: 1px solid;
    height: 30px;
    border-radius: 5px;
    margin-top: 5px;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    &:hover {
      background-color: #cbcbcb;
    }
  }
`;

export const UlContactList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 20px;
    border-bottom: 1px dashed;
    padding-bottom: 10px;
    align-items: center;
  }
  button {
    margin-left: 21px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: #cbcbcb;
    }
  }
`;

export const Input = styled.input`
  border: 1px solid;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  width: 100%;
`;
