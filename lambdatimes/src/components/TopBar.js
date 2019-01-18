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
const LeftContainerSpans = styled.span`
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
const CenterContainerSpans = styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
`
const LastCenterSpan = styled(CenterContainerSpans)`
  margin-right: 0;
`
const RightContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const RightContainerSpans = styled.span`
  cursor: pointer;
`
const LogOut = styled.div`
  ${props => props.open ? 'display: block' : 'display: none'}
  position: absolute;
  padding: 20px;
  background: white;
  box-shadow: 0 0 5px gray;
  top: 44px;
  right: -11px;
`
const LogoutTriangle = styled.div`
  position: absolute;
  top: -8px;
  right: 35px;
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
`
const LogOutButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #304FFE;
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  border-radius: 4px;
  cursor: pointer;
`

const TopBar = props => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <LeftContainer>
          <LeftContainerSpans>TOPICS</LeftContainerSpans><LeftContainerSpans>SEARCH</LeftContainerSpans>
        </LeftContainer>
        <CenterContainer>
          <CenterContainerSpans>GENERAL</CenterContainerSpans><CenterContainerSpans>BROWNBAG</CenterContainerSpans><CenterContainerSpans>RANDOM</CenterContainerSpans><CenterContainerSpans>MUSIC</CenterContainerSpans><LastCenterSpan>ANNOUNCEMENTS</LastCenterSpan>
        </CenterContainer>
        <RightContainer>
          <RightContainerSpans onClick={props.toggleLogOut}>{localStorage.getItem('lt-username') === null ? 'LOG IN' : localStorage.getItem('lt-username')}</RightContainerSpans>
          <LogOut open={props.logOutOpen}>
            <form action="">
            <LogoutTriangle/>  
            <LogOutButton onClick={props.logOut}>Logout</LogOutButton>
            </form>
          </LogOut>
        </RightContainer>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;