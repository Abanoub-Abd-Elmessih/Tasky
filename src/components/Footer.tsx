import { SOCIAL_LINKS } from "@/constants";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="p-4 pb-0">
      <div className="container min-h-16 py-4 bg-background border border-b-0 rounded-t-xl flex flex-col gap-3 items-center lg:flex-row lg:justify-between">
        <p className="text-center text-sm">&copy; 2025 Abanoub</p>
        <ul className="flex flex-wrap items-center">
          {SOCIAL_LINKS.map(({ href, label }, index) => (
            <li className="flex items-center" key={index}>
              <a
                href={href}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground duration-300"
              >
                {label}
              </a>
              {index !== SOCIAL_LINKS.length - 1 && (
                <Separator orientation="vertical" className="h-3 mx-3" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
