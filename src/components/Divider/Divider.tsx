import type { FC } from "react";
import "./Divider.scss";

export const Divider: FC = () => {
  return (
    <hr aria-orientation="horizontal" className="divider" />
  );
};
