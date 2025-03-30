document.getElementById("messageBtn").onclick = function() {
    const messageDiv = document.getElementById("specialMessage");
    
    if (messageDiv.classList.contains("hidden")) {
        messageDiv.classList.remove("hidden");
        messageDiv.innerHTML = "Taqabbalallahu minna wa minkum, shiyamana wa shiyamakum. Semoga Allah menerima amal ibadah kita semua dan mengembalikan kita dalam keadaan fitrah.";
    } else {
        messageDiv.classList.add("hidden");
        messageDiv.innerHTML = "";
    }
};