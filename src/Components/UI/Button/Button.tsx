import { FC, ReactNode } from "react";
import s from './Button.module.scss';

interface IButton {
  children: ReactNode;
}

const Button: FC<IButton> = ({ children, ...props}) => {
  return <button className={s.btn} {...props}>{children}</button>;
};

export default Button;
