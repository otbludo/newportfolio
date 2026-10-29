import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Globe } from "../components/ui/Globe.jsx";

const travelDestinations = [
  {
    country: "France",
    flag: "🇫🇷",
    location: [46.2276, 2.2137],
    photos: ["/imgvoyages/france1.jpg", "/imgvoyages/france2.jpg"],
  },
  
  {
    country: "Cameroun",
    flag: "🇨🇲",
    location: [7.3697, 12.3547],
    photos: [
      "/imgvoyages/cameroun1.jpg",
      "/imgvoyages/cameroun2.jpg",
      "/imgvoyages/cameroun3.jpg",
    ],
  },
];

const travelPhotos = travelDestinations.flatMap((destination, destinationIndex) =>
  destination.photos.map((photo) => ({ photo, destinationIndex })),
);

export function TravelPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const selectedPhoto = travelPhotos[selectedPhotoIndex];
  const destination = travelDestinations[selectedPhoto.destinationIndex];
  const travelMarkers = useMemo(
    () => [{ location: destination.location, size: 0.12 }],
    [destination],
  );

  const selectPhoto = (direction) => {
    setSelectedPhotoIndex(
      (current) =>
        (current + direction + travelPhotos.length) % travelPhotos.length,
    );
  };

  const selectDestination = (destinationIndex) => {
    const firstPhotoIndex = travelPhotos.findIndex(
      (item) => item.destinationIndex === destinationIndex,
    );
    setSelectedPhotoIndex(firstPhotoIndex);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 pb-28 md:px-6 md:py-10">
      <header className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
          Voyages
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Les endroits où je suis allé
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          France · Cameroun
        </p>
      </header>
      <section
        aria-label="Globe interactif et carnet de voyages"
        className="grid items-center gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] md:gap-10"
      >
        <div className="relative mx-auto h-[min(82vw,560px)] w-full max-w-[560px]">
          <Globe
            key={destination.country}
            markers={travelMarkers}
            location={destination.location}
          />
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-3 py-1.5 text-xs text-slate-500 shadow-sm">
            Fais tourner le globe, puis découvre une destination
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="mb-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            <span>Dans mon carnet</span>
            <span>
              {String(selectedPhotoIndex + 1).padStart(2, "0")} /{" "}
              {String(travelPhotos.length).padStart(2, "0")}
            </span>
          </div>
          <TravelPhoto
            key={selectedPhoto.photo}
            destination={destination}
            photo={selectedPhoto.photo}
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {travelDestinations.map((item, index) => (
                <button
                  key={item.country}
                  type="button"
                  aria-pressed={destination === item}
                  onClick={() => selectDestination(index)}
                  className={`rounded-full px-3 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 ${
                    destination === item
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item.country}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Photo précédente"
                onClick={() => selectPhoto(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={() => selectPhoto(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function TravelPhoto({ destination, photo }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const stackedPhotos = destination.photos.filter((item) => item !== photo).reverse();

  return (
    <div className="relative mx-2 my-3">
      {stackedPhotos.map((photo, index) => (
        <div
          key={photo}
          aria-hidden="true"
          className={`absolute inset-0 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4 ${
            index % 2 === 0
              ? "translate-x-3 translate-y-2 rotate-3"
              : "-translate-x-2 translate-y-1 -rotate-2"
          }`}
        >
          <img
            src={photo}
            alt=""
            className="aspect-[9/10] w-full rounded-md object-cover"
          />
        </div>
      ))}
      <article className="-rotate-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 transition-transform duration-300 hover:rotate-0 sm:p-4">
        {imageUnavailable ? (
          <div
            role="img"
            aria-label={`Emplacement réservé à une photo de ${destination.country}`}
            className="flex aspect-[9/10] flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-5 text-center"
          >
            <MapPin className="mb-2 h-6 w-6 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">
              Photo de {destination.country}
            </span>
            <span className="mt-1 text-xs text-slate-500">
              Ajoute les photos dans public/imgvoyages/
            </span>
          </div>
        ) : (
          <img
            src={photo}
            alt={`Souvenir de voyage en ${destination.country}`}
            className="aspect-[9/10] w-full rounded-md bg-slate-100 object-cover"
            onError={() => setImageUnavailable(true)}
          />
        )}
        <div className="flex items-center justify-between px-1 pt-3">
          <div>
            <h2 className="font-serif text-2xl italic text-slate-900">
              {destination.country}
            </h2>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
              Une destination de mon carnet
            </p>
          </div>
          <span
            role="img"
            aria-label={`Drapeau ${destination.country}`}
            className="text-2xl leading-none"
          >
            {destination.flag}
          </span>
        </div>
      </article>
    </div>
  );
}
