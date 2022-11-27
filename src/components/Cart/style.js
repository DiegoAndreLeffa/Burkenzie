import styled from "styled-components";

export const StyledCart = styled.div`
  width: 365px;
  height: 223px;

  .title {
    width: 365px;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    padding: 20px;
    color: white;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #ffffff;
  }
  ul {
    padding: 25px 10px 20px 10px;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;

    display: flex;
    flex-direction: column;
    gap: 21px;
  }

  @media (max-width: 1210px) {
    width: 100%;

    .title {
      width: 100%;
    }
  }
`;
