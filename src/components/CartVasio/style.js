import styled from "styled-components";

export const StyledCartVazio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;

  width: 100%;
  height: 158px;

  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    margin-bottom: 10px;

    text-align: center;

    color: #333333;
  }

  small {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-align: center;

    color: #828282;
  }
`;
