import { ref } from "vue";

const cards: Card[] = [
    {
        id: 1,
        title: "Belajar JavaScript Dasar",
        description:
            "Pengenalan JavaScript dari level paling dasar, mulai dari cara mendeklarasikan variabel, memahami berbagai macam tipe data primitif maupun non-primitif, hingga menggunakan operator aritmatika dan logika dalam konteks nyata. Pada tahap ini kamu juga akan belajar bagaimana JavaScript dieksekusi di browser dan bagaimana menulis kode yang rapi serta mudah dibaca untuk fondasi pemrograman ke tahap selanjutnya.",
        tags: ["javascript", "beginner", "dasar"]
    },
    {
        id: 2,
        title: "Mengenal React Components",
        description:
            "Pendalaman konsep komponen di React, baik functional component maupun class component, serta bagaimana keduanya digunakan untuk membangun UI yang reusable dan terstruktur. Kamu akan mempelajari cara mengelola state, mengoper props antar komponen, dan memahami siklus hidup komponen agar dapat membangun aplikasi frontend yang skalabel dan mudah dirawat.",
        tags: ["react", "frontend", "components"]
    },
    {
        id: 3,
        title: "Styling dengan CSS Modern",
        description:
            "Belajar menggunakan fitur-fitur modern CSS seperti Flexbox dan CSS Grid untuk membuat layout yang responsif di berbagai ukuran layar. Materi juga mencakup teknik pengaturan spacing, alignment, dan layering elemen, sehingga tampilan website tidak hanya menarik tetapi juga konsisten di berbagai perangkat, termasuk desktop, tablet, dan smartphone.",
        tags: ["css", "layout", "responsive"]
    },
    {
        id: 4,
        title: "Dasar Git & Version Control",
        description:
            "Memahami konsep version control menggunakan Git mulai dari inisialisasi repository, membuat commit yang jelas, hingga mengelola cabang (branch) untuk pengembangan fitur baru. Kamu juga akan diajak untuk berkenalan dengan workflow kolaborasi seperti pull request dan code review agar bisa bekerja efektif dalam tim pengembangan perangkat lunak.",
        tags: ["git", "version-control", "workflow"]
    },
    {
        id: 5,
        title: "REST API untuk Pemula",
        description:
            "Pengantar konsep RESTful API yang menjelaskan bagaimana client dan server berkomunikasi menggunakan HTTP method seperti GET, POST, PUT, dan DELETE. Di dalamnya akan dibahas struktur endpoint, penggunaan status code, serta format data JSON, sehingga kamu dapat mengonsumsi maupun merancang API yang konsisten, mudah dipahami, dan mudah diintegrasikan dengan berbagai platform.",
        tags: ["api", "backend", "rest"]
    },
    {
        id: 6,
        title: "Mengenal Node.js",
        description:
            "Pengenalan Node.js sebagai runtime JavaScript di sisi server yang memungkinkan kamu menjalankan JavaScript di luar browser. Kamu akan mempelajari arsitektur event-driven, konsep non-blocking I/O, serta bagaimana membangun server HTTP sederhana dan berinteraksi dengan filesystem. Materi ini menjadi fondasi penting sebelum masuk ke framework backend yang lebih kompleks.",
        tags: ["nodejs", "backend", "javascript"]
    },
    {
        id: 7,
        title: "Tips Debugging di Browser",
        description:
            "Belajar memanfaatkan fitur-fitur yang tersedia di browser DevTools untuk melacak error, membaca log, menganalisis network request, hingga memeriksa DOM dan style secara real-time. Dengan memahami teknik debugging yang sistematis, kamu bisa menghemat banyak waktu saat mencari sumber masalah dan meningkatkan kualitas kode yang kamu tulis.",
        tags: ["debugging", "browser", "devtools"]
    },
    {
        id: 8,
        title: "Optimasi Performa Web",
        description:
            "Membahas berbagai strategi untuk meningkatkan performa website, mulai dari optimasi ukuran aset seperti gambar dan font, pemanfaatan caching, hingga teknik lazy loading. Selain itu, kamu juga akan mempelajari bagaimana mengukur performa menggunakan tool seperti Lighthouse sehingga keputusan optimasi yang diambil bisa lebih terukur dan berdampak nyata bagi pengguna.",
        tags: ["performance", "web", "optimization"]
    },
    {
        id: 9,
        title: "Membuat Form Interaktif",
        description:
            "Fokus pada pembuatan form HTML yang tidak hanya berfungsi, tetapi juga ramah pengguna dan aman. Kamu akan mempelajari teknik validasi input di sisi client, penanganan state form, menampilkan pesan error yang jelas, serta cara mengirim data ke server. Hasilnya, form yang kamu buat akan terasa lebih responsif dan minim kesalahan pengisian.",
        tags: ["forms", "html", "validation"]
    },
    {
        id: 10,
        title: "Konsep Responsive Design",
        description:
            "Pendalaman prinsip desain responsif yang memungkinkan satu layout website beradaptasi otomatis terhadap berbagai ukuran layar. Materi meliputi penggunaan media query, unit fleksibel seperti %, rem, dan vw/vh, serta pola layout umum yang sering dipakai di proyek nyata. Dengan memahami konsep ini, kamu dapat memastikan pengalaman pengguna yang konsisten di semua device.",
        tags: ["responsive", "design", "css"]
    },
    {
        id: 11,
        title: "Pengantar TypeScript",
        description:
            "Belajar menambahkan sistem tipe statis di atas JavaScript menggunakan TypeScript untuk mengurangi bug dan meningkatkan kejelasan struktur kode. Kamu akan mempelajari cara mendefinisikan tipe untuk variabel, fungsi, dan objek, serta bagaimana memanfaatkan interface dan generics. Pendekatan ini membantu tim menjaga kualitas kode seiring bertambahnya skala aplikasi.",
        tags: ["typescript", "javascript", "types"]
    },
    {
        id: 12,
        title: "Membangun Project Mini",
        description:
            "Menerapkan semua konsep yang telah dipelajari dengan membangun sebuah project mini yang menggabungkan HTML, CSS, dan JavaScript dalam satu alur kerja nyata. Di sini kamu akan menyusun struktur folder, mengelola asset, menulis logika interaktif, serta melakukan sedikit optimasi agar project terasa siap dipublikasikan. Sesi ini dirancang untuk mengasah kemampuan problem solving dan kemandirian dalam ngoding.",
        tags: ["project", "frontend", "practice"]
    }
];


const selectedCard = ref<Card | null>(null);

export {
    cards,
    selectedCard
};