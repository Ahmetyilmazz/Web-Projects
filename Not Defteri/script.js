// HTML'deki öğeleri seçiyoruz.
const noteText = document.getElementById("noteText");
const addNoteBtn = document.getElementById("addNoteBtn");
const noteList = document.getElementById("noteList");

// Not ekleme işlemi //
function addNote() {
  const note = noteText.value.trim(); // Boşlukları temizleyerek "noteText" değerini al.

  if (note === "") {
    alert("Lütfen bir not giriniz"); // Boş not eklemeyi önleme
    return;
  }

  // Yeni bir liste elemanı oluştur.
  const li = document.createElement("li");
  li.textContent = note;

  // Silme Butonu ekleyelim.
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Sil";
  deleteBtn.classList.add("delete-btn"); // Stil için class ekliyoruz
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Düzenle butonu ekleyelim.
  const editBtn = document.createElement("button");
  editBtn.textContent = "Düzenle";
  editBtn.classList.add("edit-btn"); // Stil için class ekliyoruz
  editBtn.onclick = function () {
    const newNote = prompt("Yeni notu giriniz:", note);
    if (newNote !== null && newNote.trim() !== "") {
      li.textContent = newNote; // Mevcut li içeriğini güncelle
      li.appendChild(editBtn); // Düzenle butonunu tekrar ekle (yoksa kaybolur)
      li.appendChild(deleteBtn); // Sil butonunu da tekrar ekle
    }
  };

  // Butonlar için container oluştur
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  // Butonları container'a ekle
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  // Container'ı liste elemanına ekle
  li.appendChild(buttonContainer);

  // Listeye ekle.
  noteList.appendChild(li);

  // Metin kutusunu temizle
  noteText.value = "";
}

// "Ekle" butonuna tıklayınca not ekleme fonksiyonunu çalıştır
addNoteBtn.addEventListener("click", addNote);

// Enter tuşuna basıldığında da görev eklensin.
noteText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNote();
  }
});
