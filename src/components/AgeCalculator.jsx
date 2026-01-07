'use client';

import { useState } from "react";
import { Toaster, toast } from "sonner";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      toast.error("Please select your birth date");
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += prevMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
    toast.success("Age calculated successfully");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-black via-gray-900 to-emerald-900 relative overflow-hidden">

      {/* Sonner Toaster */}
 <Toaster
  position="top-right"
  // closeButton
  // theme="dark"
  toastOptions={{
    duration: 3500,
    classNames: {
      toast:
        "group relative overflow-hidden rounded-2xl " +
        "border border-emerald-400/30 " +
        "bg-yellow-300 !important " +
        "backdrop-blur-xl shadow-2xl shadow-emerald-500/30",

      title:
        "text-emerald-300 font-semibold tracking-wide",

      description:
        "text-emerald-200 text-sm leading-relaxed",

      icon:
        "text-emerald-400",

      closeButton:
        "absolute right-3 top-3 rounded-lg p-1.5 text-emerald-400 " +
        "hover:bg-emerald-500/10 hover:text-emerald-300 transition",
    },
  }}
/>



      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_60%)]" />

      {/* Main Content */}
      <div className="relative flex items-center justify-center flex-grow px-4">
        <div className="w-full max-w-md rounded-3xl p-8 backdrop-blur-2xl bg-black/50 border border-emerald-400/30 shadow-2xl shadow-emerald-500/30">

          <p className="text-center text-xl sm:text-3xl font-extrabold mb-2
            bg-gradient-to-r from-emerald-300 via-green-600 to-teal-400
            bg-clip-text text-transparent tracking-wider capitalize">
            Age Calculator
          </p>

          <p className="text-center text-emerald-300/80 mb-8 text-sm">
            Calculate your exact age in years, months, and days
          </p>

          <div className="mb-6">
            <label className="block text-emerald-200 mb-2 text-sm font-medium">
              Birth Date:
            </label>

            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/70 text-emerald-200
                border border-emerald-500/40 focus:outline-none focus:ring-2
                focus:ring-emerald-400 transition-all duration-200"
            />
          </div>

          <button
            onClick={calculateAge}
            className="w-full py-3 rounded-xl font-semibold text-black
              bg-gradient-to-r from-emerald-400 to-green-500
              hover:from-emerald-300 hover:to-green-400
              shadow-lg shadow-emerald-500/40 active:scale-[0.98]
              transition-all duration-300"
          >
            Calculate Age
          </button>

          {age && (
            <div className="mt-8 p-6 rounded-2xl text-center relative overflow-hidden
              border border-emerald-400/30
              bg-gradient-to-br from-black/60 via-gray-900/70 to-emerald-900/60">

              <p className="text-[15px] sm:text-[18px] text-emerald-100 leading-relaxed">
                You are
                <span className="mx-1 font-bold text-emerald-400">{age.years}</span>
                years,
                <span className="mx-1 font-bold text-emerald-400">{age.months}</span>
                months, and
                <span className="mx-1 font-bold text-emerald-400">{age.days}</span>
                days old.
              </p>

              <div className="absolute inset-0 bg-gradient-to-t
                from-transparent via-emerald-500/10 to-transparent
                animate-pulse pointer-events-none" />
            </div>
          )}
        </div>
      </div>

      <footer className="relative text-center text-emerald-400/80 text-sm py-4 border-t border-emerald-500/20">
        © {new Date().getFullYear()} Age Calculator. All rights reserved.
      </footer>
    </div>
  );
};

export default AgeCalculator;
