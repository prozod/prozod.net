"use client";
import { hasFlag } from "country-flag-icons";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useEffect, useState } from "react";

function Statistics() {
  const country = "Romania";
  const country_initials = "RO";
  const continent_capital = "Europe/Bucharest";
  const [currDate, setCurrDate] = useState("");
  const flag =
    hasFlag(country_initials) && getUnicodeFlagIcon(country_initials);

  useEffect(() => {
    const updateDate = setInterval(() => {
      setCurrDate(
        new Date().toLocaleString(`en-${country_initials}`, {
          dateStyle: "medium",
          timeStyle: "medium",
          timeZone: `${continent_capital}`,
        })
      );
    }, 1000);

    return () => clearInterval(updateDate);
  }, []);
  return (
    <>
      <div className="font-jetbrains dark:text-white/90 text-sm">
        {currDate ? (
          <p>
            Currently in {flag} {country} - {currDate}
          </p>
        ) : (
          <p className="animate-pulse">🌎 Located in...</p>
        )}
      </div>
    </>
  );
}
export default Statistics;
