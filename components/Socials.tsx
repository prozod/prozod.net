import {
  CubeIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/prozod",
    icon: (
      <GitHubLogoIcon className="transition-all opacity-60 hover:opacity-100 w-6 h-auto hover:text-black dark:hover:text-white" />
    ),
  },
  {
    name: "Mail",
    url: "mailto:iamprozod@gmail.com",
    icon: (
      <EnvelopeClosedIcon className="transition-all opacity-60 w-6 h-auto hover:opacity-100" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andreaswolff96/",
    icon: (
      <LinkedInLogoIcon className="transition-all opacity-60 hover:opacity-100 w-6 h-auto hover:text-blue-400 " />
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/iamprozod",
    icon: (
      <TwitterLogoIcon className="transition-all opacity-60 hover:opacity-100 w-6 h-auto hover:text-blue-300 " />
    ),
  },
  {
    name: "Codepen",
    url: "https://codepen.io/prozod",
    icon: (
      <CubeIcon className="transition-all opacity-60 hover:opacity-100 w-6 h-auto dark:hover:text-white " />
    ),
  },
];

function Socials() {
  return (
    <section className="flex gap-4 py-4 [&>*]:transition-all [&>*]:cursor-pointer">
      {socials.map((social) => (
        <a href={social.url} key={social.name} target="_blank" rel="noreferrer">
          {social.icon}
        </a>
      ))}
    </section>
  );
}
export default Socials;
