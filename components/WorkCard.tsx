import Image, { StaticImageData } from "next/image";

interface IWorkCard {
  name: string;
  url: string;
  details: string;
  logo?: string | StaticImageData;
  year: number;
}
function WorkCard({ name, details, logo, year, url }: IWorkCard) {
  return (
    <a href={url} target="_blank">
      <div className="flex flex-col border-[0.5px] group  border-coal-900/10 dark:border-white/5 dark:bg-coal-800/90 rounded-md h-auto p-4 gap-4 hover:cursor-pointer dark:hover:border-white/20 hover:border-coal-900/30 transition-all">
        <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-all">
          {logo ? (
            <Image
              src={logo}
              height={40}
              width={40}
              alt={name}
              className="rounded-md"
            />
          ) : (
            <div className="w-[40px] h-[40px] bg-indigo-400 rounded-md"></div>
          )}
          <div className="flex flex-col leading-4 gap-1">
            <p>{name}</p>
            <span className="opacity-60 text-sm">{year}</span>
          </div>
        </div>
        <p className="text-sm opacity-60 group-hover:opacity-100 transition-all">
          {details}
        </p>
      </div>
    </a>
  );
}
export default WorkCard;
