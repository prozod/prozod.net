function Availability({ show, message }: { show: boolean; message: string }) {
  return (
    <>
      {show ? (
        <a
          href="mailto:iamprozod@gmail.com"
          className="flex gap-3 items-center border-[0.5px] border-coal-900/10 dark:border-white/10 w-full py-4 px-4 rounded-md dark:hover:border-white/30 hover:border-coal-900/40 group transition-all"
        >
          <div className="relative w-2 h-2 bg-green-500 rounded-full before:content-[''] before:animate-ping before:w-2 before:h-2 before:absolute before:rounded-full before:bg-green-400"></div>

          <p className="flex gap-2 items-center font-jetbrains text-sm group-hover:underline transition-all group-hover:cursor-pointer">
            {message}
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 7.25L7.25 0.75M7.25 0.75H1.25M7.25 0.75V6.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </p>
        </a>
      ) : null}
    </>
  );
}
export default Availability;
