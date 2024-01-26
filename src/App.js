import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import {CookiesProvider} from "react-cookie";

export default function App() {
  return (
    <CookiesProvider>
      <RouterProvider router={router}/>
    </CookiesProvider>
  )
}