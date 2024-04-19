import React, { useContext, useState, useEffect } from "react";
import { ShortcutContext } from "../store/ShortcutContext";

const ShortcutForm = ({ closeModal, editShortcut }) => {
  const { shortcuts, setShortcuts } = useContext(ShortcutContext);
  const [shortcut, setShortcut] = useState({
    title: "",
    url: "",
  });

  useEffect(() => {
    if (editShortcut) {
      setShortcut(editShortcut);
    }
  }, [editShortcut]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shortcut.title.trim() || !shortcut.url.trim()) return;
    if (editShortcut) {
      const updatedShortcuts = shortcuts.map((s) =>
        s.id === editShortcut.id ? shortcut : s
      );
      setShortcuts(updatedShortcuts);
    } else {
      setShortcuts([...shortcuts, { ...shortcut, id: Date.now() }]);
    }
    // Reset the form fields
    setShortcut({
      title: "",
      url: "",
    });
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={shortcut.title}
          placeholder="Title"
          onChange={(e) => setShortcut({ ...shortcut, title: e.target.value })}
        />
        <input
          type="text"
          value={shortcut.url}
          placeholder="URL"
          onChange={(e) => setShortcut({ ...shortcut, url: e.target.value })}
        />
        <button type="submit">{editShortcut ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ShortcutForm;
