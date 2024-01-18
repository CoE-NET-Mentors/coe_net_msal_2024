import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { NavigationComponent } from "./components/NavigationComponent";
import { MsalProvider } from '@azure/msal-react';
import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
import { TestPage } from "./pages/Test";
// loader definition outside UserEditScreen component
/*
export const loader = (msalInstance: PublicClientApplication) => 
  ({ request, params }: LoaderFunctionArgs) => {
    ...
    // some more code to clarify my need on the msal instance inside the loader
    const request = {
      account: msalInstance.getActiveAccount(),
      scopes: scopes
    }
    const accessToken = await msalInstance.acquireTokenSilent(request)
      .then(response => response.accessToken)
      .catch(error => {        
        console.error(error);
      })
    // then with the accessToken I can just use made 
    // a javascript fetch request to my secured endpoint in azure

    ...
  };
*/
const createAppRouter = ({ msalInstance }) => createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "test",              
                element: <TestPage />
            },
            {
                path: "about",
                element: <AboutPage />
            }
        ]
    }
]);

function Layout() {
    return (
        <div className="container-fluid">
            <NavigationComponent />
            <Outlet />
        </div>
    );
}

export function App({ instance }) {
    return (
        <MsalProvider instance={instance}>
            <RouterProvider router={createAppRouter({ instance })} />
        </MsalProvider>
    );
}
