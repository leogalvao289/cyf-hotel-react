import React from "react";
import moment from "moment";
moment().format();

const SearchResults = props => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, index) => {
            const checkOut = moment(item.checkOutDate, "DD-MM-YYYY");
            const checkIn = moment(item.checkInDate, "DD-MM-YYYY");

            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{checkOut.diff(checkIn, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
