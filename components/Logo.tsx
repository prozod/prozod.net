import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-between items-center w-full mb-4">
      <Image
        src="prozod-logo-color.svg"
        width={60}
        height={60}
        alt="prozod letter logo"
        className="aspect-square"
      />

      <p className="text-xs opacity-20 text-center">
        Press ⌘K to open the menu
      </p>
    </div>
  );
}
export default Logo;
