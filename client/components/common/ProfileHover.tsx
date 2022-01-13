import styled from '@emotion/styled';
import router from 'next/router';
import React, { ReactElement } from 'react';

function ProfileHover(): ReactElement {
  return (
    <Wrap>
      <button className="option">
        <img className="option__icon" src="/assets/icons/setting.svg" alt=""></img>
        <p className="option__label">Account Settings</p>
        <div className="option__border"></div>
      </button>
      <button className="option">
        <img className="option__icon" src="/assets/icons/favorite.svg" alt=""></img>
        <p className="option__label">Favorites</p>
      </button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  border-radius: 16px;
  box-shadow: 3px 3px 7px 4px rgba(98, 98, 98, 0.12);
  background: #f8fafc;
  width: 210px;
  height: 97px;
  .option {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    width: 204px;
    height: 30px;
    &__icon {
      margin-left: 10px;
      width: 19px;
      height: 19px;
    }
    &__label {
      margin-left: 12px;
      line-height: 22px;
      color: #9d9d9d;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
    }
    &__border {
      opacity: 0.53;
      margin-top: 7px;
      background: #f1be15;
      width: 204px;
      height: 1px;
    }
  }
`;

export default ProfileHover;