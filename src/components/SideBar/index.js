import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBarMenu,
  SideBtnWrap,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={toggle} to="about">
            About
          </SideBarLink>
          <SideBarLink onClick={toggle} to="discover">
            Discover
          </SideBarLink>
          <SideBarLink onClick={toggle} to="services">
            Services
          </SideBarLink>
          <SideBarLink onClick={toggle} to="signup">
            sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
