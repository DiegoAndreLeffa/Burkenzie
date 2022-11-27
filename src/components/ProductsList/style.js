import styled from "styled-components";

export const StyledProductList = styled.div`
  width: 100%;
  height: auto;

  ul {
    gap: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 245px;
    height: 346px;

    background: #ffffff;

    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }

  li div:nth-child(1) {
    background: #f5f5f5;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 240px;
    height: 150px;
  }
  img {
    width: 60%;
  }

  li div:nth-child(2) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 240px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }
  small {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #828282;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #27ae60;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 106px;
    height: 40px;

    background: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
  }

  @media (max-width: 1210px) {
    overflow: hidden;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;
