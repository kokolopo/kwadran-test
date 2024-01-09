import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());

  const [tahun, setTahun] = useState(0);
  const [bulan, setBulan] = useState(0);
  const [hari, setHari] = useState(0);
  const [zodiac, setZodiac] = useState("");

  useEffect(() => {
    determineZodiacSign(date);
  }, []);

  const calculateAge = (birthdate) => {
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

    setTahun(ageYears);
    setBulan(ageMonths);
    setHari(ageDays);

    // return {
    //   years: ageYears,
    //   months: ageMonths,
    //   days: ageDays,
    // };
  };

  const determineZodiacSign = (birthdate) => {
    const birthDate = new Date(birthdate);

    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // Bulan dimulai dari 0 (Januari) hingga 11 (Desember)

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      setZodiac("Aries");
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      setZodiac("Taurus");
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      setZodiac("Gemini");
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      setZodiac("Cancer");
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      setZodiac("Leo");
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      setZodiac("Virgo");
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      setZodiac("Libra");
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      setZodiac("Scorpio");
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      setZodiac("Sagittarius");
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      setZodiac("Capricorn");
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      setZodiac("Aquarius");
    } else {
      setZodiac("Pisces");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir, misalnya kirim ke server
    console.log("Form Data:");
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-7 justify-stretch items-center w-full">
          <TextInput value={name} setter={setName} />
          <DateInput
            value={date}
            setter={setDate}
            calculateAge={calculateAge}
            zodiac={determineZodiacSign}
          />

          <Button />
        </div>
      </form>

      {/* result */}
      <div className="flex flex-col items-center justify-start w-full mt-24 text-xl text-left">
        <div className="">Hallo {name}</div>
        <div className="">Usia anda saat ini adalah :</div>
        <div>{tahun} Tahun</div>
        <div>{bulan} Bulan</div>
        <div>{hari} Hari</div>

        <div>Bintang anda adalah</div>
        <div>{zodiac}</div>
      </div>
    </>
  );
}

export default App;
