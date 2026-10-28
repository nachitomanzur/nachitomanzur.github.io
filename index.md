---
layout: home
title: About me
paper_abstracts: true
---

<section class="about enter" aria-labelledby="about-heading">
  <img class="portrait" src="{{ '/IMG_6949.jpeg' | relative_url }}" alt="Ignacio Manzur" width="216" height="240" fetchpriority="high">
  <div class="about-copy">
    <p class="eyebrow">PhD student · EPFL</p>
    <h1 id="about-heading">About me</h1>
    <p>I am a second-year PhD student at the EPFL COMPSEC Lab, where I am advised by <a href="https://ic-people.epfl.ch/~achiesa/">Alessandro Chiesa</a>. Before that, I worked as a Cryptography Researcher at <a href="https://www.nethermind.io/cryptography-research">Nethermind</a> for around 2 years. I have a MASt in Pure Mathematics (Part III) from the University of Cambridge.</p>
    <p>I am broadly interested in coding theory, the interaction between complexity theory and probabilistic proof/argument systems, and quantum computing.</p>
    <div class="contact-links" aria-label="Contact and profiles">
      <a class="email" href="mailto:ignacio.manzur@epfl.ch">ignacio.manzur@epfl.ch</a>
      <a href="https://scholar.google.com/citations?user=phK6lR4AAAAJ&amp;hl=fr&amp;oi=ao">Google Scholar <span class="arrow" aria-hidden="true">↗</span></a>
      <a href="{{ '/assets/Ignacio_Manzur_CV.pdf' | relative_url }}">CV <span class="arrow" aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>

<section class="research enter enter-later" aria-labelledby="papers-heading">
  <div class="section-heading"><h2 id="papers-heading">Papers</h2><span>Publications &amp; preprints</span></div>
  <ol class="publications">
  <li class="publication">
    <div class="publication-meta"><span class="publication-year">2026</span><span>Preprint</span></div>
    <article>
      <h3><button class="paper-toggle" type="button" id="title-mca-list-decoding" aria-expanded="true" aria-controls="abstract-mca-list-decoding">Mutual Correlated Agreement and List-Decoding: Improvements and Separations</button></h3>
      <p class="authors"><strong>Ignacio Manzur</strong></p>
      <div class="abstract-panel" id="abstract-mca-list-decoding" role="region" aria-labelledby="title-mca-list-decoding">
        <div class="abstract-clip"><div class="paper-abstract">
{% capture abstract %}{% include abstracts/mca-list-decoding.md %}{% endcapture %}
{{ abstract | markdownify }}
        </div></div>
      </div>
      <div class="paper-links"><a href="https://eprint.iacr.org/2026/2617">ePrint <span class="arrow" aria-hidden="true">↗</span></a></div>
    </article>
  </li>
  <li class="publication">
    <div class="publication-meta"><span class="publication-year">2026</span><span>CCC</span></div>
    <article>
      <h3><button class="paper-toggle" type="button" id="title-polynomial-generators" aria-expanded="true" aria-controls="abstract-polynomial-generators">All Polynomial Generators Preserve Distance with Mutual Correlated Agreement</button></h3>
      <p class="authors">Sarah Bordage, <a href="https://ic-people.epfl.ch/~achiesa/">Alessandro Chiesa</a>, <a href="https://ziyiguan.github.io/">Ziyi Guan</a>, <strong>Ignacio Manzur</strong></p>
      <div class="abstract-panel" id="abstract-polynomial-generators" role="region" aria-labelledby="title-polynomial-generators">
        <div class="abstract-clip"><div class="paper-abstract">
{% capture abstract %}{% include abstracts/polynomial-generators.md %}{% endcapture %}
{{ abstract | markdownify }}
        </div></div>
      </div>
      <div class="paper-links"><a href="https://eprint.iacr.org/2025/2051">ePrint <span class="arrow" aria-hidden="true">↗</span></a><a href="https://www.youtube.com/watch?v=tnEoWWe9XMY">ZKProof Talk <span class="arrow" aria-hidden="true">↗</span></a></div>
    </article>
  </li>
  <li class="publication">
    <div class="publication-meta"><span class="publication-year">2024</span><span>Asiacrypt</span></div>
    <article>
      <h3><button class="paper-toggle" type="button" id="title-fli" aria-expanded="true" aria-controls="abstract-fli">FLI: Folding lookup instances</button></h3>
      <p class="authors"><a href="https://sites.google.com/view/agarreta/home?authuser=0">Albert Garreta</a>, <strong>Ignacio Manzur</strong></p>
      <div class="abstract-panel" id="abstract-fli" role="region" aria-labelledby="title-fli">
        <div class="abstract-clip"><div class="paper-abstract">
{% capture abstract %}{% include abstracts/fli.md %}{% endcapture %}
{{ abstract | markdownify }}
        </div></div>
      </div>
      <div class="paper-links"><a href="https://eprint.iacr.org/2024/1531">ePrint <span class="arrow" aria-hidden="true">↗</span></a></div>
    </article>
  </li>
  <li class="publication">
    <div class="publication-meta"><span class="publication-year">2024</span><span>Preprint</span></div>
    <article>
      <h3><button class="paper-toggle" type="button" id="title-mova" aria-expanded="true" aria-controls="abstract-mova">Mova: Nova folding without committing to error terms</button></h3>
      <p class="authors">Nikolaos Dimitriou, <a href="https://sites.google.com/view/agarreta/home?authuser=0">Albert Garreta</a>, <strong>Ignacio Manzur</strong>, Ilia Vlasov</p>
      <div class="abstract-panel" id="abstract-mova" role="region" aria-labelledby="title-mova">
        <div class="abstract-clip"><div class="paper-abstract">
{% capture abstract %}{% include abstracts/mova.md %}{% endcapture %}
{{ abstract | markdownify }}
        </div></div>
      </div>
      <div class="paper-links"><a href="https://eprint.iacr.org/2024/1220">ePrint <span class="arrow" aria-hidden="true">↗</span></a></div>
    </article>
  </li>
  <li class="publication">
    <div class="publication-meta"><span class="publication-year">2024</span><span>Preprint</span></div>
    <article>
      <h3><button class="paper-toggle" type="button" id="title-fri-amortization" aria-expanded="true" aria-controls="abstract-fri-amortization">On amortization techniques for FRI-based SNARKs</button></h3>
      <p class="authors"><a href="https://sites.google.com/view/agarreta/home?authuser=0">Albert Garreta</a>, Hayk Hovhanissyan, Aram Jivanyan, <strong>Ignacio Manzur</strong>, Isaac Villalobos, Michał Zając</p>
      <div class="abstract-panel" id="abstract-fri-amortization" role="region" aria-labelledby="title-fri-amortization">
        <div class="abstract-clip"><div class="paper-abstract">
{% capture abstract %}{% include abstracts/fri-amortization.md %}{% endcapture %}
{{ abstract | markdownify }}
        </div></div>
      </div>
      <div class="paper-links"><a href="https://eprint.iacr.org/2024/661">ePrint <span class="arrow" aria-hidden="true">↗</span></a></div>
    </article>
  </li>
  </ol>
</section>
