import Image from "next/image";

export const metadata = {
  title: "Gold Rate Today in Pakistan - Live 24K, 22K Price",
  description:
    "Live gold rate today in Pakistan with 24K, 22K, 21K, 18K prices, per tola and per gram, plus market summary and converter.",
  alternates: {
    canonical: "https://todaypriceinpakistan.com/gold-rate-today",
  },
};

const karatRatios = {
  "24K": 1,
  "22K": 0.9167,
  "21K": 0.875,
  "18K": 0.75,
} as const;

const baseUnits = [
  { key: "tola", label: "Per Tola (Pakistan)", value: 495660.04 },
  { key: "gram", label: "Per Gram", value: 39652.8 },
  { key: "10g", label: "Per 10 Grams", value: 396528.04 },
  { key: "kg", label: "Per Kilogram", value: 39715432.71 },
  { key: "masha", label: "Per Masha", value: 38528.69 },
  { key: "ratti", label: "Per Ratti", value: 7226.45 },
  { key: "grain", label: "Per Grain", value: 2470.58 },
  { key: "tael", label: "Tael (Hong Kong)", value: 1501223.02 },
];

const _marketSummary = [
  { label: "USD → PKR", value: "278.34" },
  { label: "Gold Ounce (USD)", value: "$4,438.06" },
  { label: "Today High", value: "$4,466.69" },
  { label: "Today Low", value: "$4,438.06" },
  { label: "Updated", value: "28 May 2026, 01:13 AM" },
];

const _converterPresets = [
  { label: "1 Tola", value: "1 tola" },
  { label: "10 Grams", value: "10 grams" },
  { label: "1 Gram", value: "1 gram" },
  { label: "1 KG", value: "1 kg" },
];

function HeroCard() {
  return (
    <div className="shrink-0 rounded-2xl border border-white/10 bg-[#151a22] p-4">
      <p className="text-white/50 text-xs uppercase">24K per tola</p>
      <p className="mt-2 font-semibold text-2xl text-[#f6d58a]">Rs. 495,660</p>
      <p className="mt-1 text-emerald-300 text-xs">+0.24% today</p>
    </div>
  );
}

const mockupImage =
  "data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='520' viewBox='0 0 1200 520'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23131a23'/><stop offset='1' stop-color='%231b2230'/></linearGradient></defs><rect width='1200' height='520' fill='url(%23g)'/><rect x='60' y='60' width='520' height='160' rx='24' fill='%231e2634' stroke='%23313945'/><rect x='640' y='60' width='500' height='340' rx='24' fill='%231e2634' stroke='%23313945'/><rect x='60' y='250' width='520' height='220' rx='24' fill='%231e2634' stroke='%23313945'/><rect x='90' y='90' width='200' height='16' rx='8' fill='%23f6d58a'/><rect x='90' y='120' width='260' height='12' rx='6' fill='%23c4c8cf'/><rect x='90' y='320' width='380' height='12' rx='6' fill='%23c4c8cf'/><rect x='90' y='350' width='300' height='12' rx='6' fill='%23c4c8cf'/><rect x='90' y='380' width='260' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='100' width='420' height='18' rx='9' fill='%23f6d58a'/><rect x='680' y='140' width='360' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='180' width='300' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='220' width='280' height='12' rx='6' fill='%23c4c8cf'/><rect x='680' y='260' width='240' height='12' rx='6' fill='%23c4c8cf'/></svg>";

