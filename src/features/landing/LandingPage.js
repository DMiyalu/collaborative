import './LandingPage.css';

const intents = [
  {
    icon: '💡',
    tone: 'orange',
    title: "J'ai une idée",
    text: 'Je cherche des personnes pour la construire et transformer mon intuition en produit.',
  },
  {
    icon: '⚡',
    tone: 'blue',
    title: "J'ai des compétences",
    text: 'Je cherche un projet auquel contribuer et des personnes avec qui créer de la valeur.',
  },
  {
    icon: '🚀',
    tone: 'violet',
    title: "J'ai déjà un produit",
    text: "Je cherche des profils pour l'amener plus loin : marché, croissance, produit ou technologie.",
  },
  {
    icon: '🤝',
    tone: 'cyan',
    title: 'Je veux avancer maintenant',
    text: "Je travaille directement avec l'équipe Collaborative pour cadrer et lancer mon MVP.",
  },
];

const opportunities = [
  {
    cover: 'cover-1',
    sector: 'HealthTech',
    title: 'Recherche développeur mobile + profil marketing',
    text: 'Une solution de suivi entre cabinets médicaux et patients. Prototype initial déjà disponible.',
    meta: [
      ['Stade', 'Prototype'],
      ['Implication', '10h / semaine'],
      ['Compétences', 'Flutter · Growth'],
      ['Lieu', 'Kinshasa / Remote'],
    ],
    people: 3,
  },
  {
    cover: 'cover-2',
    sector: 'Fintech',
    title: 'Recherche Product + Backend pour cadrer un MVP',
    text: "Un problème terrain déjà identifié et validé. L'équipe recherche des profils complémentaires pour construire la première version.",
    meta: [
      ['Stade', 'Idée validée'],
      ['Ouvert à', 'Equity'],
      ['Compétences', 'Product · Node.js'],
      ['Rythme', 'Flexible'],
    ],
    people: 2,
  },
  {
    cover: 'cover-3',
    sector: 'SaaS',
    title: 'Recherche Growth / Business Development',
    text: "Le produit fonctionne déjà. L'objectif : trouver les premiers clients et affiner le go-to-market.",
    meta: [
      ['Stade', 'MVP en ligne'],
      ['Objectif', 'Premiers clients'],
      ['Compétences', 'Growth · Sales'],
      ['Mode', 'Co-construction'],
    ],
    people: 3,
  },
];

function BrandLogo() {
  return (
    <span className="landing-logo-icon" aria-hidden="true">
      <span className="landing-logo-spark" />
    </span>
  );
}

