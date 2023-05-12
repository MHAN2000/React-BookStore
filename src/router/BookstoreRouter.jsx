import { Route, Routes } from "react-router-dom"
import { HomeRoutes } from "../components/home/routes/HomeRoutes"
import { BlogRoutes } from "../components/blogs/routes/BlogRoutes"
import { FeaturedRoutes } from "../components/featured/routes/FeaturedRoutes"

export const BookstoreRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoutes />} />
            <Route path="/blogs" element={<BlogRoutes />} />
            <Route path="/featured" element={<FeaturedRoutes />} />
        </Routes>
    )
}