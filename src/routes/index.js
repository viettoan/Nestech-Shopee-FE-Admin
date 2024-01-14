import { createBrowserRouter } from "react-router-dom";
import { Index } from "../modules/users/pages";
import { Create } from "../modules/users/pages/create";
import { Update } from "../modules/users/pages/update";
import { Index as MainLayout } from "../layouts/main";
import { Index as Dashboard } from "../modules/dashboard/pages";
import { Index as IndexProduct } from "../modules/products/pages";
export const router = createBrowserRouter([
    // route cha - cum routes co chung layout = Mainlayout
    {
        path: "/",
        element: <MainLayout/>,
        // dinh nghia cac route trong route cha
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'users',
                children: [
                    {
                        index: true,
                        element: <Index/>
                    },
                    {
                        path: 'create',
                        element: <Create/>
                    },
                    {
                        path: ':userId/edit',
                        element: <Update/>
                    }
                ]
            }
        ]
    },
    
]);
