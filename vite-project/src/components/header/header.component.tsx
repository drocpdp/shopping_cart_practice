import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <>
            <div>
                Header
            </div>
            <div>
                <div class="flex gap-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/products">Products</Link>
                </div>
            </div>
            </>
            <Outlet />
        </>
    )
}

export default Header;