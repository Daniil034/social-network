import {Router} from "./pages/Routes";
import {BrowserRouter, Link} from "react-router-dom";
import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("App", {}, [theme])}>
            <BrowserRouter>
                <button onClick={toggleTheme}>toggle theme</button>
                <Link to="/">Main page</Link>
                <Link to="/about">About page</Link>
                <Router/>
            </BrowserRouter>
        </div>
    );
};