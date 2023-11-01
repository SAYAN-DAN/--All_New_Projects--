const Notes = document.querySelector("#Notes");
const main = document.querySelector("#main");

const saveNotes = function () {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  notes.forEach(function (note) {
    data.push(note.value);
  });
  // console.log(data);

  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};
Notes.addEventListener("click", function () {
  addNotes();
});

// <div class="note">
//             <div class="tool">
//                 <i class="fas fa-save"></i>
//                 <i class="fas fa-trash"></i>
//             </div>
//             <textarea></textarea>
//         </div>

const addNotes = function (text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
          <i class=" save fas fa-save"></i>
         <i class=" trash fas fa-trash"></i>
    </div>
         <textarea>${text}</textarea>
    `;

  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes();
};

(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  // console.log(lsnotes);
  if (lsnotes === null) {
    addNotes();
  } else {
    lsnotes.forEach(function (lsnotes) {
      addNotes(lsnotes);
    });
  }
})();
