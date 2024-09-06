const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalYes = document.getElementById('modalYes');
const modalCancel = document.getElementById('modalCancel');
const audio = document.getElementById("myAudio");

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
});


yesButton.addEventListener('click', () => {
    // Set teks pesan pertama dan tampilkan modal
    modalMessage.textContent = 'Apakah kamu yakin ingin melihat pesan ini?';
    modal.style.display = 'flex';

    // Reset event listener sebelumnya
    modalYes.onclick = null;
    modalCancel.onclick = null;

    // Tambahkan event listener baru
    modalYes.onclick = () => {
        // Aksi jika Yes ditekan
        handleYesResponse();
    };

    modalCancel.onclick = () => {
        // Tutup modal
        modal.style.display = 'none';
    };
});

noButton.addEventListener('click', () => {
    // Ubah isi pesan modal saat tombol 'Gak' ditekan
    modalMessage.textContent = 'Yah, kamu gak mau melihat pesannya...';
    modal.style.display = 'flex';

    // Set event handler untuk tombol Yes dan Cancel setelah pesan muncul
    modalYes.onclick = () => {
        modal.style.display = 'none';
    };

    modalCancel.onclick = () => {
        modal.style.display = 'none';
    };
});

// Fungsi yang dijalankan saat Yes ditekan
function handleYesResponse() {
    // Set pesan baru untuk kondisi percabangan berikutnya
    modalMessage.textContent = 'Apakah kamu masih ingin melanjutkan?';

    // Update event listener Yes dan Cancel
    modalYes.onclick = () => {
        modalMessage.textContent = 'Terima kasih sudah melanjutkan!';
        
        // Setelah menampilkan pesan terakhir, kita bisa sembunyikan tombol Cancel
        modalCancel.style.display = 'none';
        
        // Tambahkan listener untuk menutup modal setelah selesai
        modalYes.onclick = () => {
            modal.style.display = 'none';
        };
    };

    modalCancel.onclick = () => {
        modalMessage.textContent = 'Oke, kita berhenti di sini.';
        
        // Ubah kembali agar tombol Cancel bisa ditampilkan lagi
        modalCancel.style.display = 'block';
        
        modalYes.onclick = () => {
            modal.style.display = 'none';
        };
    };
}
