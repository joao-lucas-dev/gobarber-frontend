import PerfectScrollBar from 'react-perfect-scrollbar';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
`;

export const Notification = styled.div`
  color: #fff;
  padding: 20px;

  & + div {
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin: 5px 0;
  }

  span {
    display: inline;
    font-size: 12px;
    color: ${lighten(0.1, '#7159c1')};

    ${props =>
      props.unread &&
      css`
        & {
          display: none;
        }
      `}
  }

  button {
    display: none;
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};

    ${props =>
      props.unread &&
      css`
        & {
          display: inline;
        }
      `}
  }

  ${props =>
    props.unread &&
    css`
      & {
        background: rgba(0, 0, 0, 0.3);
      }

      &::after {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