export default function GoldRateTodayPage() {
  return (
    <div className="container mx-auto space-y-10 pt-10 text-white">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="font-semibold text-4xl leading-tight md:text-5xl">
            Gold Price
          </h2>
          <p className="text-muted-foreground text-sm">
            Last updated May 27, 2026, 01:13 AM
          </p>
          <p className="max-w-xl text-base text-white/70">
            Real-time 24K, 22K, 21K, and 18K gold prices across tola, gram, and
            kilogram.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <HeroCard />
            <HeroCard />
            <HeroCard />
            <HeroCard />
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          Ad
        </div>
      </section>
      <section className="grid gap-6">
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-semibold text-lg">Gold Rate by Karat</h3>
            <div className="flex gap-2 text-white/60 text-xs">
              <span className="rounded-full border border-white/10 px-3 py-1">
                PKR
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Updated now
              </span>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-160 text-left text-sm">
              <thead className="text-white/50 text-xs uppercase">
                <tr>
                  <th className="pr-6 pb-3">Unit</th>
                  {Object.keys(karatRatios).map((karat) => (
                    <th className="pr-6 pb-3" key={karat}>
                      {karat}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-white/80">
                {baseUnits.map((unit) => (
                  <tr className="border-white/5 border-t" key={unit.key}>
                    <td className="py-4 pr-6 font-medium text-white">
                      {unit.label}
                    </td>
                    {Object.values(karatRatios).map((ratio, index) => (
                      <td className="py-4 pr-6" key={`${unit.key}-${index}`}>
                        Rs. {Math.round(unit.value * ratio).toLocaleString()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          <h3 className="font-semibold text-lg">Trend (Last 7 Days)</h3>
          <p className="mt-2 text-sm text-white/60">
            Use this space for a lightweight line chart or sparkline.
          </p>
          <div className="mt-6 h-40 rounded-2xl border border-white/10 bg-linear-to-r from-[#1b202b] via-[#232a38] to-[#1b202b]" />
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          <h3 className="font-semibold text-lg">Gold Buying Guide</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>• Best time to buy gold in Pakistan is early morning.</li>
            <li>• 24K is purest, 22K is most used for jewelry.</li>
            <li>• Always check per tola and per gram before purchase.</li>
            <li>• Compare with USD → PKR to spot global movements.</li>
          </ul>
        </div>
      </section>
      <section className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg">Coming Next</h3>
            <p className="mt-2 text-sm text-white/60">
              Expand to silver, petrol, and currency rates using the same
              layout.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70 text-xs">
              Silver Rate Today
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70 text-xs">
              Dollar Rate Today
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70 text-xs">
              Petrol Prices
            </span>
          </div>
        </div>
      </section>
      <section className="flex gap-5 *:flex-1">
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          <h3 className="font-semibold text-lg">Quick Converter</h3>
          <p className="mt-2 text-sm text-white/60">
            Convert between tola, gram, and kg in PKR.
          </p>
          <div className="mt-5 space-y-3">
            <input
              className="w-full rounded-2xl border border-white/10 bg-[#0f131b] px-4 py-3 text-sm text-white outline-none"
              defaultValue={1}
              type="number"
            />
            <select className="w-full rounded-2xl border border-white/10 bg-[#0f131b] px-4 py-3 text-sm text-white">
              <option>Per Tola (Pakistan)</option>
              <option>Per Gram</option>
              <option>Per 10 Grams</option>
              <option>Per Kilogram</option>
            </select>
            <div className="rounded-2xl border border-[#c8972a]/40 bg-[#1a1f29] px-4 py-3 text-[#f6d58a] text-sm">
              Estimated value: Rs. 495,660
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Market Summary</h3>
            <span className="text-white/50 text-xs">Global spot</span>
          </div>
          <div className="mt-6 grid gap-4">
            {_marketSummary.map((item) => (
              <div
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                key={item.label}
              >
                <span className="text-sm text-white/60">{item.label}</span>
                <span className="font-semibold text-sm text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="rounded-3xl border border-white/10 bg-[#151a22] p-6">
        <h3 className="font-semibold text-lg">Visual Mockup</h3>
        <p className="mt-2 text-sm text-white/60">
          Placeholder image that represents the UI style for sharing or ads.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0f131b]">
          <Image
            alt="Gold rate UI mockup preview"
            className="w-full object-cover"
            height={520}
            src={mockupImage}
            unoptimized
            width={1200}
          />
        </div>
      </section>
    </div>
  );
}
