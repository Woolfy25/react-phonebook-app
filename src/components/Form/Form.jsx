import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/operations';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
    event.target.reset();
  };

  return (
    <form
      className="w-full flex flex-col gap-3 p-2 border-2 border-white items-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-slate-100 text-center text-lg font-semibold">
        New Contact
      </h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className="w-64 border-b-2 border-slate-100 bg-transparent text-slate-100 placeholder:text-slate-100 outline-none pb-1 pl-3 text-lg"
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={formData.number}
        onChange={handleChange}
        required
        placeholder="Phone Number"
        className="w-64 border-b-2 border-slate-100 bg-transparent text-slate-100 placeholder:text-slate-100 outline-none pb-1 pl-3 text-lg"
      />
      <button
        className="text-slate-100 font-medium px-2 py-1 rounded-xl w-56 bg-purple-500 hover:bg-purple-400"
        type="submit"
      >
        Add Contact
      </button>
    </form>
  );
};

export default Form;
