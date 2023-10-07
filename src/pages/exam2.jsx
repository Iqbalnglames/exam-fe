import { useState } from "react";
import Code from "../components/code";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Exams2 = () => {
  const [satu, setSatu] = useState();
  const [nama, setNama] = useState();
  const [dua, setDua] = useState();
  const [tiga, setTiga] = useState();
  const [empat, setEmpat] = useState();
  const [lima, setLima] = useState();
  const [enam, setEnam] = useState();
  const [tujuh, setTujuh] = useState();
  const [delapan, setDelapan] = useState();
  const [sembilan, setSembilan] = useState();

  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true);

  const imtihan = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("satu", satu);
    formData.append("dua", dua);
    formData.append("tiga", tiga);
    formData.append("empat", empat);
    formData.append("lima", lima);
    formData.append("enam", enam);
    formData.append("tujuh", tujuh);
    formData.append("delapan", delapan);
    formData.append("sembilan", sembilan);

    axios.post("http://exams.test/api/imtihan", formData).then(() => {
      document.getElementById("my_modal_1").showModal()
    });
  };

  return (
    <div className="hero bg-base-200">
      <div className="block">
        <h1 className="font-bold text-xl mb-2 mt-2">
          Perhatikan kode berikut!
        </h1>
        <Code />
        <form onSubmit={imtihan}>
          <div className="space-y-2">
            <h1>Masukkan Nama Antum</h1>
            <input
              onChange={(e) => setNama(e.target.value)}
              type="text"
              placeholder="Masukkan Nama anda Disini"
              className="input input-bordered w-full max-w-xs"
            />
            <a className="btn p-3 btn-primary inline ml-10" href="#my_modal_8">
              Kirim Jawaban
            </a>
          </div>
          <div className="mt-4 space-y-2 mb-4">
            <h1>Jawab di kolom bawah ini (sesuai nomor)</h1>
            <div className="block">
              1.
              <input
                type="text"
                onChange={(e) => setSatu(e.target.value)}
                placeholder="Jawab disini"
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              2.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setDua(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              3.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setTiga(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              4.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setEmpat(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              5.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setLima(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              6.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setEnam(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              7.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setTujuh(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              8.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setDelapan(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
            <div className="block">
              9.
              <input
                type="text"
                placeholder="Jawab disini"
                onChange={(e) => setSembilan(e.target.value)}
                className="input inline input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          {/* Put this part before </body> tag */}
          <div className="modal" id="my_modal_8">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Peringatan!</h3>
              <p className="py-4">Apakah sudah yakin dengan jawaban antum?</p>
              <div className="modal-action">
                <a href="#" className="btn">
                  Kembali
                </a>
                <button
                  onClick={imtihan}
                  className="btn btn-primary">
                  Yakin
                </button>
              </div>
            </div>
          </div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Info</h3>
              <p className="py-4">Jawaban berhasil dikirim</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link to={'/exams-class'} className="btn btn-error">Akhiri Ujian</Link>
                </form>
              </div>
            </div>
          </dialog>
        </form>
      </div>
    </div>
  );
};
export default Exams2;
