import { useEffect, useState } from "react";
import TableData from "../components/books/TableData";
import { IBook } from "../interfaces/Book";
import dataBook from "../assets/data-fake/Books.json";
import Index from "../components/whiteBlack/Index";
const BookPage = () => {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    setData(dataBook);
  }, []);
  return (
    <div className="book-page">
      <h2>TABLE DATA</h2>
      <div className="table-data">
        <TableData data={data} />
        <Index />
      </div>
    </div>
  );
};

export default BookPage;
