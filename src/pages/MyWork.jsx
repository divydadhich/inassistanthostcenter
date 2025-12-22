import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkDetailsSheet from "../components/WorkDetailsSheet";

const workData = [
  {
    month: "2025-05",
    target: "1592118",
    targetLv: 11,
    duration: "06h19m",
    salary: "$140",
    status: "Settled",
  },
  {
    month: "2025-04",
    target: "3099346",
    targetLv: 14,
    duration: "02h12m",
    salary: "$274",
    status: "Settled",
  },
  {
    month: "2025-03",
    target: "3004613",
    targetLv: 14,
    duration: "01h11m",
    salary: "$296",
    status: "Settled",
  },
  {
    month: "2025-02",
    target: "3008149",
    targetLv: 14,
    duration: "02h57m",
    salary: "$296",
    status: "Settled",
  },
];

export default function MyWork() {
  const navigate = useNavigate();
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#eef2ff] overflow-x-hidden">

      {/* HEADER – FULL WIDTH + SAFE AREA */}
      <header className="bg-gradient-to-b from-[#161a3a] to-[#1e2352] text-white pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-[390px] h-14 flex items-center justify-between px-4">
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-semibold shrink-0"
          >
            &lt;
          </button>

          <h1 className="text-base font-semibold truncate">
            My Work
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-xl shrink-0"
          >
            ✕
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-[390px] px-4 py-4 space-y-4">

        {workData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-md"
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-blue-500 font-semibold text-sm">
                {item.month}
              </p>
              <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-emerald-500 text-white">
                {item.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-y-3 text-xs sm:text-sm">
              <p className="text-gray-600">
                Target:
                <span className="ml-2 text-blue-500 font-semibold">
                  {item.target}
                </span>
              </p>

              <p className="text-gray-600 text-right">
                Duration:
                <span className="ml-2 text-purple-500 font-semibold">
                  {item.duration}
                </span>
              </p>

              <p className="text-gray-600">
                Target LV:
                <span className="ml-2 text-orange-500 font-semibold">
                  {item.targetLv}
                </span>
              </p>

              <p className="text-gray-600 text-right">
                Salary:
                <span className="ml-2 text-orange-500 font-semibold">
                  {item.salary}
                </span>
              </p>
            </div>

            {/* SEE MORE */}
            <button
              onClick={() => setOpenSheet(true)}
              className="mt-4 w-full text-center text-blue-500 text-xs sm:text-sm font-medium active:scale-95"
            >
              See more details &gt;&gt;
            </button>
          </div>
        ))}
      </main>

      {/* BOTTOM SHEET */}
      <WorkDetailsSheet
        open={openSheet}
        onClose={() => setOpenSheet(false)}
      />
    </div>
  );
}
