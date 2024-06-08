import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from '~/styledComponents';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  rightSlot?: React.ReactNode;
};

export const InputText = forwardRef<HTMLInputElement, Props>(({ rightSlot: RightSlot, ...props }, forwardedRef) => {
  return (
    <div
      style={{
        position: RightSlot ? 'relative' : 'static',
        width: '100%',
      }}>
      <Input type="text" autoComplete="off" ref={forwardedRef} {...props} />

      {RightSlot && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
          }}>
          {RightSlot}
        </div>
      )}
    </div>
  );
});

const Input = styled('input')`
  padding: 14px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.color.yologgerGrey200};
  background-color: ${({ theme }) => theme.color.yologgerGrey0};
  color: ${({ theme }) => theme.color.yologgerGrey900};
  caret-color: ${({ theme }) => theme.color.yologgerGrey900};
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologgerGrey400};
  }

  :focus {
    border-color: solid 1px ${({ theme }) => theme.color.yologgerGrey900};
    outline: none;
  }

  :disabled {
    background-color: ${({ theme }) => theme.color.yologgerGrey50};
    border-color: ${({ theme }) => theme.color.yologgerGrey200};
    cursor: not-allowed;
  }

  :read-only {
    border-color: ${({ theme }) => theme.color.yologgerGrey200};
    cursor: default;
    pointer-events: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;
