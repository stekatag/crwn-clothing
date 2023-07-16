import styled from "styled-components";
import { respond } from "../../utils/responsive/responsive.utils";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and ${respond.phone} {
    flex-direction: column;
  }
`;
