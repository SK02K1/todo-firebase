import { useAuth } from "../contexts";

export const Hero = () => {
  const { user } = useAuth();

  return (
    <header className="hero">
      <p>Hellew {user?.email ?? "anonymous"}</p>
      <div>
        <img
          className="hero-banner"
          src="https://humornama.com/wp-content/uploads/2020/12/Toh-Kar-Na-meme-template-of-Arvind-Kejriwal.jpg"
          alt="arvind-bhai-delhi-wale"
        />
      </div>
    </header>
  );
};
