// app/search/page.tsx
import fs from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

export const dynamic = "force-dynamic"; // để mỗi query render khác nhau

type Row = { Asin?: string; Title?: string; ShortDes?: string; URLIMG?: string };

let CACHE: Row[] | null = null;

async function loadCSV(csvRelPath = "data/products.csv"): Promise<Row[]> {
  if (CACHE) return CACHE;
  const filePath = path.join(process.cwd(), csvRelPath);
  const raw = await fs.readFile(filePath);
  const rows: Row[] = parse(raw, {
    columns: true,
    skip_empty_lines: true,
    bom: true,
    relax_column_count: true,
  });
  CACHE = rows;
  return rows;
}

function filterByTitle(rows: Row[], q: string) {
  const kw = q.toLowerCase();
  return rows.filter(r => (r.Title ?? "").toLowerCase().includes(kw));
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const q = (searchParams.query ?? "").trim();
  const all = await loadCSV();
  const results = q ? filterByTitle(all, q) : [];

  return (
    <main className="my-[50px] sm:my-[72px]">
      <div className="max-w-frame mx-auto px-4 xl:px-0 mb-6">
        <h1 className="text-2xl font-semibold">Search</h1>
        {q ? (
          <p className="text-black/60 mt-1">
            Results for <span className="italic">“{q}”</span>: {results.length} item
            {results.length !== 1 ? "s" : ""}
          </p>
        ) : (
          <p className="text-black/60 mt-1">
            Type a product name in the search bar.
          </p>
        )}
      </div>

      {/* Không có kết quả */}
      {q && results.length === 0 && (
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <div className="rounded-2xl border border-black/10 p-6 sm:p-8 mb-10">
            <h2 className="text-lg font-medium">No results</h2>
            <p className="text-black/60 mt-1">Try a different keyword.</p>
          </div>
        </div>
      )}

      {/* Kết quả */}
      {results.length > 0 && (
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((r, idx) => (
              <li
                key={(r.Asin ?? "") + idx}
                className="border border-black/10 rounded-2xl p-3 sm:p-4 hover:shadow-md transition"
              >
                <div className="aspect-[4/5] bg-[#F7F7F7] rounded-xl overflow-hidden mb-3">
                  {r.URLIMG ? (
                    // Dùng <img> để khỏi cấu hình next/image domains
                    <img
                      src={r.URLIMG}
                      alt={r.Title ?? "Image"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/40 text-sm">
                      No image
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-medium line-clamp-2">
                  {r.Title ?? "Untitled"}
                </h3>
                {r.ShortDes && (
                  <p className="text-xs text-black/60 mt-1 line-clamp-2">
                    {r.ShortDes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gợi ý khi chưa nhập query: show vài item đầu */}
      {!q && all.length > 0 && (
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {all.slice(0, 12).map((r, idx) => (
              <li
                key={(r.Asin ?? "") + "_all_" + idx}
                className="border border-black/10 rounded-2xl p-3 sm:p-4"
              >
                <div className="aspect-[4/5] bg-[#F7F7F7] rounded-xl overflow-hidden mb-3">
                  {r.URLIMG ? (
                    <img
                      src={r.URLIMG}
                      alt={r.Title ?? "Image"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-black/40 text-sm">
                      No image
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-medium line-clamp-2">
                  {r.Title ?? "Untitled"}
                </h3>
                {r.ShortDes && (
                  <p className="text-xs text-black/60 mt-1 line-clamp-2">
                    {r.ShortDes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
