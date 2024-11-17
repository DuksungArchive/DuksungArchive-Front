import { Outlet } from "react-router-dom";
import TopBar from "../components/common/TopBar";

export default function RootLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
