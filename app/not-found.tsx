import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-violet-100 mb-4">
          404 - Página no encontrada
        </h2>
        <p className="text-slate-400 mb-8">
          La página que buscás no existe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
