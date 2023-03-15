import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="dark:bg-gray-900 dark:text-white px-16 py-10 rounded-md flex items-center gap-4 flex-col border-[0.5px] border-zinc-900/30 dark:border-white/10 shadow-blue-300/10 shadow">
        <div className="flex gap-2">
          <Image
            src="prozod-logo-color.svg"
            width={18}
            height={18}
            alt="prozod letter logo"
            className="h-fit"
          />
          <p className="font-bold dark:text-blue-200 w-fit h-fit">prozod.net</p>
        </div>
        <span className="w-full h-[0.5px] dark:bg-white/10 bg-zinc-900/20"></span>
        <h1>This page is under construction</h1>
        <span className="w-full h-[0.5px] dark:bg-white/10 bg-zinc-900/20"></span>
        <div className="flex gap-8 dark:[&>*]:text-blue-200 [&>*]:font-semibold [&>*]:text-sm [&>*]:cursor-pointer justify-around [&>*]:transition-all">
          <a
            href="https://github.com/prozod"
            rel="noreferrer"
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/iamprozod"
            rel="noreferrer"
            target="_blank"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </main>
  );
}
