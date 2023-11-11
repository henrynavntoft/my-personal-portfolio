import { Image, Link } from "@nextui-org/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center space-y-2 m-4">
      <p>© {currentYear} Henry Navntoft</p>
      <div className="flex space-x-8 py-2">
        <Link href="https://github.com/henrynavntoft" target="_blank">
          <Image
            alt="GitHub logo"
            width={50}
            className="dark:invert"
            src="/github.svg"
          />
        </Link>
        <Link
          href="https://linkedin.com/in/henry-lundberg-navntoft"
          target="_blank"
        >
          <Image
            alt="LinkedIn logo"
            width={50}
            className="dark:invert"
            src="/linkedin.svg"
          />
        </Link>
      </div>
    </div>
  );
}
