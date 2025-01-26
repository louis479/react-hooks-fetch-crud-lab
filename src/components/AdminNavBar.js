import React from "react";

function AdminNavBar({ onChangePage, page }) {
  return (
    <nav>
      <button
        onClick={() => onChangePage("Form")}
        style={{ fontWeight: page === "Form" ? "bold" : "normal" }}
      >
        New Question
      </button>
      <button
        onClick={() => onChangePage("List")}
        style={{ fontWeight: page === "List" ? "bold" : "normal" }}
      >
        View Questions
      </button>
    </nav>
  );
}

export default AdminNavBar;
