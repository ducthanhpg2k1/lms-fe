import React from 'react';

import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'font-14-500'
    | 'font-12-500'
    | 'font-16-600'
    | 'font-16-700'
    | 'font-14-400'
    | 'font-32-700'
    | 'font-16-400'
    | 'font-16-500'
    | 'font-18-600'
    | undefined;
  color?: 'cwhite' | undefined;
  disabled?: boolean;
  state?: null | 'disable';
  className?: string;
  onClick?: () => void;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  disabled = false,
  className = '',
  onClick = () => {},
  children,
  element = 'p',
}) => {
  const classes = classNames(
    type,
    color,
    { 'text-disable': disabled },
    className
  );

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children)
  );
};

export default Text;
