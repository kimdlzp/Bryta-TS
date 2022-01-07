import styled from '@emotion/styled';
import React from 'react';

function header() {
  const isLoggedIn = true;

  return (
    <HeaderWrap>
      <img className="logo" src="/assets/icons/headerLogo.svg" alt=""></img>
      <div className="user">
        {isLoggedIn ? ( 
        <div className="user__profile">
          <p className="user__profile--logout">Log out</p>
          <img className="user__profile--picture" src="" alt=""></img>
          <p className="user__profile--name">Name</p>
        </div>
        ): (
          <div className="user__anonymous">
          <p className="user__anonymous--login">Log in</p>
          <p className="user__anonymous--signUp">Sign up</p>
        </div>
        )}
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;


  .logo {
    margin-left: 20px;
    width: 450px;
    height: 700px;
  }
  .user {
    &__anonymous {
      display: flex;
      margin-right: 140px;

      &--login {
        line-height: 27px;
        white-space: nowrap;
        color: #9d9d9d;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
      }
      &--signUp {
        margin-left: 40px;
        line-height: 27px;
        white-space: nowrap;
        color: #ffab53;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
      }
    }

    &__profile {
      display: flex;
      margin-right: 55px;

      &--logout {
        margin-right: 40px;
        line-height: 27px;
        white-space: nowrap;
        color: #9d9d9d;
        font-size:20px;
        font-weight: bold;
        font-style: normal;
      }

      &--picture{
        border-radius: 14px;
        box-shadow: 3px 3px 7px 4px rgba(98, 98, 98, 0.12);
        background-color: #ffab53;
        width: 28px;
        height: 28px;
        overflow: hidden;
      }

      &--name {
        margin-left: 9px;
        line-height: 27px;
        white-space: nowrap;
        color: #ffab53;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
      }
    }
  }
`;

export default header;