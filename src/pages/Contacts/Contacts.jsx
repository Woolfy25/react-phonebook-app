import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { setFilter } from '../../redux/filters/filterSlice';
import { fetchContacts } from '../../redux/operations';

import Form from '../../components/Form/Form';
import LogOut from '../../components/LogOut/LogOut';

const Contacts = () => {
  const [filterState, setFilterState] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const value = event.target.value;
    setFilterState(value);
    dispatch(setFilter(value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = (contacts, filter) => {
    const filterValue = filter ? filter.toLowerCase() : '';
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <div
      className="flex flex-col items-center justify-items-center w-80 rounded gap-8 p-2 my-auto mx-auto shadow-xl"
      style={{
        backdropFilter: 'blur(40px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <Form></Form>
      <div className="w-full flex flex-col gap-6 p-2 border-2 border-white flex flex-col items-center">
        <h2 className="text-xl font-semibold text-slate-100">
          My contacts list
        </h2>
        <input
          type="text"
          name="filter"
          value={filterState}
          onChange={handleChange}
          placeholder="Find contacts by name"
          className="w-full border-b-2 border-slate-100 bg-transparent text-slate-100 placeholder:text-slate-100 outline-none pb-1 pl-3 text-lg"
        />
        <ul className="flex flex-col gap-3 w-full text-base font-semibold h-72 overflow-auto">
          {visibleContacts.map(contact => (
            <li
              key={contact.id}
              className="flex flex-row justify-between items-center border-2 border-white p-1 text-base font-semibold text-slate-100"
            >
              <div className="flex flex-col">
                <p>{`Name: ${contact.name}`}</p>
                <p>{`Phone: ${contact.number}`}</p>
              </div>
              <button
                onClick={() => handleDelete(contact.id)}
                className="p-0.5 text-sm text-slate-100 font-light px-1 py-1 rounded-xl bg-purple-500 hover:bg-purple-400"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <LogOut />
    </div>
  );
};

export default Contacts;
