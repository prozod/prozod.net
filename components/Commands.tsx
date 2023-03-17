"use client";
import { Transition } from "@headlessui/react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { socials } from "./Socials";

const CommandMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState("apple");
  const { theme, setTheme } = useTheme();
  const [preferredSystemColorScheme, setPreferredSystemColorScheme] =
    useState<string>();

  useEffect(() => {
    setPreferredSystemColorScheme(() =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, [theme]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  let themePickingConditions =
    theme === "system" && preferredSystemColorScheme == "light"
      ? "dark"
      : theme == "light"
      ? "dark"
      : "light";

  return (
    <Transition
      show={open}
      appear={true}
      enter="transition-opacity duration-250"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-250"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Command.Dialog
        loop
        open={open}
        onOpenChange={setOpen}
        value={value}
        onValueChange={setValue}
        label="Global Command Menu"
        className="bg-coal-900/30 dark:bg-coal-900/50 backdrop-blur-[1.5px] z-10 fixed inset-0 w-full h-full"
      >
        <Transition.Child
          enter="transition-opacity duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Command className="z-50 fixed inset-0 m-auto flex flex-col justify-center items-center h-fit w-10/12 md:w-[60%] lg:w-[50%] xl:w-[32%] 2xl:w-[28%] transition-all rounded-md bg-white dark:bg-coal-800 border-[0.5px] border-gray-400 dark:border-white/10 shadow-md shadow-zinc-300 dark:shadow-coal-700">
            <Command.Input
              placeholder="Search for commands and links..."
              className="border-b-[0.5px] dark:bg-coal-800 border-b-gray-500 dark:border-white/10 w-full p-2 rounded-tr-md rounded-tl-md outline-none"
            />
            <Command.List className="p-2 w-full text-sm">
              <Command.Empty>No results found.</Command.Empty>

              <Command.Group
                heading="Social platforms"
                className="text-xs mb-2"
              >
                {socials.map((social, i) => {
                  return (
                    <Command.Item
                      className="px-3 py-2 cursor-pointer relative flex items-center gap-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md transition-colors duration-300 text-primary"
                      key={i}
                      onSelect={() => window.open(social.url)}
                    >
                      {social.icon} {social.name}
                    </Command.Item>
                  );
                })}
              </Command.Group>
              <Command.Separator className="w-full h-[1px] bg-coal-900/10 mb-4 mt-2"></Command.Separator>

              {/*<Command.Group heading="Miscellaneous" className="text-xs">
                <Command.Item
                  className="px-3 py-2 cursor-pointer relative flex items-center gap-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md transition-colors duration-300 text-primary"
                  onSelect={() => window.open()}
                >
                  <FileTextIcon /> Curriculum Vitae
                </Command.Item>
              </Command.Group>
              <Command.Separator className="w-full h-[1px] bg-coal-900/10 mb-4 mt-2"></Command.Separator>*/}

              <Command.Group heading="Settings" className="text-xs">
                <Command.Item
                  className="px-3 py-2 cursor-pointer relative flex items-center gap-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md transition-colors duration-300 text-primary"
                  value={themePickingConditions}
                  onSelect={(v) => {
                    setTheme(v);
                    setOpen(false);
                  }}
                >
                  {themePickingConditions ? <SunIcon /> : <MoonIcon />} Change
                  theme to {themePickingConditions}
                </Command.Item>
                <Command.Item
                  className="px-3 py-2 cursor-pointer relative flex items-center gap-2 text-sm hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-md transition-colors duration-300 text-primary"
                  value="system"
                  onSelect={(v) => {
                    setTheme(v);
                    setPreferredSystemColorScheme(v);
                    setOpen(false);
                  }}
                >
                  <DesktopIcon /> Change theme to system
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </Transition.Child>
      </Command.Dialog>
    </Transition>
  );
};

export default CommandMenu;
