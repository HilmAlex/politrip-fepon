import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Ticket } from "@components";
import * as XLSX from "xlsx";
import { PDFTicket } from "components";
import dynamic from "next/dynamic";
import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";

const Home: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // const [instance, update] = usePDF({ document: PDFTicket } as any);

  const [tickets, setTickets] = useState([]);
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [number, setNumber] = useState(1);

  const handleInput = (e: any) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const bstr = event.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    };
    reader.readAsBinaryString(file);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleMovie = (event: any) => {
    setMovie(event.target.value);
  };
  
  const handleNumber = (event: any) => {
    setNumber(parseInt(event.target.value));
  };

  const handleDownload = (event: any) => {
    setNumber((prevNumber) => prevNumber +1)
  }

  // if (instance.loading) return <div>Loading ...</div>;

  // if (instance.error) return <div>Something went wrong</div>;

  return (
    <div className="App">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleName}
          id="name"
          placeholder="Alex Padilla"
        />
      </div>
      <div>
        <label htmlFor="movie">Movie</label>
        <input
          type="text"
          onChange={handleMovie}
          id="movie"
          placeholder="Coco"
        />
      </div>
      <div>
        <label htmlFor="number">number</label>
        <input
          type="number"
          value={number} onChange={handleNumber}
          id="number"
          placeholder="0"
        />
      </div>
      <div>
        <label htmlFor="data">Assistance</label>
        <input type="file" onChange={handleInput}/>
      </div>
      {/* <Ticket name="Alex Padilla" movie="Asdasd asdasd asdasdasd asd asd d" /> */}
      {/* {isClient && (
        <PDFViewer
          style={{width: "100%", height: "90vh"}}
        >
          <PDFTicket name="Alex Padilla" movie="Asdasd asdasd asdasdasd asd asd d" />
        </PDFViewer>
      )} */}

      {isClient && (
        // <a ref={instance.url} download={`asistencia-${movie}-${name}.pdf`}>
        //   Download
        // </a>
        <PDFDownloadLink
          document={<PDFTicket name={name} movie={movie} number={number}/>}
          fileName={`asistencia-${movie}-${name}.pdf`}
        >
          <button onClick={handleDownload}>Download Now</button>
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default Home;
