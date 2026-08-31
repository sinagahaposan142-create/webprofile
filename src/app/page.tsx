import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        {siteConfig.name}
      </h1>
      <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400">
        {siteConfig.fullName}
      </p>
      <p className="max-w-2xl text-sm text-zinc-500">{siteConfig.tagline}</p>
    </main>
  );
}
