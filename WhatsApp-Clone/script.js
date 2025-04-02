function openTab(event, tabId) {
    // Tüm tab içeriklerini gizle
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Tüm tab butonlarını pasif yap
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Seçilen tab içeriğini göster
    document.getElementById(tabId).classList.add('active');

    // Seçilen tab butonunu aktif yap
    event.currentTarget.classList.add('active');
}