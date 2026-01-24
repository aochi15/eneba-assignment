import type { PageBaseProps } from "~/props/PageBaseProps";

const pageBaseStyle: React.CSSProperties = {
  maxWidth: "1240px",
  margin: "0px auto",
  padding: "0px 20px 20px 20px",
};

export function PageBase({ children }: PageBaseProps) {
  return <div style={pageBaseStyle}>{children}</div>;
}
