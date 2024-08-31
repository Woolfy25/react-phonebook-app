import React from 'react';
import style from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
    Notify.success(
      `${filteredContact.name} was successfully deleted from your contacts!`,
      { position: 'center-top' }
    );
  };

  return (
    <div>
      <li className={style.item}>
        <p>{filteredContact.name}:</p>
        <p className={style.contactAlign}>{filteredContact.number}</p>
        <button className={style.buttonDelete} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