export default function LandingPage({ onOpenAuth }) {
  function handleOpenAuth(event) {
    event.preventDefault();
    onOpenAuth();
  }

  return (
    <div className="landing-page">
      <div className="landing-nav-wrap">
        <div className="landing-container">
          <header className="landing-nav">
            <a className="landing-brand" href="#top">
              <BrandLogo />
              Collaborative
            </a>
            <nav className="landing-nav-links" aria-label="Navigation principale">
              <a href="#fonctionnement">Comment ça marche</a>
              <a href="#opportunites">Opportunités</a>
              <a href="#equipe">Équipe Collaborative</a>
            </nav>
            <div className="landing-nav-actions">
              <a className="landing-btn landing-btn-soft" href="#opportunites">
                Explorer
              </a>
              <a className="landing-btn landing-btn-dark" href="#rejoindre" onClick={handleOpenAuth}>
                Rejoindre
              </a>
            </div>
          </header>
        </div>
      </div>

      <main id="top">
        <section className="landing-hero">
          <div className="landing-container landing-hero-grid">
            <div>
              <div className="landing-pill">
                <span className="landing-dot" />
                Le réseau pour celles et ceux qui veulent construire
              </div>
              <h1>
                Les projets rencontrent les <span className="landing-grad">bonnes compétences.</span>
              </h1>
              <p className="landing-hero-copy">
                Tu n&apos;as pas besoin d&apos;avoir toutes les compétences pour lancer une
                idée. Tu as besoin de trouver les bonnes personnes avec qui la construire.
              </p>
              <div className="landing-hero-actions">
                <a className="landing-btn landing-btn-dark" href="#rejoindre" onClick={handleOpenAuth}>
                  J&apos;ai un projet <span>↗</span>
                </a>
                <a className="landing-btn landing-btn-soft" href="#rejoindre" onClick={handleOpenAuth}>
                  J&apos;ai des compétences
                </a>
              </div>
              <div className="landing-micro">
                Pas un marketplace de freelances. Un réseau pour construire ensemble.
              </div>
            </div>

            <div className="landing-product-stage" aria-label="Aperçu de l'expérience Collaborative">
              <div className="landing-orb one" />
              <div className="landing-orb two" />
              <div className="landing-float-card f2">
                <div className="landing-float-title">Nouveau match</div>
                <div className="landing-float-value">92% compatible ✦</div>
              </div>
              <div className="landing-float-card f1">
                <div className="landing-float-title">Projet recherché</div>
                <div className="landing-float-value">Flutter · Fintech</div>
              </div>

              <div className="landing-panel">
                <div className="landing-panel-top">
                  <div className="landing-eyebrow">Talents recommandés</div>
                  <div className="landing-status">Disponible</div>
                </div>
                <div className="landing-profile-feature">
                  <div className="landing-pf-head">
                    <div className="landing-avatar" />
                    <div>
                      <div className="landing-pf-name">Patrick M.</div>
                      <div className="landing-pf-role">Développeur Flutter · Kinshasa</div>
                    </div>
                    <div className="landing-compat">
                      <b>92%</b>
                      <small>compatibilité</small>
                    </div>
                  </div>
                  <div className="landing-tags">
                    <span>Fintech</span>
                    <span>SaaS</span>
                    <span>Mobilité</span>
                    <span>Co-founder</span>
                  </div>
                  <div className="landing-pf-actions">
                    <div className="landing-small-btn primary">Voir le profil</div>
                    <div className="landing-small-btn ghost">Proposer une collaboration</div>
                  </div>
                </div>
                <div className="landing-mini-row">
                  <div className="landing-mini-card">
                    <div className="landing-mini-label">Disponibilité</div>
                    <div className="landing-mini-value">10-15h / semaine</div>
                    <div className="landing-mini-sub">Soirs & week-ends</div>
                  </div>
                  <div className="landing-mini-card">
                    <div className="landing-mini-label">Ouvert à</div>
                    <div className="landing-mini-value">Co-build · Equity</div>
                    <div className="landing-mini-sub">Projet early-stage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-section" id="rejoindre">
          <div className="landing-container">
            <div className="landing-section-head">
              <div className="landing-copy">
                <div className="landing-kicker">Ton point de départ</div>
                <h2>Entre par ce que tu as aujourd&apos;hui.</h2>
                <p className="landing-lead">
                  Collaborative s&apos;adapte à ton parcours : une idée, des compétences,
                  un produit déjà lancé ou simplement l&apos;envie d&apos;avancer rapidement.
                </p>
              </div>
            </div>

            <div className="landing-intent-grid">
              {intents.map((intent) => (
                <button className="landing-intent" key={intent.title} onClick={onOpenAuth} type="button">
                  <div className="landing-intent-top">
                    <div className={`landing-intent-icon icon-${intent.tone}`}>{intent.icon}</div>
                    <div className="landing-intent-arrow">↗</div>
                  </div>
                  <h3>{intent.title}</h3>
                  <p>{intent.text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-platform" id="fonctionnement">
          <div className="landing-container">
            <div className="landing-section-head">
              <div className="landing-copy">
                <div className="landing-kicker platform-kicker">Le parcours Collaborative</div>
                <h2>Le match n&apos;est que le début.</h2>
                <p className="landing-lead">
                  La plateforme est pensée pour faire passer les bonnes rencontres vers une
                  collaboration concrète, puis vers un produit réel.
                </p>
              </div>
            </div>

            <div className="landing-journey">
              <article>
                <div>01 / RENCONTRER</div>
                <h3>Se découvrir</h3>
                <p>Les profils et projets compatibles apparaissent au bon moment, avec le bon contexte.</p>
              </article>
              <article>
                <div>02 / CONSTITUER</div>
                <h3>Former l&apos;équipe</h3>
                <p>Les compétences complémentaires se choisissent et définissent leur mode de collaboration.</p>
              </article>
              <article>
                <div>03 / CO-CONSTRUIRE</div>
                <h3>Créer ensemble</h3>
                <p>Produit, tech, design, business et marketing convergent vers un MVP testable.</p>
              </article>
              <article>
                <div>04 / LANCER</div>
                <h3>Rencontrer le marché</h3>
                <p>Le produit sort, obtient ses premiers retours et évolue avec de vrais utilisateurs.</p>
              </article>
            </div>
            <div className="landing-journey-line" />
          </div>
        </section>

        <section className="landing-section" id="opportunites">
          <div className="landing-container">
            <div className="landing-section-head">
              <div className="landing-copy">
                <div className="landing-kicker">Opportunités</div>
                <h2>Découvre ce qui cherche à naître.</h2>
                <p className="landing-lead">
                  Une opportunité expose suffisamment pour créer une rencontre sans obliger le
                  porteur à dévoiler toute son idée.
                </p>
              </div>
              <a className="landing-btn landing-btn-soft" href="#rejoindre" onClick={handleOpenAuth}>
                Voir toutes les opportunités
              </a>
            </div>

            <div className="landing-op-grid">
              {opportunities.map((opportunity) => (
                <article className="landing-op-card" key={opportunity.title}>
                  <div className={`landing-op-cover ${opportunity.cover}`}>
                    <div className="landing-project-orb" />
                    <span>{opportunity.sector}</span>
                  </div>
                  <h3>{opportunity.title}</h3>
                  <p>{opportunity.text}</p>
                  <div className="landing-op-meta">
                    {opportunity.meta.map(([label, value]) => (
                      <div className="landing-meta-cell" key={label}>
                        <small>{label}</small>
                        <b>{value}</b>
                      </div>
                    ))}
                  </div>
                  <div className="landing-op-foot">
                    <div className="landing-people">
                      {Array.from({ length: opportunity.people }).map((_, index) => (
                        <span className="landing-person" key={index} />
                      ))}
                    </div>
                    <a href="#rejoindre" onClick={handleOpenAuth}>
                      Je veux contribuer →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-section" id="equipe">
          <div className="landing-container">
            <div className="landing-team-panel">
              <div>
                <div className="landing-kicker">Équipe Collaborative</div>
                <h2>Tu veux construire sans attendre ?</h2>
                <p className="landing-lead">
                  Passe directement du besoin à l&apos;exécution avec une équipe capable de
                  cadrer, designer, développer et préparer le lancement de ton MVP.
                </p>
                <div className="landing-team-actions">
                  <a className="landing-btn landing-btn-dark" href="#rejoindre" onClick={handleOpenAuth}>
                    Parler à Collaborative ↗
                  </a>
                  <a className="landing-btn landing-btn-soft" href="#fonctionnement">
                    Voir notre approche
                  </a>
                </div>
              </div>
              <div className="landing-team-visual">
                <span className="landing-team-chip">✦ Squad prête à démarrer</span>
                <div className="landing-workflow">
                  {[
                    ['◈', 'Product & stratégie', 'Cadrage · MVP · Priorités'],
                    ['✦', 'UX / UI Design', 'Parcours · Prototype · Design system'],
                    ['⌘', 'Développement', 'Web · Mobile · Backend'],
                    ['↗', 'Marketing & marché', 'Lancement · Acquisition · Feedback'],
                  ].map(([icon, title, subtitle]) => (
                    <div className="landing-work-row" key={title}>
                      <div className="landing-work-icon">{icon}</div>
                      <div>
                        <div className="landing-work-name">{title}</div>
                        <div className="landing-work-sub">{subtitle}</div>
                      </div>
                      <span>READY</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-quote">
          <div className="landing-container">
            <p>
              Le véritable objet échangé sur Collaborative, c&apos;est{' '}
              <em>l&apos;opportunité de construire ensemble.</em>
            </p>
          </div>
        </section>

        <section className="landing-cta">
          <div>
            <h2>Une idée. Une compétence. Une rencontre.</h2>
            <p>
              Crée ton profil, publie une opportunité ou découvre les projets auxquels
              tu pourrais contribuer.
            </p>
          </div>
          <a className="landing-btn landing-btn-white" href="#rejoindre" onClick={handleOpenAuth}>
            Rejoindre Collaborative ↗
          </a>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-container landing-foot">
          <span>© 2026 Collaborative</span>
          <span>Kinshasa · Remote · Build together</span>
        </div>
      </footer>
    </div>
  );
}
