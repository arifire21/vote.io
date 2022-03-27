import { Link, Outlet } from "react-router-dom";

export default function TestHeader() {
    return (
        <header>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/">Home</Link> |{" "}
                <Link to="/login">Login</Link> |{" "}
                <Link to="/create-poll">Create A Poll</Link> |{" "}
                <Link to="/view-poll">View Polls</Link>
            </nav>
            <Outlet />
        </header>
    );
}