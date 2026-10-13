/* ==========================================
   NABD HEALTH | نبض
   Free Arabic Medical Website
   No login - No subscriptions
   ========================================== */

"use strict";

/* ---------- عناصر الصفحة ---------- */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const themeToggle = document.getElementById("themeToggle");

const searchForm = document.getElementById("searchForm");
const siteSearch = document.getElementById("siteSearch");
const searchResults = document.getElementById("searchResults");

const searchChips = document.querySelectorAll(".search-chip");
const navLinks = document.querySelectorAll(".nav-link");


/* ---------- قائمة الموبايل ---------- */

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "إغلاق قائمة التنقل"
                : "فتح قائمة التنقل"
        );

    });

    // إغلاق القائمة عند الضغط على أحد الروابط

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "فتح قائمة التنقل"
            );

        });

    });

    // إغلاق القائمة عند الضغط خارجها

    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            mainNav.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


/* ---------- الوضع الليلي والنهاري ---------- */

function applyTheme(theme) {

    const isDark = theme === "dark";

    document.body.classList.toggle(
        "dark-theme",
        isDark
    );

    if (themeToggle) {

        themeToggle.textContent = isDark
            ? "☀"
            : "◐";

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "تفعيل الوضع النهاري"
                : "تفعيل الوضع الليلي"
        );

        themeToggle.title = isDark
            ? "الوضع النهاري"
            : "الوضع الليلي";

    }

}

function getSavedTheme() {

    try {

        return localStorage.getItem("nabd-theme");

    } catch (error) {

        return null;

    }

}

function saveTheme(theme) {

    try {

        localStorage.setItem(
            "nabd-theme",
            theme
        );

    } catch (error) {

        // يظل تغيير المظهر متاحًا حتى لو تعذر التخزين.

    }

}

const savedTheme = getSavedTheme();

applyTheme(
    savedTheme === "dark"
        ? "dark"
        : "light"
);

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const isCurrentlyDark =
            document.body.classList.contains("dark-theme");

        const newTheme = isCurrentlyDark
            ? "light"
            : "dark";

        applyTheme(newTheme);
        saveTheme(newTheme);

    });

}


/* ---------- بيانات البحث الأولية ---------- */
/*
   هذه بيانات توضيحية للبحث داخل محتوى الصفحة الحالي.
   لا تمثل موسوعة طبية شاملة.
*/

const medicalItems = [

    {
        title: "داء السكري",
        category: "الأمراض",
        description:
            "معلومات عامة عن أنواع السكري وأعراضه وتشخيصه ومتابعته.",
        keywords: [
            "السكري",
            "سكر",
            "مرض السكر",
            "diabetes"
        ],
        target: "#diseases"
    },

    {
        title: "ارتفاع ضغط الدم",
        category: "الأمراض",
        description:
            "معلومات عن ضغط الدم وعوامل الخطورة والمتابعة الطبية.",
        keywords: [
            "ضغط الدم",
            "الضغط",
            "ضغط عالي",
            "hypertension"
        ],
        target: "#diseases"
    },

    {
        title: "فقر الدم",
        category: "الأمراض",
        description:
            "تعرف على أسباب فقر الدم وأنواعه وطرق تقييمه.",
        keywords: [
            "الأنيميا",
            "انيميا",
            "فقر الدم",
            "anemia"
        ],
        target: "#diseases"
    },

    {
        title: "دليل الأدوية",
        category: "الأدوية",
        description:
            "معلومات عامة عن الاستخدامات والتحذيرات والآثار الجانبية.",
        keywords: [
            "دواء",
            "الأدوية",
            "ادوية",
            "علاج",
            "medicine",
            "medicines"
        ],
        target: "#medicines"
    },

    {
        title: "مسكنات الألم",
        category: "الأدوية",
        description:
            "معلومات توعوية عن أنواع المسكنات وموانع استخدامها.",
        keywords: [
            "مسكن",
            "مسكنات",
            "مسكنات الألم",
            "وجع",
            "painkillers"
        ],
        target: "#medicines"
    },

    {
        title: "المستشفيات",
        category: "دليل المستشفيات",
        description:
            "انتقل إلى قسم دليل المنشآت والخدمات الطبية.",
        keywords: [
            "مستشفى",
            "مستشفيات",
            "دكتور",
            "طبيب",
            "hospital",
            "hospitals"
        ],
        target: "#hospitals"
    },

    {
        title: "الأمراض النادرة",
        category: "الأمراض النادرة",
        description:
            "معلومات توعوية عن الأمراض النادرة وسبل الوصول للرعاية.",
        keywords: [
            "نادر",
            "نادرة",
            "الأمراض النادرة",
            "rare diseases"
        ],
        target: "#rare-diseases"
    },

    {
        title: "المكتبة الطبية",
        category: "مقالات طبية",
        description:
            "تصفح المقالات التثقيفية الصحية.",
        keywords: [
            "مقال",
            "مقالات",
            "معلومات صحية",
            "توعية",
            "المكتبة الطبية",
            "articles"
        ],
        target: "#articles"
    },

    {
        title: "فيتامين د",
        category: "المكتبة الطبية",
        description:
            "ابحث عن معلومات توعوية متعلقة بفيتامين د.",
        keywords: [
            "فيتامين د",
            "فيتامين دي",
            "vitamin d"
        ],
        target: "#articles"
    }

];


