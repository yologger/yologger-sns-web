import React, { TextareaHTMLAttributes, forwardRef } from 'react';
import styled from '~/styledComponents';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  // ...
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ ...props }, forwardedRef) => {
  return <BaseTextArea ref={forwardedRef} {...props} />;
});

const BaseTextArea = styled('textarea')`
  width: 100%;
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.yologgerGrey200};
  resize: none;
  font-weight: 400;
  color: ${({ theme }) => theme.color.yologgerGrey900};
  line-height: 1.35;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologgerGrey400};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.yologgerGrey900};
    outline: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;
