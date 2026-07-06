import { Button } from "@/components/ui/Button";

export function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="font-mono text-sm text-copper-400">404</span>
      <h1 className="max-w-[20ch] text-3xl font-semibold md:text-4xl">This page isn't part of the system.</h1>
      <p className="max-w-[46ch] text-sand-400">The page you're looking for may have moved. Try the homepage, or call directly.</p>
      <Button href="/">Back To Home</Button>
    </div>
  );
}
