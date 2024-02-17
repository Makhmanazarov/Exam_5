import React from "react";
import { Header } from "./header/Header-main";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";
import { MainSection } from "../allComponents/section/section"

export const MainLayout = () => {
  return (
    <div className=" h-screen flex justify-between flex-col text-5">
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        <MainSection/>
        <Footer/>
    </div>
  )
}
