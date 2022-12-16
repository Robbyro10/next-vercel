import { FC, PropsWithChildren } from "react";

export const LightLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "10px",
        color: "black",
      }}
    >
      {children}
    </div>
  );
};
