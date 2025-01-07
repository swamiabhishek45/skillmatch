import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./layouts/AppLayout";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import MyJobs from "./pages/MyJobs";
import SavedJobs from "./pages/SavedJobs";
import PostJob from "./pages/PostJob";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <LandingPage />,
                },
                {
                    path: "/onboarding",
                    element: <Onboarding />,
                },
                {
                    path: "/jobs",
                    element: <JobListing />,
                },
                {
                    path: "/job/:id",
                    element: <Job />,
                },
                {
                    path: "/post-job",
                    element: <PostJob />,
                },
                {
                    path: "/my-jobs",
                    element: <MyJobs />,
                },
                {
                    path: "/saved-jobs",
                    element: <SavedJobs />,
                },
            ],
        },
    ]);
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
