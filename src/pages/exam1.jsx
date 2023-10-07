import axios from "axios";
import { useState } from "react";

const Exams1 = () => {
  const soal = [
    {
      soal: "1. Istilah untuk perangkat lunak adalah",
      jwb1: "hardware",
      jwb2: "software",
      jwb3: "devices",
      jwb4: "perangkat",
    },
    {
      soal: "2. Diantara fungsi software adalah",
      jwb1: "Berkomunikasi dengan makhluk gaib",
      jwb2: "mengirim paket",
      jwb3: "penerjemah ke bahasa mesin",
      jwb4: "tidak ada fungsinya",
    },
    {
      soal: "3. diantara contoh software adalah",
      jwb1: "microsoft excel",
      jwb2: "RAM",
      jwb3: "Motherboard",
      jwb4: "Monitor",
    },
    {
      soal: "4. windows adalah contoh dari",
      jwb1: "software",
      jwb2: "hardware",
      jwb3: "perangkat basah",
      jwb4: "bukan apa apa",
    },
    {
      soal: "5. Soal kedua",
      jwb1: "jawaban pertama",
      jwb2: "jawaban kedua",
      jwb3: "jawaban ketiga",
      jwb4: "jawaban keempat",
    },
    {
      soal: "6. Soal kedua",
      jwb1: "jawaban pertama",
      jwb2: "jawaban kedua",
      jwb3: "jawaban ketiga",
      jwb4: "jawaban keempat",
    },
    {
      soal: "7. Soal kedua",
      jwb1: "jawaban pertama",
      jwb2: "jawaban kedua",
      jwb3: "jawaban ketiga",
      jwb4: "jawaban keempat",
    },
    {
      soal: "8. Soal kedua",
      jwb1: "jawaban pertama",
      jwb2: "jawaban kedua",
      jwb3: "jawaban ketiga",
      jwb4: "jawaban keempat",
    },
    {
      soal: "9. Soal kedua",
      jwb1: "jawaban pertama",
      jwb2: "jawaban kedua",
      jwb3: "jawaban ketiga",
      jwb4: "jawaban keempat",
    },
    {
      soal: "10. Soal kedua",
      jwb1: "jawaban pertama",
      jwb2: "jawaban kedua",
      jwb3: "jawaban ketiga",
      jwb4: "jawaban keempat",
    },
  ];
  const [nama, setNama] = useState();
  const [jawaban] = useState([]);

  const submit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < soal.length; i++) {
      jawaban.push({
        soal: soal[i].soal,
        jawaban:
          soal[i].jwb1 ===
          document.querySelector(`input[name="radio-${i + 1}"]`).value,
      });
    }

    const data = {
      nama,
      jawaban,
    };

    try {
      const response = await axios.post("http://api.example.com/exams", data);

      if (response.status === 200) {
        console.log("Data berhasil dikirim");
      } else {
        console.log("Terjadi kesalahan");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
      <button type="submit" className="btn btn-primary">
        Kirim
      </button>
      <h1 className="font-bold text-center">
        Jawablah soal dibawah ini dengan jawaban yang paling tepat!
      </h1>
      {soal.map((exam, key) => {
        return (
          <div className="hero-content" key={key}>
            <h1>{exam.soal}</h1>
            <div className="form-control w-40">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name={`radio-${key + 1}`}
                  className="radio "
                  value={exam.jwb1}
                />
                <span className="label-text">{exam.jwb1}</span>
              </label>
            </div>
            <div className="form-control w-40">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name={`radio-${key + 1}`}
                  className="radio "
                  value={exam.jwb2}
                />
                <span className="label-text">{exam.jwb2}</span>
              </label>
            </div>
            <div className="form-control w-40">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name={`radio-${key + 1}`}
                  className="radio"
                  value={exam.jwb3}
                />
                <span className="label-text">{exam.jwb3}</span>
              </label>
            </div>
            <div className="form-control w-40">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name={`radio-${key + 1}`}
                  className="radio "
                  value={exam.jwb4}
                />
                <span className="label-text">{exam.jwb4}</span>
              </label>
            </div>
          </div>
        );
      })}
    </form>
  );
};
export default Exams1;
