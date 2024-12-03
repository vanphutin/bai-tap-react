import Table from "react-bootstrap/Table";
import { IBook } from "../../interfaces/Book";

interface DataProps {
  data: IBook[];
}

const TableData: React.FC<DataProps> = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((book, index) => (
            <tr key={`${index}${book.bookId}`}>
              <td>{book.bookId}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.status}</td>
              <td>
                <button className="btn btn-primary">Borrow</button>
                <span className="mx-2"></span>
                <button className="btn btn-info">View</button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TableData;
