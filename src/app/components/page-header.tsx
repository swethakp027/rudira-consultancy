"use client"
import styled from "styled-components";

interface BoxProps {
  bg?: string;
}

const PageHeader = styled.div<BoxProps>`
  background-color: ${(props:any) => (props.bg || "#d7f0fd")};
  height:250px;
  position:relative;
  padding:0 120px;
`;

export default PageHeader;
