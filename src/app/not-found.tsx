export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-48 text-center">
      <p className="text-8xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground/90">
        Page not found
      </h1>
      <p className="mt-2 text-foreground/50">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="mt-8 inline-block rounded-full bg-accent/10 border border-accent/20 px-6 py-2.5 text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
}


