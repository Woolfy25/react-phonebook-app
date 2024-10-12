import { getContacts, getFilter } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { setFilter } from "../../redux/filters/filterSlice";
import { fetchContacts } from "../../redux/operations";

import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import LogOut from "../../components/LogOut/LogOut";

const Contacts = () => {
  const [filterState, setFilterState] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (event) => {
    const value = event.target.value;
    setFilterState(value);
    dispatch(setFilter(value));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = (contacts, filter) => {
    const filterValue = filter ? filter.toLowerCase() : "";
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <>
      <Title title={"Phone Book"}></Title>
      <Form></Form>
      <div className="w-96 flex flex-col gap-8 p-10 border-2 border-white">
        <h2 className="text-xl font-semibold">Contacts List:</h2>
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold">Find contacts by name</p>
          <input
            type="text"
            name="filter"
            value={filterState}
            onChange={handleChange}
          />
        </div>
        <ul className="flex flex-col gap-3 text-base font-semibold">
          {visibleContacts.map((contact) => (
            <li
              key={contact.id}
              className="flex flex-row justify-between items-center border-2 border-white p-1 text-base font-semibold"
            >
              {contact.name}: {contact.number}
              <button
                onClick={() => handleDelete(contact.id)}
                className="border-2 border-white p-0.5 text-sm border-dashed"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <LogOut />
    </>
  );
};

export default Contacts;
