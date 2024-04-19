import React, { useContext } from "react";
import { ShortcutContext } from "../store/ShortcutContext";

const ShortcutList = ({ editShortcut }) => {
  const { shortcuts, setShortcuts } = useContext(ShortcutContext);

  const handleDelete = (id) => {
    const updatedShortcuts = shortcuts.filter((s) => s.id !== id);
    setShortcuts(updatedShortcuts);
  };

  return (
    <ul>
      {shortcuts.map((s) => (
        <li key={s.id}>
          <span>Title: {s.title} </span>
          <span>Link: {s.url} </span>
          <button onClick={() => editShortcut(s)}>Edit</button>
          <button onClick={() => handleDelete(s.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ShortcutList;
