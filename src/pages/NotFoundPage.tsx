export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-secondary text-slate-50 flex items-center justify-center">
      <section className="h-[518px] mx-auto w-[80%] max-w-7xl p-4 border border-slate-700/60 rounded-2xl bg-dark">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-lg">Página não encontrada</p>
        </div>
      </section>
    </main>
  );
}
