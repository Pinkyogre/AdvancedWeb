import Home from "./src/components/Home";
import UserSettings from "./src/components/UserSettings";
import ShoppingCart from "./src/components/ShoppingCart";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import CarsList from "./src/components/CarsList";

export default   [
    { path: '/', component: Home, name: 'Home' },
    { path: '/user-settings', component: UserSettings, name : 'UserSettings' },
    { path: '/shopping-cart', component: ShoppingCart, name: 'ShoppingCart' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/cars-list', component: CarsList, name: 'CarsList' },
]