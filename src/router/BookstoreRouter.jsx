import { Route, Routes } from "react-router-dom"
import { HomeRoutes } from "../components/home/routes/HomeRoutes"
import { BlogRoutes } from "../components/blogs/routes/BlogRoutes"

export const BookstoreRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoutes />} />
            <Route path="/blogs" element={<BlogRoutes />} />
        </Routes>
    )
}