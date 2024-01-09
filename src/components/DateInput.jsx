import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ value, setter, calculateAge, zodiac }) => {
  //   const [date, setDate] = useState(new Date());

  const hitungUsia = (birthdate) => {
    // Mendapatkan tanggal hari ini
    const today = new Date();

    // Mendapatkan tanggal lahir dari parameter
    const birthDate = new Date(birthdate);

    // Menghitung selisih tahun, bulan, dan hari
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Jika hari lahir lebih besar dari hari ini, kurangkan satu bulan
    if (ageDays < 0) {
      ageMonths--;
      // Hitung ulang jumlah hari
      ageDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        birthDate.getDate()
      ).getDate();
    }

    // Jika bulan lahir lebih besar dari bulan ini, kurangkan satu tahun
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12; // Hitung ulang jumlah bulan
    }

    return {
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    };
  };

  //   console.log(date);
  return (
    <div className="flex flex-row space-x-4 items-center">
      <label className="text-xl font-semibold">Tanggal Lahir</label>
      <DatePicker
        selected={value}
        onChange={(value) => {
          setter(value);
          calculateAge(value);
          zodiac(value);
          //   let res = calculate(date);
          //   console.log(res);
        }}
      />
    </div>
  );
};

export default DateInput;
