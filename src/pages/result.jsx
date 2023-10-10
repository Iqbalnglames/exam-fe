import { useEffect, useState } from "react";
import axios from "axios";

const Result = () => {
  const [value, setValue] = useState([]);

  const getData = async () => {
    axios.get("http://exams.test/api/imtihan").then((res) => {
      setValue(res.data.data);
    });
  };
  console.log(value);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <h1 className="text-center font-bold text-xl">Hasil Ujian</h1>
        <table className="table">
          {value.map((res, i) => {
            return (
              <>
                <thead key={i}>
                  <tr>
                    <th></th>
                    <th>Nama</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>{i + 1}</th>
                    <td>
                      {res.nama}
                    </td>
                    <td
                      className={
                        res.satu === "DOCTYPE"
                          ? "bg-green-300"
                          : "bg-red-300"
                      }>
                      {res.satu}
                    </td>
                    <td
                      className={
                        res.dua === "/head" ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.dua}
                    </td>
                    <td
                      className={
                        res.tiga === Number ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.tiga}
                    </td>
                    <td
                      className={
                        res.empat === Number ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.empat}
                    </td>
                    <td
                      className={
                        res.lima === String ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.lima}
                    </td>
                    <td
                      className={
                        res.enam === "!--" ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.enam}
                    </td>
                    <td
                      className={
                        res.tujuh === "--" ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.tujuh}
                    </td>
                    <td
                      className={
                        res.delapan === "a" ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.delapan}
                    </td>
                    <td
                      className={
                        res.sembilan === "/html" ? "bg-green-300" : "bg-red-300"
                      }>
                      {res.sembilan}
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default Result;
