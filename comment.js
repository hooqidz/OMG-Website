function submitForm() {
  var name = document.getElementById("erin-name").value;
  var message = document.getElementById("erin-message").value;

  if (name.trim() !== "" && message.trim() !== "") {
    var guestbookMessages = document.getElementById("erin-komentar");
    var newMessage = document.createElement("p");
    newMessage.textContent = name + ": " + message;
    guestbookMessages.appendChild(newMessage);

    // Bersihkan formulir setelah pengiriman pesan
    document.getElementById("erin-guess-book").reset();
  } else {
    alert("Mohon untuk memasukkan Nama dan Komentar!");
  }
}
