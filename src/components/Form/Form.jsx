import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/operations";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact(formData));
    setFormData({ name: "", number: "" });
    event.target.reset();
  };

  return (
    <form
      className="w-96 flex flex-col gap-4 p-10 border-2 border-white"
      onSubmit={handleSubmit}
    >
      <label className="text-base flex flex-col justify-items-center font-medium gap-2">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="text-base flex flex-col justify-items-center font-medium gap-2">
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </label>
      <button
        className="text-base font-medium px-2 py-1 border-2 border-white"
        type="submit"
      >
        Add Contact
      </button>
    </form>
  );
};

export default Form;
