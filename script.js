// Tahun footer
document.getElementById("year").textContent = new Date().getFullYear();

// Filter project
const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectItems.forEach(item => {
      const match = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("d-none", !match);
    });
  });
});

// Dark/light mode sederhana
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "☀ Mode"
    : "☾ Mode";
});

// Isi modal sesuai project
const projectDetails = {
  kasir: "Aplikasi kasir dibuat dengan HTML, CSS, dan JavaScript. Fitur utamanya adalah input nama barang, harga, jumlah, subtotal, diskon, dan total pembayaran.",
  router: "Simulasi jaringan berisi perancangan LAN, konfigurasi IP address, default gateway, koneksi antar-router, dan static routing.",
  database: "Project database berisi latihan membuat database, user, privilege, query SQL, serta backup dan restore database.",
  portfolio: "Website portofolio ini dibuat menggunakan HTML5, Bootstrap 5, custom CSS, dan JavaScript. Website memiliki navbar, section profil, skill, project, contact, filter project, modal, dan mode tampilan."
};

const projectModal = document.getElementById("projectModal");

projectModal.addEventListener("show.bs.modal", event => {
  const button = event.relatedTarget;
  const key = button.getAttribute("data-project");
  document.getElementById("projectModalText").textContent = projectDetails[key];
});

// Tambahan style light mode melalui class
const style = document.createElement("style");
style.textContent = `
  body.light-mode{background:#f8fafc;color:#111827}
  body.light-mode .section-alt{background:#eef2f7}
  body.light-mode .navbar{background:rgba(248,250,252,.88)}
  body.light-mode .nav-link{color:#334155!important}
  body.light-mode .nav-link:hover{color:#111827!important}
  body.light-mode .navbar-brand{color:#111827}
  body.light-mode .navbar-toggler{filter:invert(1)}
  body.light-mode .profile-card,
  body.light-mode .content-card,
  body.light-mode .skill-card,
  body.light-mode .project-card,
  body.light-mode .contact-box{background:#fff;color:#111827}
  body.light-mode .text-secondary{color:#64748b!important}
  body.light-mode .btn-outline-light{color:#334155;border-color:#cbd5e1}
  body.light-mode .contact-list a{color:#334155;background:#f8fafc}
`;
document.head.appendChild(style);
