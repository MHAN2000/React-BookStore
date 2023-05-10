import { Route, Routes } from "react-router-dom"
import { HomePage } from "../components/pages/HomePage"

export const BookstoreRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}