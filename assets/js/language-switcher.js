(function () {
  const nav = document.querySelector(".site-header .nav");
  if (!nav) return;

  const isEnglish = document.documentElement.lang === "en";

  // El español vive en la raíz del sitio y el inglés en /en/.
  // Se construyen enlaces relativos para que funcionen igual en el dominio,
  // en una subcarpeta y abriendo los archivos localmente.
  const segments = window.location.pathname.split("/");
  const file = segments.pop() || "index.html";
  const parentFolder = segments.pop() || "";
  const inSourceFolder = parentFolder === "fuentes" || parentFolder === "sources";

  const toEnglishFile = (name) => (name === "censo.html" ? "census.html" : name);
  const toSpanishFile = (name) => (name === "census.html" ? "censo.html" : name);

  const suffix = `${window.location.search}${window.location.hash}`;

  let spanishHref;
  let englishHref;

  if (isEnglish) {
    englishHref = `${file}${suffix}`;
    spanishHref = inSourceFolder
      ? `../../fuentes/${toSpanishFile(file)}${suffix}`
      : `../${toSpanishFile(file)}${suffix}`;
  } else {
    spanishHref = `${file}${suffix}`;
    englishHref = inSourceFolder
      ? `../en/sources/${toEnglishFile(file)}${suffix}`
      : `en/${toEnglishFile(file)}${suffix}`;
  }

  const switcher = document.createElement("span");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", isEnglish ? "Language" : "Idioma");

  // Se construyen los nodos con la API del DOM en lugar de innerHTML: la ruta
  // incluye search y hash, que provienen de la URL y no deben interpretarse
  // como marcado.
  [
    { label: "ES", lang: "es", href: spanishHref, current: !isEnglish },
    { label: "EN", lang: "en", href: englishHref, current: isEnglish }
  ].forEach((item) => {
    const link = document.createElement("a");
    link.setAttribute("href", item.href);
    link.setAttribute("hreflang", item.lang);
    link.setAttribute("lang", item.lang);
    if (item.current) link.setAttribute("aria-current", "page");
    link.textContent = item.label;
    switcher.appendChild(link);
  });

  nav.appendChild(switcher);
})();
