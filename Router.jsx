// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./src/layouts/RootLayout";

import NotFound from "./src/pages/NotFound";
import MainPage from "./src/pages/MainPage";
import ProjectListPage from "./src/pages/ProjectListPage";
import ProjectDetailPage from "./src/pages/ProjectDetailPage";
import GuestBookPage from "./src/pages/GuestBookPage";
import SearchPage from "./src/pages/SearchPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/search" element={<SearchPage />} />

          <Route path="/*" element={<RootLayout />}>
            <Route path="" element={<MainPage />} />
            <Route path="project-list" element={<ProjectListPage />} />
            <Route path="project-detail" element={<ProjectDetailPage />} />
            <Route path="guest-book" element={<GuestBookPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
