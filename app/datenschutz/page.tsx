"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-300 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 transition-colors">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Datenschutzerklärung (Privacy Policy)</h1>

        <div className="space-y-6 text-sm leading-relaxed border-t border-white/10 pt-8">
          <p>
            <strong>1. Datenschutz auf einen Blick</strong><br/>
            Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>

          <p>
            <strong>2. Hosting</strong><br/>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br/>
            Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.<br/>
            Vercel ist ein Cloud-Plattform-Anbieter, der unsere Website bereitstellt. Wenn Sie unsere Website aufrufen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
          </p>

          <p>
            <strong>3. Externe Dienste</strong><br/>
            Diese Seite nutzt GitHub API Dienste, um Code-Aktivitäten anzuzeigen. Dabei können Anfragen an GitHub-Server gesendet werden, wodurch Ihre IP-Adresse an GitHub übertragen werden könnte.
          </p>

          <p>
            <strong>4. Kontakt</strong><br/>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.
          </p>
        </div>
      </div>
    </main>
  );
}