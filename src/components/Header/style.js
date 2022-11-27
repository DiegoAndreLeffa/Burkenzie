import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #f5f5f5;

  margin-bottom: 35px;
  padding: 0 150px 0 150px;

  img {
    width: 158.94px;
    height: 36.83px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;
    gap: 115px;

    width: 365px;
    height: 60px;

    background: #ffffff;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    padding: 10px;
  }

  input {
    border: none;
    width: 123px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #e0e0e0;
  }
  input:focus {
    outline: none;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 107px;
    height: 40px;

    background: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;

    cursor: pointer;
  }

  @media (max-width: 1210px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px 10% 10px 10%;

    div {
      width: 100%;
      gap: 10%;
    }
  }
`;
