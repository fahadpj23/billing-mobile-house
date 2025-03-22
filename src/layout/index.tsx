import { FC, ReactNode } from "react";
import SideDrawar from "./sideDrawar";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: FC = () => {
  return (
    <div>
      <SideDrawar></SideDrawar>
    </div>
  );
};
export default MainLayout;
