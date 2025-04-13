import { useAuth } from "@/store/useAuth";
import "./App.scss";

export const App = () => {
  const logout = useAuth(state => state.logout);
  return (
    <>
      <header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
          </ul>
        </nav>
        <button>Button</button>
      </header>
      <main>
        <h1>Main</h1>
        <button onClick={logout}>Logout</button>
      </main>
    </>
  );
};
