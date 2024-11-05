'use client';
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  margin-block: 20px;
  margin-inline: 3rem;
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;
`;

function MainHeader() {
  return (
    <StyledHeader>
      <nav>
        <StyledNav>
          <li>
            <a href="/">Home</a>
          </li>
          <StyledDiv>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </StyledDiv>
        </StyledNav>
      </nav>
    </StyledHeader>
  );
}

export default MainHeader;
