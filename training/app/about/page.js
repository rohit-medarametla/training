// This is a React Server Component by default
export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg">
        This is the about page for our Next.js project.
      </p>
      
      {/* These are Tailwind classes! */}
      <div className="mt-8 p-4 bg-blue-100 text-blue-800 rounded-lg">
        We are learning GitHub Issues and Next.js routing!
      </div>
    </main>
  );
}