export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex shadow-lg p-10 border rounded-lg flex-col gap-8 row-start-2 h-full w-full items-center sm:items-start">
        <button>Theme (dark)</button>
        Candidate Portal
      </main>
      <footer className="row-start-3 w-full flex shadow-lg p-4 border rounded-lg  gap-6 flex-wrap items-center justify-center">
        This is the footer of candidate portal
      </footer>
    </div>
  );
}
