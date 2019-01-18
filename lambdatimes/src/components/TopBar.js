import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const LeftContainerSpans = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const CenterContainerSpans = styled.div`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`
const LastCenterSpan = styled(CenterContainerSpans)`
  margin-right: 0;
`

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <LeftContainer>
          <LeftContainerSpans>TOPICS</LeftContainerSpans><LeftContainerSpans>SEARCH</LeftContainerSpans>
        </LeftContainer>
        <CenterContainer>
          <CenterContainerSpans>GENERAL</CenterContainerSpans><CenterContainerSpans>BROWNBAG</CenterContainerSpans><CenterContainerSpans>RANDOM</CenterContainerSpans><CenterContainerSpans>MUSIC</CenterContainerSpans><LastCenterSpan>ANNOUNCEMENTS</LastCenterSpan>
        </CenterContainer>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;