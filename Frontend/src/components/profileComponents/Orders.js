const Orders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th> DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={`/`} className="link">
                  1
                </a>
              </td>
              <td> Paid</td>
              <td> February 8 2022</td>
              <td>$250</td>
            </tr>
            <tr className={"alert-danger"}>
              <td>
                <a href={`/`} className="link">
                  2
                </a>
              </td>
              <td> Not Paid</td>
              <td> April 16 2022</td>
              <td>$570</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