/* ---------- تحسين كتابة البحث العربي ---------- */

function normalizeArabic(text) {

    return String(text || "")

        .toLowerCase()

        // إزالة التشكيل
        .replace(/[\u064B-\u065F\u0670]/g, "")

        // توحيد بعض الحروف
        .replace(/[أإآٱ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي")

        // إزالة التطويل
        .replace(/ـ/g, "")

        // إزالة المسافات الزائدة
        .replace(/\s+/g, " ")

        .trim();

}


/* ---------- البحث الطبي ---------- */

function searchMedicalItems(query) {

    const normalizedQuery = normalizeArabic(query);

    if (!normalizedQuery) {
        return [];
    }

    const terms = normalizedQuery
        .split(" ")
        .filter(Boolean);

    return medicalItems.filter(function (item) {

        const searchableText = normalizeArabic(
            [
                item.title,
                item.category,
                item.description,
                ...item.keywords
            ].join(" ")
        );

        return terms.every(function (term) {

            return searchableText.includes(term);

        });

    });

}


/* ---------- إنشاء النتائج بأمان ---------- */

function renderSearchResults(results, query) {

    if (!searchResults) {
        return;
    }

    searchResults.replaceChildren();

    const heading = document.createElement("h3");

    heading.textContent = query
        ? "نتائج البحث"
        : "ابحث في نبض";

    searchResults.appendChild(heading);

    if (!query.trim()) {

        const message = document.createElement("p");

        message.textContent =
            "اكتب اسم مرض أو دواء أو قسم طبي للبحث.";

        searchResults.appendChild(message);

        return;

    }

    if (results.length === 0) {

        const message = document.createElement("p");

        message.textContent =
            "لم نعثر على نتيجة مطابقة في المحتوى الحالي. جرّب كلمة أخرى.";

        searchResults.appendChild(message);

        const note = document.createElement("p");

        note.textContent =
            "الموسوعة ما زالت في مرحلة البناء، والبحث الحالي يشمل أمثلة محدودة فقط.";

        searchResults.appendChild(note);

        return;

    }

    const list = document.createElement("div");

    list.className = "search-result-list";

    results.forEach(function (item) {

        const card = document.createElement("article");

        card.className = "search-result-item";

        const category = document.createElement("span");

        category.className = "info-card-label";
        category.textContent = item.category;

        const title = document.createElement("h4");

        title.textContent = item.title;

        const description = document.createElement("p");

        description.textContent = item.description;

        const link = document.createElement("a");

        link.href = item.target;
        link.textContent = "الانتقال إلى القسم ←";

        link.addEventListener("click", function () {

            searchResults.replaceChildren();

        });

        card.append(
            category,
            title,
            description,
            link
        );

        list.appendChild(card);

    });

    searchResults.appendChild(list);

}


/* ---------- إرسال البحث ---------- */

if (searchForm && siteSearch && searchResults) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const query = siteSearch.value.trim();

        if (!query) {

            siteSearch.focus();

            renderSearchResults([], "");

            return;

        }

        const results = searchMedicalItems(query);

        renderSearchResults(results, query);

        searchResults.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

    // البحث المباشر أثناء الكتابة

    siteSearch.addEventListener("input", function () {

        const query = siteSearch.value.trim();

        if (query.length < 2) {

            searchResults.replaceChildren();

            return;

        }

        const results = searchMedicalItems(query);

        renderSearchResults(results, query);

    });

}


/* ---------- الكلمات الشائعة ---------- */

searchChips.forEach(function (chip) {

    chip.addEventListener("click", function () {

        const query = chip.dataset.search || "";

        if (!siteSearch) {
            return;
        }

        siteSearch.value = query;

        const results = searchMedicalItems(query);

        renderSearchResults(results, query);

        searchResults.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

});


/* ---------- تحديث الرابط النشط في القائمة ---------- */

function updateActiveNavigation() {

    const currentHash = window.location.hash || "#home";

    navLinks.forEach(function (link) {

        const linkHash = link.getAttribute("href");

        const isActive = linkHash === currentHash;

        link.classList.toggle(
            "active",
            isActive
        );

    });

}

window.addEventListener(
    "hashchange",
    updateActiveNavigation
);

updateActiveNavigation();


/* ---------- السنة الحالية ---------- */

const currentYearElements = document.querySelectorAll(
    "[data-current-year]"
);

currentYearElements.forEach(function (element) {

    element.textContent = new Date().getFullYear();

});


/* ---------- جاهزية الموقع ---------- */

document.documentElement.classList.add(
    "nabd-js-ready"
);

console.log(
    "NABD HEALTH: تم تحميل وظائف الموقع الأساسية بنجاح."
);
