//Public Routes
import Login from '../Login/'
import SignUp from '../SignUp/'

//Private Routes
import Admin from '../Admin/'


export const routes = [
    {
        path: "/",
        exact: true,
        component: Login,
        isProteced: false
    },
    {
        path: "/",
        exact: true,
        component: SignUp,
        isProteced: false
    },
    {
        path: "/",
        exact: true,
        component: Admin,
        isProteced: false
    }
]