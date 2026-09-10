import { Component, HostListener } from '@angular/core';

type Language = 'pt' | 'en';

type PortfolioCopy = {
  nav: { home: string; work: string; about: string; contact: string };
  topNote: string;
  hello: string;
  role: string;
  disciplines: string;
  viewWork: string;
  heroQuote: string;
  creativeSoul: string;
  sameCharacters: string;
  selectedWork: string;
  selectedWorkDescription: string;
  digitalIllustration: string;
  characterDesignIllustration: string;
  characterStudy: string;
  characterStudies: string;
  shapeLanguage: string;
  branding: string;
  visualIdentity: string;
  illustration: string;
  characterIllustration: string;
  logoExplorations: string;
  logoDescription: string;
  personalMark: string;
  symbolStudy: string;
  mark: string;
  geometricMark: string;
  about: string;
  aboutTitle: string;
  aboutText: string;
  digitalIllustrationTag: string;
  characterDesignTag: string;
  visualIdentityTag: string;
  animationTag: string;
  artisticIdentity: string;
  contactEyebrow: string;
  contactTitle: string;
  email: string;
  artPortfolio: string;
  footerRole: string;
  footerThanks: string;
  expandImage: string;
  closeImage: string;
};

const COPY: Record<Language, PortfolioCopy> = {
  pt: {
    nav: { home: 'Início', work: 'Trabalhos', about: 'Sobre', contact: 'Contato' },
    topNote: 'Arte · Personagens · Ideias',
    hello: 'Olá, eu sou',
    role: 'Designer Gráfica & Ilustradora',
    disciplines: 'Character Design · Ilustração · Identidade Visual',
    viewWork: 'Ver trabalhos selecionados',
    heroQuote: 'Histórias, personagens e ideias, transformados em arte.',
    creativeSoul: 'uma alma criativa ♡',
    sameCharacters: 'Mesmos personagens · histórias diferentes',
    selectedWork: 'Trabalhos Selecionados',
    selectedWorkDescription: 'Uma seleção de ilustração, branding e ideias visuais.',
    digitalIllustration: 'Ilustração Digital',
    characterDesignIllustration: 'Character Design & Ilustração',
    characterStudy: 'Estudo de Personagem',
    characterStudies: 'Estudos de Personagem',
    shapeLanguage: 'Formas, silhuetas e expressões',
    branding: 'Branding',
    visualIdentity: 'Identidade Visual',
    illustration: 'Ilustração',
    characterIllustration: 'Ilustração de Personagem',
    logoExplorations: 'Explorações de Logos',
    logoDescription: 'Formas simples. Histórias maiores.',
    personalMark: 'Marca Pessoal',
    symbolStudy: 'Estudo de Símbolo',
    mark: 'Símbolo',
    geometricMark: 'Marca Geométrica',
    about: 'Sobre',
    aboutTitle: 'Arte com personalidade, ideias com intenção.',
    aboutText: 'Estudante de Design Gráfico com foco em ilustração, character design e identidade visual. Gosto de criar personagens expressivos, universos visuais e identidades marcantes e humanas.',
    digitalIllustrationTag: 'Ilustração Digital',
    characterDesignTag: 'Character Design',
    visualIdentityTag: 'Identidade Visual',
    animationTag: 'Animação 2D',
    artisticIdentity: 'Criando também sob a identidade artística',
    contactEyebrow: 'Vamos criar algo juntos',
    contactTitle: 'Tem um projeto, estágio ou oportunidade criativa?',
    email: 'E-mail',
    artPortfolio: 'Portfólio Artístico',
    footerRole: 'Designer Gráfica & Ilustradora · São Paulo, Brasil',
    footerThanks: 'Obrigada por estar aqui. ♡',
    expandImage: 'Ampliar imagem',
    closeImage: 'Fechar imagem'
  },
  en: {
    nav: { home: 'Home', work: 'Work', about: 'About', contact: 'Contact' },
    topNote: 'Art · Characters · Ideas',
    hello: 'Hello, I’m',
    role: 'Graphic Designer & Illustrator',
    disciplines: 'Character Design · Illustration · Visual Identity',
    viewWork: 'View selected work',
    heroQuote: 'Stories, characters and ideas, brought to life through art.',
    creativeSoul: 'just a creative soul ♡',
    sameCharacters: 'Same characters · different stories',
    selectedWork: 'Selected Work',
    selectedWorkDescription: 'A collection of illustration, branding and visual ideas.',
    digitalIllustration: 'Digital Illustration',
    characterDesignIllustration: 'Character Design & Illustration',
    characterStudy: 'Character Study',
    characterStudies: 'Character Studies',
    shapeLanguage: 'Shape language & expressions',
    branding: 'Branding',
    visualIdentity: 'Visual Identity',
    illustration: 'Illustration',
    characterIllustration: 'Character Illustration',
    logoExplorations: 'Logo Explorations',
    logoDescription: 'Simple forms. Bigger stories.',
    personalMark: 'Personal Mark',
    symbolStudy: 'Symbol Study',
    mark: 'Mark',
    geometricMark: 'Geometric Mark',
    about: 'About',
    aboutTitle: 'Art with personality, ideas with intention.',
    aboutText: 'Design student focused on illustration, character design and visual identity. I enjoy creating expressive characters, visual worlds and identities that feel memorable and human.',
    digitalIllustrationTag: 'Digital Illustration',
    characterDesignTag: 'Character Design',
    visualIdentityTag: 'Visual Identity',
    animationTag: '2D Animation',
    artisticIdentity: 'Creating under the artistic identity',
    contactEyebrow: 'Let’s create something',
    contactTitle: 'Have a project, internship or creative opportunity?',
    email: 'Email',
    artPortfolio: 'Art Portfolio',
    footerRole: 'Graphic Designer & Illustrator · São Paulo, Brazil',
    footerThanks: 'Thank you for being here. ♡',
    expandImage: 'Expand image',
    closeImage: 'Close image'
  }
};

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
          <a href="#home">{{ copy.nav.home }}</a>
          <a href="#work">{{ copy.nav.work }}</a>
          <a href="#about">{{ copy.nav.about }}</a>
          <a href="#contact">{{ copy.nav.contact }}</a>
        </nav>

        <div class="top-actions">
          <p class="top-note">{{ copy.topNote }}</p>
          <div class="language-switch" aria-label="Idioma / Language">
            <button type="button" [class.active]="language === 'pt'" (click)="setLanguage('pt')">PT</button>
            <span>/</span>
            <button type="button" [class.active]="language === 'en'" (click)="setLanguage('en')">EN</button>
          </div>
        </div>
      </header>

      <main>
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="eyebrow">{{ copy.hello }}</p>
            <h1 id="hero-title">Nikoly<br />Stradiotto</h1>
            <p class="hero-role">{{ copy.role }}</p>
            <p class="hero-disciplines">{{ copy.disciplines }}</p>
            <a class="primary-cta" href="#work">{{ copy.viewWork }} <span aria-hidden="true">→</span></a>

            <div class="hero-quote" aria-hidden="true">
              <span class="quote-line"></span>
              <p>{{ copy.heroQuote }}</p>
            </div>
          </div>

          <div class="hero-art" aria-label="Ilustração autoral de personagem">
            <div class="hero-circle"></div>
            <span class="spark spark-one">✦</span>
            <span class="spark spark-two">✦</span>
            <span class="spark spark-three">✦</span>
            <span class="spark spark-four">✦</span>
            <p class="hand-note">{{ copy.creativeSoul }}</p>
            <button class="image-button hero-image-button" type="button" (click)="openLightbox('assets/portfolio/luka-slimes.png', 'Luka com criaturas verdes')" [attr.aria-label]="copy.expandImage">
              <img src="assets/portfolio/luka-slimes.png" alt="Ilustração de personagem de cabelos pretos e dourados cercado por criaturas verdes" fetchpriority="high" />
            </button>
            <p class="side-note">{{ copy.sameCharacters }}</p>
          </div>
        </section>

        <section class="work-section" id="work" aria-labelledby="work-title">
          <div class="section-heading">
            <h2 id="work-title">{{ copy.selectedWork }}</h2>
            <span class="heading-line"></span>
            <p>{{ copy.selectedWorkDescription }}</p>
            <span class="cherry" aria-hidden="true">●●</span>
          </div>

          <div class="work-grid">
            <article class="project-card project-wide">
              <div class="project-media media-dark">
                <button class="image-button" type="button" (click)="openLightbox('assets/portfolio/luka-sinuca.png', 'LUKA — Neon Pool')" [attr.aria-label]="copy.expandImage">
                  <img src="assets/portfolio/luka-sinuca.png" alt="Ilustração de personagem jogando sinuca em ambiente iluminado por luzes vermelhas" loading="lazy" />
                </button>
              </div>
              <div class="project-meta">
                <div>
                  <p class="project-kicker">01 · {{ copy.digitalIllustration }}</p>
                  <h3>LUKA — Neon Pool</h3>
                  <p>{{ copy.characterDesignIllustration }}</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>

            <article class="project-card">
              <div class="project-media media-paper">
                <button class="image-button" type="button" (click)="openLightbox('assets/portfolio/luka-gato.png', copy.characterStudies)" [attr.aria-label]="copy.expandImage">
                  <img src="assets/portfolio/luka-gato.png" alt="Prancha de estudos de personagem de gato preto em diferentes poses" loading="lazy" />
                </button>
              </div>
              <div class="project-meta">
                <div>
                  <p class="project-kicker">02 · {{ copy.characterStudy }}</p>
                  <h3>{{ copy.characterStudies }}</h3>
                  <p>{{ copy.shapeLanguage }}</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>

            <article class="project-card project-branding">
              <div class="project-media media-coffee">
                <button class="image-button" type="button" (click)="openLightbox('assets/portfolio/miau-mocha-logo-detailed.png', 'Miau & Mocha Café')" [attr.aria-label]="copy.expandImage">
                  <img src="assets/portfolio/miau-mocha-logo-detailed.png" alt="Marca Miau e Mocha Café com gato usando óculos dentro de uma xícara" loading="lazy" />
                </button>
              </div>
              <div class="project-meta project-meta-light">
                <div>
                  <p class="project-kicker">03 · {{ copy.branding }}</p>
                  <h3>Miau &amp; Mocha Café</h3>
                  <p>{{ copy.visualIdentity }}</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>

            <article class="project-card project-portrait">
              <div class="project-media media-rose">
                <button class="image-button" type="button" (click)="openLightbox('assets/portfolio/luka-flores.png', 'LUKA — Roses')" [attr.aria-label]="copy.expandImage">
                  <img src="assets/portfolio/luka-flores.png" alt="Ilustração de personagem de cabelos pretos e dourados segurando flores vermelhas" loading="lazy" />
                </button>
              </div>
              <div class="project-meta">
                <div>
                  <p class="project-kicker">04 · {{ copy.illustration }}</p>
                  <h3>LUKA — Roses</h3>
                  <p>{{ copy.characterIllustration }}</p>
                </div>
                <span class="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          </div>
        </section>

        <section class="logos-section" aria-labelledby="logos-title">
          <div class="section-heading section-heading-compact">
            <h2 id="logos-title">{{ copy.logoExplorations }}</h2>
            <span class="heading-line"></span>
            <p>{{ copy.logoDescription }}</p>
          </div>

          <div class="logos-grid">
            <article class="logo-card">
              <div class="logo-media logo-media-warm"><button class="image-button" type="button" (click)="openLightbox('assets/portfolio/ehacherryy-signature.png', 'EhAcherryy')" [attr.aria-label]="copy.expandImage"><img src="assets/portfolio/ehacherryy-signature.png" alt="Assinatura visual EhAcherryy com cerejas" loading="lazy" /></button></div>
              <p>{{ copy.personalMark }}</p>
            </article>
            <article class="logo-card">
              <div class="logo-media logo-media-blue"><button class="image-button" type="button" (click)="openLightbox('assets/portfolio/lotus-logo.png', 'Lotus')" [attr.aria-label]="copy.expandImage"><img src="assets/portfolio/lotus-logo.png" alt="Símbolo de lótus em tons de azul" loading="lazy" /></button></div>
              <p>Lotus · {{ copy.symbolStudy }}</p>
            </article>
            <article class="logo-card">
              <div class="logo-media logo-media-coffee"><button class="image-button" type="button" (click)="openLightbox('assets/portfolio/miau-mocha-logo.png', 'Miau & Mocha')" [attr.aria-label]="copy.expandImage"><img src="assets/portfolio/miau-mocha-logo.png" alt="Símbolo simplificado de gato dentro de uma xícara" loading="lazy" /></button></div>
              <p>Miau &amp; Mocha · {{ copy.mark }}</p>
            </article>
            <article class="logo-card">
              <div class="logo-media logo-media-purple"><button class="image-button" type="button" (click)="openLightbox('assets/portfolio/karma-logo.png', 'Karma')" [attr.aria-label]="copy.expandImage"><img src="assets/portfolio/karma-logo.png" alt="Camaleão geométrico em tons de roxo" loading="lazy" /></button></div>
              <p>Karma · {{ copy.geometricMark }}</p>
            </article>
          </div>
        </section>

        <section class="about-section" id="about" aria-labelledby="about-title">
          <div class="about-heading">
            <p class="eyebrow">{{ copy.about }}</p>
            <h2 id="about-title">{{ copy.aboutTitle }}</h2>
          </div>
          <div class="about-content">
            <p class="about-lead">{{ copy.aboutText }}</p>
            <div class="about-tags" aria-label="Áreas de atuação">
              <span>{{ copy.digitalIllustrationTag }}</span><span>{{ copy.characterDesignTag }}</span><span>{{ copy.visualIdentityTag }}</span><span>{{ copy.animationTag }}</span>
            </div>
            <div class="about-signature">
              <button class="image-button signature-button" type="button" (click)="openLightbox('assets/portfolio/ehacherryy-signature.png', 'EhAcherryy')" [attr.aria-label]="copy.expandImage"><img src="assets/portfolio/ehacherryy-signature.png" alt="EhAcherryy" loading="lazy" /></button>
              <p>{{ copy.artisticIdentity }} <strong>EhAcherryy</strong>.</p>
            </div>
          </div>
        </section>

        <section class="contact-section" id="contact" aria-labelledby="contact-title">
          <p class="eyebrow">{{ copy.contactEyebrow }}</p>
          <h2 id="contact-title">{{ copy.contactTitle }}</h2>
          <div class="contact-links">
            <a href="mailto:nikolystradiotto@hotmail.com">{{ copy.email }}</a>
            <a href="https://www.linkedin.com/in/nikoly-stradiotto-3017a7256/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://linktr.ee/ehacherryy" target="_blank" rel="noreferrer">{{ copy.artPortfolio }}</a>
          </div>
        </section>
      </main>

      <footer class="footer">
        <a class="brand footer-brand" href="#home"><span class="brand-mark" aria-hidden="true">✦</span><span>Nikoly Stradiotto</span></a>
        <p>{{ copy.footerRole }}</p>
        <p class="footer-note">{{ copy.footerThanks }}</p>
      </footer>
    </div>

    <div class="lightbox" [class.is-open]="selectedImage" [attr.aria-hidden]="!selectedImage" (click)="onBackdropClick($event)">
      <button class="lightbox-close" type="button" (click)="closeLightbox()" [attr.aria-label]="copy.closeImage">×</button>
      <figure>
        <img [src]="selectedImage?.src || ''" [alt]="selectedImage?.alt || ''" />
        <figcaption>{{ selectedImage?.alt }}</figcaption>
      </figure>
    </div>
  `,
  styles: [`
    .top-actions{justify-self:end;display:flex;align-items:center;gap:18px}.language-switch{display:flex;align-items:center;gap:5px;font-size:.72rem;letter-spacing:.08em}.language-switch button{border:0;background:transparent;padding:5px 2px;color:#8b7e72;cursor:pointer}.language-switch button.active{color:var(--red);font-weight:800}.image-button{border:0;background:transparent;padding:0;width:100%;height:100%;display:grid;place-items:center;cursor:zoom-in}.image-button:focus-visible{outline:2px solid var(--red);outline-offset:4px}.hero-image-button{width:min(690px,95%);height:auto;position:relative;z-index:3}.hero-image-button img{width:100%;max-height:590px}.signature-button{width:auto;height:auto}.lightbox{position:fixed;inset:0;z-index:9999;background:rgba(12,10,9,.94);display:grid;place-items:center;padding:54px 24px 24px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s ease,visibility .2s ease}.lightbox.is-open{opacity:1;visibility:visible;pointer-events:auto}.lightbox figure{margin:0;display:grid;gap:12px;place-items:center;max-width:min(94vw,1500px);max-height:90vh}.lightbox img{max-width:94vw;max-height:82vh;width:auto;height:auto;object-fit:contain;border-radius:10px;box-shadow:0 24px 80px rgba(0,0,0,.45)}.lightbox figcaption{color:#fff9;font-size:.82rem}.lightbox-close{position:fixed;top:18px;right:24px;width:44px;height:44px;border:1px solid #ffffff55;border-radius:50%;background:#ffffff12;color:white;font-size:2rem;line-height:1;cursor:pointer}.lightbox-close:hover{background:#ffffff25}@media(max-width:900px){.top-note{display:none}.top-actions{gap:8px}.language-switch{font-size:.68rem}}@media(max-width:650px){.language-switch span{display:none}.language-switch{gap:2px}.language-switch button{padding:6px 4px}.lightbox{padding-inline:12px}.lightbox-close{right:12px}}
  `]
})
export class App {
  language: Language = this.detectLanguage();
  selectedImage: { src: string; alt: string } | null = null;

  constructor() {
    this.applyDocumentLanguage();
  }

  get copy(): PortfolioCopy {
    return COPY[this.language];
  }

  setLanguage(language: Language): void {
    this.language = language;
    this.applyDocumentLanguage();
  }

  openLightbox(src: string, alt: string): void {
    this.selectedImage = { src, alt };
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closeLightbox();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedImage) this.closeLightbox();
  }

  private detectLanguage(): Language {
    if (typeof navigator === 'undefined') return 'pt';
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  private applyDocumentLanguage(): void {
    if (typeof document !== 'undefined') document.documentElement.lang = this.language === 'pt' ? 'pt-BR' : 'en';
  }
}
