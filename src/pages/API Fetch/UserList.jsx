import React, { useEffect, useState } from "react";

const UserList = () => {
  const [data, setData] = useState([]);
  const datas = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(datas);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="p-4 m-4 border rounded shadow">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-600">{item.email}</p>
          <p className="text-gray-600">{item.phone}</p>
          <p className="text-gray-600">{item.website}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
