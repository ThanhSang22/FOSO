import { Pathnames } from "next-intl/routing";
import { UrlObject } from "url";

export const locales = ["vi", "en"];
export const defaultLocale = "vi";

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    vi: "/gioi-thieu",
  },
  "/cart": {
    en: "/cart",
    vi: "/gio-hang",
  },
} satisfies Pathnames<typeof locales>;

// const publicPathname: string[] = ["/", "/sign-in", "/contact", "/about"]

// export const rolePermissions = {
//   guest: [...publicPathname],
//   user: [...publicPathname, "/profile"],
//   manager: [...publicPathname, "/admin"],
//   admin: ["*"],
// };

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
type ExcludeType<T, Exclude> = T extends Exclude ? never : T;
type AppPathnamesWithSlug = AppPathnames & `${string}[${string}`;
type AppPathnamesWithoutSlug = ExcludeType<AppPathnames, AppPathnamesWithSlug>;

export type Href =
  | AppPathnamesWithoutSlug
  | ({
      pathname: AppPathnames;
      params?: unknown;
    } & Omit<UrlObject, "pathname">);
