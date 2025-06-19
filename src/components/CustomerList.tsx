import React, { useEffect, useState } from "react";

type Customer = {
  id: number;
  first_name: string;
  surname: string;
  middle_name: string;
  date_of_birth: string;
  home_address: string;
  date_of_registration: string;
  _334942894723: boolean;
};

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Customer>>({});

  const API_URL = "https://tastybites-backend-zldp.onrender.com/api/customers/";

  const fetchCustomers = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Fetch customers error:", err));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = (id: number) => {
    fetch(`${API_URL}${id}`, { method: "DELETE" })
      .then(() => fetchCustomers())
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div>
      <h1 style={{ color: "orange" }}>TastyBites Customer Records</h1>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.first_name} {customer.surname}{" "}
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
