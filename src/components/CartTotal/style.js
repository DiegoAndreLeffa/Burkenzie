import styled from "styled-components";

export const StyledCartTotal = styled.div`
  border-top: 2px solid #e0e0e0;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    margin-top: 14px;
    margin-bottom: 16px;
  }
  div h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }
  div p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 343px;
    height: 60px;

    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #828282;
  }

  @media (max-width: 1210px) {
    button {
      width: 100%;
    }
  }
`;
