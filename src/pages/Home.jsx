import { useAuth } from "../contexts";

export const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <header className="hero">
        <h1>todo-firebase</h1>
        <p>Hellew {user?.email ?? "anonymous"}</p>
        <img
          className="hero-banner"
          src="https://humornama.com/wp-content/uploads/2020/12/Toh-Kar-Na-meme-template-of-Arvind-Kejriwal.jpg"
          alt="arvind-bhai-delhi-wale"
        />
      </header>
    </div>
  );
};
