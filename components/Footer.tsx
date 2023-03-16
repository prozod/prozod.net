import Socials from "./Socials";
import SpotifyCard from "./Spotify";

function Footer() {
  return (
    <footer className="gap-1 text-xs flex flex-col pb-6">
      <Socials />
      <SpotifyCard />
      <p className="mt-4 opacity-60">
        This website was built using Tailwind, Next.js and some Vercel magic.
      </p>
      <p className="opacity-60">
        Andreas &apos;prozod&apos; Wolff © Copyright · 2023
      </p>
    </footer>
  );
}
export default Footer;
