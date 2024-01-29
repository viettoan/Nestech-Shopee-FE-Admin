import { Navigation } from "../../components/navigation";
import {SideBar} from "../../components/sidebar";
import {Footer} from "../../components/footer";
import { Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Index() {
    // useNavigate => return ve 1 function
    const navigate = useNavigate();
    // useCookies, useState => return 1 array [ cookiesValue,  setCookies ]
    // Destructuring cua array
    // test = [1,2] => test[0], test[1]
    // [element1, element2] = test;
    const [ cookies ] = useCookies();

    useEffect(
        () => {
            if (!cookies.user_token) {
                navigate('/auth/login');
            }
        },
        []
    );

    return (
        <>
            <div id="main" className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    {/** navigation */}
                    <Navigation />
                    {/** sidebar */}
                    <SideBar />
                    {/** content */}
                    <div className="content-wrapper">
                        <Outlet />
                    </div>
                    {/** footer */}
                    <Footer />
                </div>
            </div>
        </>
    )
}