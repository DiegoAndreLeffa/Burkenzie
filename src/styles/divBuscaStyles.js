import styled from "styled-components";

export const StyledDivBusca = styled.div`
  display: flex;
  flex-direction: column;

  .divBusca {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .divBusca h2 {
    display: flex;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;

    color: #333333;
  }
  .divBusca h2 p {
    margin-left: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;

    color: #828282;
  }

  .divBusca Button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 137px;
    height: 40px;

    background: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: #ffffff;
  }
`;
