import React, { ChangeEvent, useState } from "react";

type DefautCash = "usd" | "eur" | "jpy"; // Define a type for currency values

const Index = () => {
  const USD: number = 22280;
  const EUR: number = 24280;
  const JPY: number = 204;
  const [VN_dong, setVN_dong] = useState<string>("");
  const [ngoaiTe, setNgoaiTe] = useState<string>("");
  const [valueCheckRadio, setValueCheckRadio] = useState<DefautCash | "">("");
  const handleGetValue = (event: ChangeEvent<HTMLInputElement>) => {
    const valueCheckRadio: DefautCash = event.target.value as DefautCash; // Type assertion

    switch (valueCheckRadio) {
      case "usd":
        // Handle USD logic
        setValueCheckRadio("usd");
        break;
      case "eur":
        // Handle EUR logic
        setValueCheckRadio("eur");
        break;
      case "jpy":
        // Handle JPY logic
        setValueCheckRadio("jpy");
        break;
      default:
        console.log("No currency selected");
    }
  };
  const handleLogic = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nameButton: "toNgoaiTe" | "toVND" | "clear" = e.currentTarget.name as
      | "toNgoaiTe"
      | "toVND"
      | "clear";
    let result = 0;
    if (valueCheckRadio === "") {
      alert("No currency selected");
      return;
    }
    if (nameButton === "toNgoaiTe") {
      if (valueCheckRadio === "usd") {
        result = parseInt(VN_dong.toString()) / USD; // Convert VND to USD
        setNgoaiTe(`${result.toFixed(2)} USD`);
      } else if (valueCheckRadio === "eur") {
        result = parseInt(VN_dong.toString()) / EUR; // Convert VND to EUR
        setNgoaiTe(`${result.toFixed(2)} EUR`);
      } else if (valueCheckRadio === "jpy") {
        result = parseInt(VN_dong.toString()) / JPY; // Convert VND to JPY
        setNgoaiTe(`${result.toFixed(2)} JPY`);
      }
    } else if (nameButton === "toVND") {
      if (valueCheckRadio === "usd") {
        result = parseInt(VN_dong.toString()) * USD; // Convert USD to VND
        setVN_dong(`${result} VND`);
      } else if (valueCheckRadio === "eur") {
        result = parseInt(VN_dong.toString()) * EUR; // Convert EUR to VND
        setVN_dong(`${result} VND`);
      } else if (valueCheckRadio === "jpy") {
        result = parseInt(VN_dong.toString()) * JPY; // Convert JPY to VND
        setVN_dong(`${result} VND`);
      }
    } else if (nameButton === "clear") {
      setNgoaiTe("");
      setVN_dong("");
    }
  };

  return (
    <>
      <div>
        <h1>Chuyen doi ngoai te</h1>
        <h3>Chon ngoai te</h3>
        <div>
          <form>
            <div>
              <label htmlFor="usd">USD</label>
              <input
                type="radio"
                name="ngoai_te"
                id="usd"
                value="usd"
                onChange={handleGetValue}
              />
            </div>
            <div>
              <label htmlFor="eur">EUR</label>
              <input
                type="radio"
                name="ngoai_te"
                id="eur"
                value="eur"
                onChange={handleGetValue}
              />
            </div>
            <div>
              <label htmlFor="jpy">JPY</label>
              <input
                type="radio"
                name="ngoai_te"
                id="jpy"
                value="jpy"
                onChange={handleGetValue}
              />
            </div>
          </form>
        </div>
      </div>
      <div className=" form-input my-3">
        <form
          action=""
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="VN-dong w-full max-w-sm min-w-[200px] flex">
            <label htmlFor="convert" className="w-full">
              VND sang ngoại tệ
            </label>
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              id="convert"
              disabled={parseInt(ngoaiTe) > 0}
              value={VN_dong}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setVN_dong(event.target.value)
              }
            />
          </div>
          <div className="VN-dong w-full max-w-sm min-w-[200px] flex">
            <label htmlFor="convert" className="w-full">
              Ngoại tệ sang VND
            </label>
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              id="convert"
              value={ngoaiTe}
              disabled={parseInt(VN_dong) > 0}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setNgoaiTe(event.target.value)
              }
            />
          </div>
        </form>
      </div>
      <div className="handle-click">
        <button
          className="btn btn-primary"
          name="toNgoaiTe"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogic(e)}
        >
          VND sang ngoại tệ
        </button>
        <span className=" mx-3"></span>
        <button
          className="btn btn-info"
          name="toVND"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogic(e)}
        >
          Ngoại tệ sang VND
        </button>
        <span className=" mx-3"></span>
        <button
          className="btn btn-warning"
          name="clear"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLogic(e)}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Index;
