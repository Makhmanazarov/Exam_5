import { Home } from "../pages/home/home"
import { About } from "../pages/about/about"
import { News } from "../pages/news/news"
import { Pages } from "../pages/pages/pages"
import { Projects } from "../pages/projects/projects"
import { Shop } from "../pages/shop/shop"

export const main_pages = [
    {
        component: <Home/>,
    },
    {
        component: <About/>,
        path: "about",
    },
    {
        component: <News/>,
        path: "news",
    },
    {
        component: <Pages/>,
        path: "pages",
    },
    {
        component: <Projects/>,
        path: "projects",
    },
    {
        component: <Shop/>,
        path: "shop",
    },
]
