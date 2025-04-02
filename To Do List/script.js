// HTML elemanlarını seçiyoruz
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


// Görev Ekleme Fonksiyonu Oluşturalım
function addTask () {
    const taskText = taskInput.value.trim(); // Boşlukları temizle.

    if (taskText === "") {
        alert ("Lütfen bir görev giriniz !!");
        return;
    }

    // Yeni Liste Elemanı Oluşturalım.
    const li = document.createElement("li");
    li.textContent = taskText;

    // Tamamlama butonu ekleyelim.
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Tamamlandı";
    completeBtn.style.backgroundColor = "blue";
    completeBtn.style.color = "white"
    completeBtn.style.marginLeft = "10px"
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    // Silme Butonu Ekleyelim.
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.marginLeft = "5px"
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Butonları liste elemanına ekleyelim
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    console.log(li.appendChild);

    // Listeye ekleyelim.
    taskList.appendChild(li);

    // İnputu temizleyelim.
    taskInput.value = "";
}

// Butona tıklanınca görev ekleyelim.
addTaskBtn.addEventListener("click",addTask);

// Enter tuşuna basıldığında da görev eklensin.
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
