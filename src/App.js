import React, { useState } from "react";
import "./App.css";
import Modal from "./modal/Modal";
import { ShortcutProvider } from "./store/ShortcutContext";
import ShortcutForm from "./components/ShortcutForm";
import ShortcutList from "./components/ShortcutList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shortcutToEdit, setShortcutToEdit] = useState(null);

  const toggleModal = (shortcut = null) => {
    setShortcutToEdit(shortcut);
    setShowModal(!showModal);
  };

  return (
    <ShortcutProvider>
      <div className="App">
        <h1>Shortcut Maker</h1>
        <button onClick={() => toggleModal()}>Add Shortcut</button>
        {showModal && (
          <Modal>
            <ShortcutForm
              closeModal={toggleModal}
              editShortcut={shortcutToEdit}
            />
            <button onClick={() => toggleModal()}>Close</button>
          </Modal>
        )}
        <ShortcutList editShortcut={toggleModal} />
      </div>
    </ShortcutProvider>
  );
}

export default App;
