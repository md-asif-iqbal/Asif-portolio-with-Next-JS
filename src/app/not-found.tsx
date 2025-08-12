export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-foreground/70">Sorry, we couldn’t find the page you’re looking for.</p>
      <a href="/" className="mt-6 inline-block rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background">
        Go home
      </a>
    </div>
  );
}


