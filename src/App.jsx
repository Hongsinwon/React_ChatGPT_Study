import { useState } from "react";
import { CallGPT } from "./api/gpt";

function App() {
  const [data, setData] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoding(true);
      const message = await CallGPT();
      setData(message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoding(false);
    }
  };

  return (
    <>
      <button onClick={handleClickAPICall}>GPT APU call</button>
      <div> data : {data}</div>
      <div> isLoding : {isLoding ? "로딩중..." : "로딩 끝"}</div>
    </>
  );
}

export default App;
