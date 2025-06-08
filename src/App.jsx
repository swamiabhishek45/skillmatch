import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./pages/layouts/AppLayout";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import MyJobs from "./pages/MyJobs";
import SavedJobs from "./pages/SavedJobs";
import PostJob from "./pages/PostJob";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
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
                    element: (
                        <ProtectedRoute>
                            <Onboarding />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/jobs",
                    element: (
                        <ProtectedRoute>
                            <JobListing />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/job/:id",
                    element: (
                        <ProtectedRoute>
                            <Job />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/post-job",
                    element: (
                        <ProtectedRoute>
                            <PostJob />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/my-jobs",
                    element: (
                        <ProtectedRoute>
                            <MyJobs />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/saved-jobs",
                    element: (
                        <ProtectedRoute>
                            <SavedJobs />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "/posted-jobs",
                    element: (
                        <ProtectedRoute>
                            <MyJobs />
                        </ProtectedRoute>
                    ),
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
