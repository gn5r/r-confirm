import type { FC } from "react";
import "./Divider.scss";

export const Divider: FC = () => {
  return (
    <hr role="separator" aria-orientation="horizontal" className="divider" />
  );
};
