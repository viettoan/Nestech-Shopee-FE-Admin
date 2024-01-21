import { Navigation } from "../../components/navigation";
import {SideBar} from "../../components/sidebar";
import {Footer} from "../../components/footer";
import { Outlet } from "react-router-dom";

export function Index() {
    return (
        <>
            <div id="main" className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    {/** navigation */}
                    <Navigation />
                    {/** sidebar */}
                    <SideBar />
                    {/** content */}
                    <Outlet />
                    {/** footer */}
                    <Footer />
                </div>
            </div>
        </>
    )
}