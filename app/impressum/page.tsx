// app/impressum/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-300 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 transition-colors">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Impressum</h1>

        <div className="space-y-8 text-sm leading-relaxed border-t border-white/10 pt-8">
          
          {/* 1. Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Akhilesh Bhaskar Kotegar<br />
              Hengersberger Strasse 15<br /> 
              94469 Deggendorf<br />
              Germany
            </p>
          </section>

          {/* 2. Kontakt */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
            <p>
              Telefon: +49 15565794606<br />
              E-Mail: akhilkotegar@gmail.com
            </p>
          </section>

          {/* 3. Content Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          {/* 4. Link Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          {/* 5. Copyright */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}