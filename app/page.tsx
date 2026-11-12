import EntryForm from "@/components/EntryForm";
import EntryList from "@/components/EntryList";
import { isConfigured } from "@/lib/supabase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span
              className="grid h-9 w-9 place-items-center rounded-lg text-white"
              style={{ background: "var(--accent)" }}
            >
              ◆
            </span>
            <span className="font-semibold tracking-tight">Startup Idea Vault</span>
          </div>
          <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-medium" style={{ color: "var(--accent)" }}>
            Work
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
          Park ideas before they evaporate
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Park ideas before they evaporate.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          A working Next.js app with a live Supabase backend. Add a idea below and it
          is stored in Postgres with row-level security, then read straight back.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-2xl">💡</div>
          <h3 className="mt-3 font-semibold text-slate-900">Idea plus problem</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">An idea without a problem is a hobby.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-2xl">🎯</div>
          <h3 className="mt-3 font-semibold text-slate-900">Audience field</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">Who exactly, not 'everyone'.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-2xl">⚡</div>
          <h3 className="mt-3 font-semibold text-slate-900">Effort score</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">Quick triage for weekend builds.</p>
        </div>
        </div>
      </section>

      {!isConfigured && (
        <div className="mx-auto mb-10 max-w-5xl px-6">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <strong>Supabase not configured.</strong> Copy <code>.env.example</code> to{" "}
            <code>.env.local</code> and add your project URL and anon key. The UI below is
            fully functional once those are set.
          </div>
        </div>
      )}

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-24 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <EntryForm />
        </div>
        <div className="lg:col-span-3">
          <EntryList />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-6 text-sm text-slate-500">
          Startup Idea Vault — built with Next.js, Tailwind CSS and Supabase.
        </div>
      </footer>
    </main>
  );
}
