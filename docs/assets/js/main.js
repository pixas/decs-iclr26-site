(function () {
  const config = window.SITE_CONFIG || {};

  const byId = (id) => document.getElementById(id);

  const venue = byId("venue");
  const paperTitle = byId("paper-title");
  const subtitle = byId("paper-subtitle");
  const linksWrap = byId("paper-links");
  const authorsWrap = byId("authors");
  const affiliationsWrap = byId("affiliations");
  const statsWrap = byId("hero-stats");
  const abstractText = byId("abstract-text");
  const takeaways = byId("takeaways");
  const bibtex = byId("bibtex");
  const year = byId("year");

  if (venue) venue.textContent = config.venue || "";
  if (paperTitle) paperTitle.textContent = config.paperTitle || "";
  if (subtitle) subtitle.textContent = config.subtitle || "";
  if (abstractText) abstractText.textContent = config.abstractText || "";
  if (bibtex) bibtex.textContent = config.bibtex || "";
  if (year) year.textContent = String(new Date().getFullYear());

  if (linksWrap) {
    (config.links || []).forEach((item) => {
      const hasUrl = Boolean(item.url && item.url.trim());
      const node = document.createElement(hasUrl ? "a" : "span");
      node.className = `pill-link${hasUrl ? "" : " is-disabled"}`;
      node.textContent = item.label || "Link";

      if (hasUrl) {
        node.href = item.url;
        node.target = "_blank";
        node.rel = "noopener";
      } else if (item.hint) {
        node.title = item.hint;
      }

      linksWrap.appendChild(node);
    });
  }

  if (authorsWrap) {
    (config.authors || []).forEach((author, index) => {
      const a = document.createElement("a");
      a.className = "author-link";
      a.href = `mailto:${author.email}`;

      const nameNode = document.createElement("span");
      nameNode.textContent = author.name;
      a.appendChild(nameNode);

      const ids = Array.isArray(author.affiliationIds)
        ? author.affiliationIds.filter((id) => Number.isInteger(id) && id > 0)
        : [];

      if (ids.length > 0) {
        const sup = document.createElement("sup");
        sup.className = "author-affil";
        sup.textContent = ids.join(",");
        a.appendChild(sup);
      }

      authorsWrap.appendChild(a);

      if (index < config.authors.length - 1) {
        const sep = document.createElement("span");
        sep.textContent = "·";
        authorsWrap.appendChild(sep);
      }
    });
  }

  if (affiliationsWrap) {
    const affs = Array.isArray(config.affiliations) ? config.affiliations : [];
    affiliationsWrap.innerHTML = "";

    affs.forEach((aff, index) => {
      const item = document.createElement("span");
      item.className = "aff-item";

      const sup = document.createElement("sup");
      sup.className = "aff-index";
      sup.textContent = String(index + 1);

      const text = document.createElement("span");
      text.className = "aff-text";
      text.textContent = ` ${aff}`;

      item.appendChild(sup);
      item.appendChild(text);
      affiliationsWrap.appendChild(item);

      if (index < affs.length - 1) {
        const sep = document.createElement("span");
        sep.className = "aff-sep";
        sep.textContent = "|";
        affiliationsWrap.appendChild(sep);
      }
    });
  }

  if (statsWrap) {
    (config.heroStats || []).forEach((stat) => {
      const card = document.createElement("article");
      card.className = "stat-card";

      const value = document.createElement("span");
      value.className = "value";
      value.textContent = stat.value;

      const label = document.createElement("span");
      label.className = "label";
      label.textContent = stat.label;

      card.appendChild(value);
      card.appendChild(label);
      statsWrap.appendChild(card);
    });
  }

  if (takeaways) {
    (config.quickTakeaways || []).forEach((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      takeaways.appendChild(li);
    });
  }

  const revealNodes = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 35, 420)}ms`;
    revealObserver.observe(node);
  });
})();

