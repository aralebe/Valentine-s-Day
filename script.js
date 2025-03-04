function toggleEnvelope() {
    const envelope = document.querySelector(".envelope");
    const title = document.getElementById('title');

    // 切換信封開關
    envelope.classList.toggle("open");

    // 根據信封狀態切換標題
    if (envelope.classList.contains("open")) {
        title.innerText = '💖Happy Valentine\'s Day💖';
    } else {
        title.innerText = '💌 Click it! 💖';
    }
}
