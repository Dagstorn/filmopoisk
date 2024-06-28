import { createBrowserRouter } from 'react-router-dom';
import Layout from "@/pages/Layout/Layout";

import HomePage from "@/pages/HomePage/HomePage";
import MoviePage from "@/pages/MoviePage/MoviePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/movies/:movieId",
                element: <MoviePage />,
            }
        ],
        errorElement: <NotFoundPage />,
    },
]);

export default router;