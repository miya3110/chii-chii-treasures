import './App.css'

import logoMain from './assets/logo-main.png'
import logoEmblem from './assets/logo-emblem.png'
import logoPaw from './assets/logo-paw.png'

import projectSuzumori from './assets/project-suzumori.png'
import projectSuzumoriFeatured from './assets/project-suzumori-featured.png'
import novelCover from './assets/novel-cover.png'
import projectSuzumoriNovel from './assets/project-suzumori-novel.png'
import projectAiChat from './assets/project-ai-chat.png'
import projectComingSoon from './assets/project-coming-soon.png'

function Home() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <img
              src={logoPaw}
              alt="ちぃちぃトレジャーズ"
              className="brand-icon"
            />

            <div className="brand-text notranslate" translate="no">
              <span className="brand-name">
                ちぃちぃトレジャーズ
              </span>

              <span className="brand-sub">
                CHII CHII TREASURES
              </span>
            </div>
          </div>

          <nav className="nav">
            <a href="/suzumori">GAME</a>
            <a href="/suzumori/novel">NOVEL</a>
            <a href="#projects">PROJECTS</a>
            <a href="#about">ABOUT</a>
            <a href="#news">NEWS</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-inner">
            <img
              src={logoMain}
              alt="ちぃちぃトレジャーズ メインロゴ"
              className="main-logo"
            />

            <p className="hero-copy">
              ゲーム・小説・アプリ・AIサービス。
              <br />
              「面白い」を宝物に変えていく制作・開発ブランドです。
            </p>

            <div className="hero-status">
              OFFICIAL WEBSITE
              <span>DEVELOPING</span>
            </div>
          </div>
        </section>

        <section
          id="featured"
          className="section featured-section"
        >
          <div className="section-inner">
            <div className="featured-heading">
              <p className="section-label">
                FEATURED PROJECT
              </p>

              <h2>
                第一作目
              </h2>
            </div>

            <article className="featured-project">
              <div className="featured-image-wrap">
                <img
                  src={projectSuzumoriFeatured}
                  alt="鈴守神社～妖怪異変録～"
                  className="featured-image"
                />

                <span className="featured-badge">
                  開発中
                </span>
              </div>

              <div className="featured-content">
                <p className="featured-number">
                  CHII CHII TREASURES FIRST TITLE
                </p>

                <h3>
                  鈴守神社～妖怪異変録～
                </h3>

                <p className="featured-catch">
                  かわいい巫女と妖怪たちが駆ける、
                  <br />
                  和風アクションシューティング。
                </p>

                <p className="featured-description">
                  鈴守神社を舞台に、次々と巻き起こる妖怪異変へ
                  主人公・鈴（りん）が立ち向かいます。
                  かわいい妖怪たちと和の世界観を楽しみながら、
                  弾幕とアクションで異変を解決していく
                  ちぃちぃトレジャーズ第一作目です。
                </p>

                <div className="featured-meta">
                  <span>
                    ジャンル：和風アクションシューティング
                  </span>

                  <span>
                    ステータス：開発中
                  </span>
                </div>

                <div className="featured-meta">
                  <a
                    href="/suzumori"
                    className="featured-link"
                  >
                    GAMEを見る →
                  </a>

                  <a
                    href="/suzumori/novel"
                    className="featured-link"
                  >
                    NOVELを読む →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-inner">
            <p className="section-label">
              PROJECTS
            </p>

            <h2>
              プロジェクト
            </h2>

            <div className="project-grid">
              <article className="project-card">
                <img
                  src={projectSuzumori}
                  alt="ゲーム版 鈴守神社～妖怪異変録～"
                  className="project-image"
                />

                <div className="project-content">
                  <span className="project-status">
                    GAME / 開発中
                  </span>

                  <h3>
                    鈴守神社～妖怪異変録～
                  </h3>

                  <p>
                    かわいい巫女と妖怪たちが駆ける、
                    和風アクションシューティング。
                    主人公・鈴（りん）が妖怪異変へ立ち向かいます。
                  </p>

                  <a
                    href="/suzumori"
                    className="project-link"
                  >
                    ゲーム紹介を見る →
                  </a>
                </div>
              </article>

              <article className="project-card">
                <img
                  src={projectSuzumoriNovel}
                  alt="小説版 鈴守神社～妖怪異変録～"
                  className="project-image"
                />

                <div className="project-content">
                  <span className="project-status">
                    NOVEL / 連載準備中
                  </span>

                  <h3>
                    小説版 鈴守神社～妖怪異変録～
                  </h3>

                  <p>
                    ゲーム版と同時進行で描くWeb小説版。
                    ゲーム完成を待たず、一足先に
                    鈴たちの物語を読むことができます。
                  </p>

                  <a
                    href="/suzumori/novel"
                    className="project-link"
                  >
                    小説版を読む →
                  </a>
                </div>
              </article>

              <article className="project-card">
                <img
                  src={projectAiChat}
                  alt="AIキャラクターチャット"
                  className="project-image"
                />

                <div className="project-content">
                  <span className="project-status">
                    企画中
                  </span>

                  <h3>
                    AIキャラクターチャット
                  </h3>

                  <p>
                    キャラクターや物語を自分で設定し、
                    ユーザー自身が物語の主導権を持って楽しめる
                    AIキャラクターチャットサービスを企画しています。
                  </p>

                  <span className="project-link">
                    詳細ページ準備中
                  </span>
                </div>
              </article>

              <article className="project-card coming-soon">
                <img
                  src={projectComingSoon}
                  alt="新しい宝物を準備中"
                  className="project-image"
                />

                <div className="project-content">
                  <span className="project-status">
                    COMING SOON
                  </span>

                  <h3>
                    新しい宝物を準備中
                  </h3>

                  <p>
                    ゲーム、小説、アプリ、AIサービスなど、
                    新しいプロジェクトを順次公開していきます。
                  </p>

                  <span className="project-link">
                    COMING SOON
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section about-section"
        >
          <div className="section-inner about-grid">
            <div className="about-logo-wrap">
              <img
                src={logoEmblem}
                alt="ちぃちぃトレジャーズ エンブレム"
                className="emblem-logo"
              />
            </div>

            <div className="about-content">
              <p className="section-label">
                ABOUT
              </p>

              <h2>
                ちぃちぃトレジャーズについて
              </h2>

              <p>
                ちぃちぃトレジャーズは、
                ゲーム、小説、アプリ、AIサービスなど、
                「面白い」と思ったアイデアを
                一つずつ形にしていく制作・開発ブランドです。
              </p>

              <p>
                ジャンルや形式に縛られず、
                遊びたくなるもの、
                使いたくなるもの、
                物語の中へ入りたくなるものを制作していきます。
              </p>
            </div>
          </div>
        </section>

        <section
          id="news"
          className="section news-section"
        >
          <div className="section-inner">
            <p className="section-label">
              NEWS
            </p>

            <h2>
              お知らせ
            </h2>

            <div className="news-list">
              <article className="news-item">
                <time dateTime="2026-08-25">
                  2026.08.25
                </time>

                <p>
                  ちぃちぃトレジャーズ公式サイトを公開しました。
                </p>
              </article>

              <article className="news-item">
                <time dateTime="2026-08-25">
                  2026.08.25
                </time>

                <p>
                  第一作目「鈴守神社～妖怪異変録～」を開発中です。
                </p>
              </article>

              <article className="news-item">
                <time dateTime="2026-08-30">
                  2026.08.30
                </time>

                <p>
                    小説版「鈴守神社～妖怪異変録～」Web連載開始。
                    第一話「鈴守神社」を公開しました。
                </p>

              </article>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="section-inner contact-inner">
            <img
              src={logoPaw}
              alt=""
              className="contact-paw"
            />

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              お問い合わせ
            </h2>

            <p>
              お問い合わせ窓口は現在準備中です。
              <br />
              公開までしばらくお待ちください。
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img
          src={logoPaw}
          alt="ちぃちぃトレジャーズ"
          className="footer-logo"
        />

        <div className="social-links">
          <a
            href="https://x.com/chiichii_treasu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="ちぃちぃトレジャーズ公式X"
          >
            <span className="social-icon">𝕏</span>
            <span>X</span>
          </a>

          <a
            href="https://www.instagram.com/chiichii_treasures/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="ちぃちぃトレジャーズ公式Instagram"
          >
            <span className="social-icon">◎</span>
            <span>Instagram</span>
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} CHII CHII TREASURES
        </p>
      </footer>
    </div>
  )
}

export default Home