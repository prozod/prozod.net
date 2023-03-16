function Header() {
  return (
    <div className="flex gap-6 flex-col">
      <div>
        <span className="text-4xl font-semibold dark:text-white/30 leading-3">
          Hello,
        </span>
        <p className="opacity-90 break-keep">
          I’m Andreas{" "}
          <span className="text-xs font-jetbrains text-purple-600/80 dark:text-white/60">
            [alias prozod]
          </span>
          , a Software Developer with an affinity for Front-end Development and
          Web Tooling.
        </p>
      </div>
      <p className="opacity-90">
        I’m currently looking for a role at your company, and I’m available to
        hire. Feel free to take a look at my projects below, as well as my
        social links.
      </p>
    </div>
  );
}
export default Header;
