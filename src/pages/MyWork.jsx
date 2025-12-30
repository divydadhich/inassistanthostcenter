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
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

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
      <main className="mx-auto max-w-[390px] px-4 py-4 space-y-3">

        {workData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-gray-900">
                {item.month}
              </p>
              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                {item.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="space-y-2 text-sm text-gray-600">
              <Row label="Target" value={item.target} />
              <Row label="Duration" value={item.duration} />
              <Row label="Target Level" value={item.targetLv} />
              <Row label="Salary" value={item.salary} />
            </div>

            {/* ACTION */}
           <button
  onClick={() => setOpenSheet(true)}
  className="
    mt-4
    block
    mx-auto
    text-sm
    font-medium
    text-purple-600
    active:scale-95
  "
>
  View details →
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

/* SMALL HELPER */
const Row = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);