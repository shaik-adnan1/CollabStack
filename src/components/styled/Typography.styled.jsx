import styled from "styled-components";

const textAlign = ({ left, right }) =>
  left ? "left" : right ? "right" : "center";

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: ${textAlign};
`;
