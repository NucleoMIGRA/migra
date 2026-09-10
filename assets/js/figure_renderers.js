(function () {
  const lang = document.documentElement.lang === "en" ? "en" : "es";
  const ui = lang === "en"
    ? { figure: "Figure", goToSource: "Go to source" }
    : { figure: "Figura", goToSource: "Ir a la fuente" };

  function withPrefix(src, prefix) {
    return prefix && src.startsWith("assets/") ? `${prefix}${src}` : src;
  }

  function renderFigureCard(figure, source, options) {
    const src = withPrefix(figure.src, options.assetPrefix || "");
    const title = options.showNumbers && options.displayNumber
      ? `${ui.figure} ${options.displayNumber}. ${figure.title}`
      : figure.title;
    const headerEyebrow = options.showSourceEyebrow ? `<span class="eyebrow">${source.label}</span>` : "";
    const captionText = figure.caption || options.defaultCaption || "";
    const caption = options.showCaptions && captionText
      ? `<figcaption>${captionText}</figcaption>`
      : "";
    const cardClass = figure.cardClass ? ` ${figure.cardClass}` : "";

    if (options.lightbox) {
      return `
        <article class="figure-card${cardClass}">
          <header>
            ${headerEyebrow}
            <h3>${title}</h3>
            <p class="figure-meta">${figure.meta}</p>
          </header>
          <button class="lightbox-trigger" type="button" data-image="${src}" data-alt="${source.label}: ${figure.title}" data-title="${source.label}. ${figure.title}">
            <img src="${src}" alt="${source.label}: ${figure.title}">
          </button>
        </article>
      `;
    }

    return `
      <figure class="figure-card${cardClass}">
        <header>
          <h3>${title}</h3>
          <p class="figure-meta">${figure.meta}</p>
        </header>
        <img src="${src}" alt="${source.label}: ${figure.title}">
        ${caption}
      </figure>
    `;
  }

  function renderSourcePage(sourceId, config) {
    const source = window.dataMigraFigureCatalog?.[sourceId];
    if (!source) return;

    const nav = document.getElementById(config.navId);
    const root = document.getElementById(config.rootId);
    if (!nav || !root) return;

    nav.innerHTML = source.groups
      .map(group => `<a href="#${source.id}-${group.id}">${group.label}</a>`)
      .join("");

    let runningNumber = 1;

    root.innerHTML = source.groups.map(group => {
      const figures = group.figures
        .map(figure => {
          const markup = renderFigureCard(figure, source, {
            assetPrefix: config.assetPrefix || "",
            showNumbers: true,
            displayNumber: runningNumber,
            showCaptions: true,
            defaultCaption: group.caption,
            lightbox: false
          });
          runningNumber += 1;
          return markup;
        })
        .join("");

      return `
        <section class="section" id="${source.id}-${group.id}">
          <div class="section-head">
            <div>
              <span class="eyebrow">${group.label}</span>
              <h2>${group.title}</h2>
              <p>${group.description}</p>
            </div>
          </div>
          <div class="figure-stack">
            ${figures}
          </div>
        </section>
      `;
    }).join("");
  }

  function renderCatalog(config) {
    const nav = document.getElementById(config.navId);
    const root = document.getElementById(config.rootId);
    if (!nav || !root) return;

    const sources = Object.values(window.dataMigraFigureCatalog || {});

    nav.innerHTML = sources.map(source =>
      `<a href="#${source.id}">${source.label}</a>`
    ).join("");

    root.innerHTML = sources.map(source => {
      let runningNumber = 1;

      const groups = source.groups.map(group => {
        const cards = group.figures
          .map(figure => {
            const markup = renderFigureCard(figure, source, {
              assetPrefix: config.assetPrefix || "",
              showNumbers: true,
              displayNumber: runningNumber,
              showCaptions: false,
              showSourceEyebrow: true,
              lightbox: true
            });
            runningNumber += 1;
            return markup;
          })
          .join("");

        return `
          <div class="source-feature-group">
            <div class="source-group-head">
              <div>
                <span class="eyebrow">${group.label}</span>
                <h3>${group.title}</h3>
                <p>${group.description}</p>
              </div>
            </div>
            <div class="catalog-grid">${cards}</div>
          </div>
        `;
      }).join("");

      return `
        <section class="catalog-section" id="${source.id}">
          <div class="section-head actions-end">
            <div>
              <span class="eyebrow">${source.label}</span>
              <h2>${source.title}</h2>
              <p>${source.summary}</p>
            </div>
            <a class="button ghost" href="${source.href}">${ui.goToSource}</a>
          </div>
          ${groups}
        </section>
      `;
    }).join("");
  }

  window.DataMigraFigureRenderer = {
    renderSourcePage,
    renderCatalog
  };
})();
