import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutComponent({ children }: LayoutProps) {
  return <Layout>{children}</Layout>;
}

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 200px;
  background-color: #eef2ff;
`;
