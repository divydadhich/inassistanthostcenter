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
];

export default function MyWork() {
  const navigate = useNavigate();
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <header className="bg-[#1e2352] text-white">
        <div className="h-14 flex items-center justify-between px-4 max-w-107.5 mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-xl font-semibold"
          >
            &lt;
          </button>

          <h1 className="text-base font-semibold">
            Work
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-xl"
          >
            ✕
          </button>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <main className="px-4 py-4 space-y-4 max-w-107.5 mx-auto">

        {workData.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md p-4"
          >
            {/* LEFT BLUE BAR */}
            <span className="absolute left-0 top-3 bottom-3 w-1 bg-blue-500 rounded-full" />

            {/* TOP ROW */}
            <div className="flex items-center justify-between mb-4 pl-3">
              <p className="text-sm font-semibold text-gray-900">
                {item.month}
              </p>

              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                {item.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="space-y-2 text-sm text-gray-600 pl-3">
              <Row label="Target" value={item.target} />
              <Row label="Duration" value={item.duration} />
              <Row label="Target Level" value={item.targetLv} />
              <Row label="Salary" value={item.salary} />
            </div>

            {/* VIEW DETAILS */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setOpenSheet(true)}
                className="
                  text-sm
                  font-medium
                  text-purple-600
                  hover:underline
                  active:scale-95
                  transition
                "
              >
                View details →
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* ===== BOTTOM SHEET ===== */}
      <WorkDetailsSheet
        open={openSheet}
        onClose={() => setOpenSheet(false)}
      />
    </div>
  );
}

/* ===== HELPER ROW ===== */
const Row = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);
