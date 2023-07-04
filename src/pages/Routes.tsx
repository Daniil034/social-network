import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainPage/>,
//     },
//     {
//         path: "about",
//         element: <AboutPage/>,
//     },
// ]);

const MainPage = lazy(() => import("./MainPage/MainPage"));
const AboutPage = lazy(() => import("./AboutPage/AboutPage"));

export function Router() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    );
}