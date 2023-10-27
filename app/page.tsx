export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8">
      <p className="mb-10">Velkommen til min shopping side</p>

      <p className="text-2xl mb-6">Next Intro oppgave:</p>
      <p className="text-lg">
        Kunne hente en collection (liste) fra en ressurs (endepunkt)
      </p>
      <p className="mb-6">Alle produkter blir hentet fra et API endepunkt.</p>
      <p className="text-lg">
        Kunne sende noe data til den samme ressursen eller en annen ressurs
      </p>
      <p className="mb-6">
        Bare trykk deg inn på Produkter side via Navigasjonen, så vil du se en
        knapp for å legge til et produkt. Nå kan du både utføre GET og POST
        handlinger på samme API endepunkt.
      </p>
      <p className="text-lg">Kunne hente et enkelt item fra samme ressurs</p>
      <p className="mb-6">
        Bare trykk deg på en tittel eller bilde av et produkt i Produkter siden,
        så vil du havne på en egen side av det produktet. GET kall blir utført
        for å hente en spesifikk produkt.
      </p>
    </main>
  );
}
