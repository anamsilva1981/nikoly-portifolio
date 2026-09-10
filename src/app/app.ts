import { Component } from '@angular/core';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <div class="site-shell">
      <header class="topbar" id="home">
        <a class="brand" href="#home" aria-label="Nikoly Stradiotto - início">
          <span class="brand-mark" aria-hidden="true">✦</span>
          <span>Nikoly Stradiotto</span>
        </a>

        <nav class="nav" aria-label="Navegação principal">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <p class="top-note">Art · Characters · Ideas</p>
      </header>

      <main>
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="eyebrow">Hello, I’m</p>
            <h1 id="hero-title">Nikoly<br />Stradiotto</h1>
            <p class="hero-role">Graphic Designer &amp; Illustrator</p>
            <p class="hero-disciplines">Character Design · Illustration · Visual Identity</p>
            <a class="primary-cta" href="#work">View selected work <span aria-hidden="true">→</span></a>

            <div class="hero-quote" aria-hidden="true">
              <span class="quote-line"></span>
              <p>Stories, characters and ideas,<br />brought to life through art.</p>
            </div>
          </div>

          <div class="hero-art" aria-label="Ilustração autoral de personagem">
            <div class="hero-circle"></div>
            <span class="spark spark-one">✦</span>
            <span class="spark spark-two">✦</span>
            <span class="spark spark-three">✦</span>
            <span class="spark spark-four">✦</span>
            <p class="hand-note">just a<br />creative soul ♡</p>
            <img
              src="assets/portfolio/luka-slimes.png"
              alt="Ilustração de personagem de cabelos pretos e dourados cercado por criaturas verdes"
              fetchpriority="high"
            />
            <p class="side-note">Same characters<br />different stories</p>
          </div>
        </section>

        <section class="work-section" id="work" aria-labelledby="work-title">
          <div class="section-heading">
            <h2 id="work-title">Selected Work</h2>
            <span class="heading-line"></span>
            <p>A collection of illustration, branding and visual ideas.</p>
            <span class="cherry" aria-hidden="true">●●</span>
          </div>

          <div class="work-grid">
            <article class="project-card project-wide">
              <div class="project-media media-dark">
                <img
                  src="assets/portfolio/luka-sinuca.png"
                  alt="Ilustração de personagem jogando sinuca em ambiente iluminado por luzes vermelhas"
                  loading="lazy"
                />
              </div>
              <div class="project-meta">
                <div>
                  <p class="project-kicker">01 · Digital Illustration</p>
                  <h3>LUKA — Neon Pool</h3>
                  <p>Character Design &amp; Illustration</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>

            <article class="project-card">
              <div class="project-media media-paper">
                <img
                  src="assets/portfolio/luka-gato.png"
                  alt="Prancha de estudos de personagem de gato preto em diferentes poses"
                  loading="lazy"
                />
              </div>
              <div class="project-meta">
                <div>
                  <p class="project-kicker">02 · Character Study</p>
                  <h3>Character Studies</h3>
                  <p>Shape language &amp; expressions</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>

            <article class="project-card project-branding">
              <div class="project-media media-coffee">
                <img
                  src="assets/portfolio/miau-mocha-logo-detailed.png"
                  alt="Marca Miau e Mocha Café com gato usando óculos dentro de uma xícara"
                  loading="lazy"
                />
              </div>
              <div class="project-meta project-meta-light">
                <div>
                  <p class="project-kicker">03 · Branding</p>
                  <h3>Miau &amp; Mocha Café</h3>
                  <p>Visual Identity</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>

            <article class="project-card project-portrait">
              <div class="project-media media-rose">
                <img
                  src="assets/portfolio/luka-flores.png"
                  alt="Ilustração de personagem de cabelos pretos e dourados segurando flores vermelhas"
                  loading="lazy"
                />
              </div>
              <div class="project-meta">
                <div>
                  <p class="project-kicker">04 · Illustration</p>
                  <h3>LUKA — Roses</h3>
                  <p>Character Illustration</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          </div>
        </section>

        <section class="logos-section" aria-labelledby="logos-title">
          <div class="section-heading section-heading-compact">
            <h2 id="logos-title">Logo Explorations</h2>
            <span class="heading-line"></span>
            <p>Simple forms. Bigger stories.</p>
          </div>

          <div class="logos-grid">
            <article class="logo-card">
              <div class="logo-media logo-media-warm">
                <img src="assets/portfolio/ehacherryy-signature.png" alt="Assinatura visual EhAcherryy com cerejas" loading="lazy" />
              </div>
              <p>Personal Mark</p>
            </article>

            <article class="logo-card">
              <div class="logo-media logo-media-blue">
                <img src="assets/portfolio/lotus-logo.png" alt="Símbolo de lótus em tons de azul" loading="lazy" />
              </div>
              <p>Lotus · Symbol Study</p>
            </article>

            <article class="logo-card">
              <div class="logo-media logo-media-coffee">
                <img src="assets/portfolio/miau-mocha-logo.png" alt="Símbolo simplificado de gato dentro de uma xícara" loading="lazy" />
              </div>
              <p>Miau &amp; Mocha · Mark</p>
            </article>

            <article class="logo-card">
              <div class="logo-media logo-media-purple">
                <img src="assets/portfolio/karma-logo.png" alt="Camaleão geométrico em tons de roxo" loading="lazy" />
              </div>
              <p>Karma · Geometric Mark</p>
            </article>
          </div>
        </section>

        <section class="about-section" id="about" aria-labelledby="about-title">
          <div class="about-heading">
            <p class="eyebrow">About</p>
            <h2 id="about-title">Art with personality,<br />ideas with intention.</h2>
          </div>

          <div class="about-content">
            <p class="about-lead">
              Design student focused on illustration, character design and visual identity.
              I enjoy creating expressive characters, visual worlds and identities that feel memorable and human.
            </p>

            <div class="about-tags" aria-label="Áreas de atuação">
              <span>Digital Illustration</span>
              <span>Character Design</span>
              <span>Visual Identity</span>
              <span>2D Animation</span>
            </div>

            <div class="about-signature">
              <img src="assets/portfolio/ehacherryy-signature.png" alt="EhAcherryy" loading="lazy" />
              <p>Creating under the artistic identity <strong>EhAcherryy</strong>.</p>
            </div>
          </div>
        </section>

        <section class="contact-section" id="contact" aria-labelledby="contact-title">
          <p class="eyebrow">Let’s create something</p>
          <h2 id="contact-title">Have a project, internship<br />or creative opportunity?</h2>
          <div class="contact-links">
            <a href="mailto:nikolystradiotto@hotmail.com">Email</a>
            <a href="https://www.linkedin.com/in/nikoly-stradiotto-3017a7256/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://linktr.ee/ehacherryy" target="_blank" rel="noreferrer">Art Portfolio</a>
          </div>
        </section>
      </main>

      <footer class="footer">
        <a class="brand footer-brand" href="#home">
          <span class="brand-mark" aria-hidden="true">✦</span>
          <span>Nikoly Stradiotto</span>
        </a>
        <p>Graphic Designer &amp; Illustrator · São Paulo, Brazil</p>
        <p class="footer-note">Thank you for being here. ♡</p>
      </footer>
    </div>
  `,
})
export class App {}
