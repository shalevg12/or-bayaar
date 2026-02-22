let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});

// Slideshow
$(document).ready(function () {
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true
    });
});

    (function () {
    const WHATSAPP_NUMBER = "972506757790"; 

    const form = document.getElementById("eventForm");
    const btn = document.getElementById("whatsappBtn");

    function value(name) {
      const el = form.querySelector(`[name="${name}"]`);
    return el ? (el.value || "").trim() : "";
    }

    function formatDate(iso) {
      if (!iso) return "";
    // iso = YYYY-MM-DD
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
    }

    btn.addEventListener("click", () => {
      // required checks (HTML required won't fire on type=button)
      const fullName = value("fullName");
    const phone = value("phone");
    const eventType = value("eventType");
    const eventDate = value("eventDate");
    const eventTime = value("eventTime");
    const guests = value("guests");
    const email = value("email");
    const notes = value("message");

    if (!fullName || !phone || !eventType || !eventDate || !eventTime || !guests) {
        alert("נא למלא את כל השדות המסומנים בכוכבית *");
    return;
      }

    const text =
    `היי 👋
    רציתי לתאם אירוע ב״אור ביער״ 🌿

    שם: ${fullName}
    טלפון: ${phone}
    אימייל: ${email || "לא צוין"}
    סוג אירוע: ${eventType}
    תאריך: ${formatDate(eventDate)}
    שעה: ${eventTime}
    כמות אורחים: ${guests}

    הערות / בקשות מיוחדות:
    ${notes || "אין"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    });
  })();
