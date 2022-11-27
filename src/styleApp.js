import styled from "styled-components";

export const StayledApp = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 150px 0 150px;
    gap: 20px;
  }

  @media (max-width: 1210px) {
    .main {
      display: flex;
      flex-direction: column;
      padding: 0 10% 0 10%;
    }
  }
`;
