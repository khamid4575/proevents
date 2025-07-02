"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition, useMemo, useCallback } from "react";
import Flag from "react-flagkit";

const languages = {
  uz: { name: "O'zbek", countryCode: "UZ" },
  ru: { name: "Русский", countryCode: "RU" },
  en: { name: "English", countryCode: "GB" },
};

export default function Language({ textColor = "text-white" }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = useLocale() as keyof typeof languages;

  const currentLanguageData = useMemo(
    () => languages[currentLanguage],
    [currentLanguage]
  );

  const handleLanguageChange = useCallback(
    (language: keyof typeof languages) => {
      startTransition(() => {
        const newPathname = pathname.replace(
          `/${currentLanguage}`,
          `/${language}`
        );
        router.replace(newPathname);
      });
    },
    [pathname, currentLanguage, router]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center outline-none"
        aria-labelledby="current-language-label" // Use a unique ID
      >
        <Flag country={currentLanguageData.countryCode} className="mr-2" />
        <span id="current-language-label" className={`font-medium lg:text-base text-sm ${textColor}`}>
          {currentLanguageData.name}
        </span>{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-lg ">
        {Object.entries(languages).map(([key, { name, countryCode }]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key as keyof typeof languages)}
            className="hover:bg-black/5 flex items-center font-medium text-gray-500 focus:text-gray-700 lg:text-base text-sm"
          >
            <Flag country={countryCode}/>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
