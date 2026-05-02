import Image from "next/image";

export function Banner({ year = new Date().getFullYear() }: { year?: number }) {
  return (
    <a
      href="https://hackclub.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute left-0 top-2.5 z-50 block w-[230px]"
      aria-label="Hack Club"
    >
      <Image
        className="h-auto w-[230px]"
        width={230}
        height={82}
        src={`https://assets.hackclub.com/banners/${year}.svg`}
        alt="Hack Club"
        priority
      />
    </a>
  );
}
