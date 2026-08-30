import './App.css'

import logoPaw from './assets/logo-paw.png'
import novelCover from './assets/novel-cover.png'

function Novel() {
  return (
    <div className="site novel-page">
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="brand">
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
          </a>

          <nav className="nav">
            <a href="/">TOP</a>
            <a href="/suzumori">GAME</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section novel-hero-section">
          <div className="section-inner novel-hero">
            <div className="novel-cover-wrap">
              <a
                href="/suzumori/novel/01"
                className="novel-cover-link"
              >
                <img
                  src={novelCover}
                  alt="小説版 鈴守神社～妖怪異変録～ 表紙"
                  className="novel-cover"
                />

                <span className="novel-cover-overlay">
                  表紙をクリックして読む
                </span>
              </a>
            </div>

            <div className="novel-intro">
              <p className="section-label">
                NOVEL
              </p>

              <h1>
                鈴守神社
                <br />
                ～妖怪異変録～
              </h1>

              <p className="novel-subtitle">
                小説版
              </p>

              <p className="novel-description">
                鈴守神社を舞台に、
                主人公・鈴（りん）と妖怪たちの物語を描く
                『鈴守神社～妖怪異変録～』小説版。
              </p>

              <p className="novel-description">
                ゲーム版では描ききれない日常や心情、
                妖怪たちとの出会い、
                そして異変の裏側まで物語として描いていきます。
              </p>

              <div className="novel-status">
                <span>連載中</span>
                <span>Web小説</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section novel-index-section">
          <div className="section-inner">
            <p className="section-label">
              CONTENTS
            </p>

            <h2>
              目次
            </h2>

            <div className="novel-episode-list">
              <article className="novel-episode-card">
                <span className="novel-episode-number">
                  第一話
                </span>

                <div className="novel-episode-info">
                  <h3>
                    鈴守神社
                  </h3>

                  <p>
                    主人公・鈴（りん）が、山で起きた異変へ向かい、
                    九尾の少女・久美と出会う物語の始まり。
                  </p>
                </div>

                <a
                  href="/suzumori/novel/01"
                  className="novel-episode-link"
                >
                  読む →
                </a>
              </article>

              <article className="novel-episode-card novel-episode-card-writing">
                <span className="novel-episode-number">
                  第二話
                </span>

                <div className="novel-episode-info">
                  <h3>
                    執筆中
                  </h3>

                  <p>
                    第二話は現在執筆中です。
                    公開までしばらくお待ちください。
                  </p>
                </div>

                <span className="novel-episode-link novel-episode-link-disabled">
                  COMING SOON
                </span>
              </article>

            </div>
          </div>
        </section>

        <section className="section novel-note-section">
          <div className="section-inner novel-note">
            <p className="section-label">
              ABOUT THE NOVEL
            </p>

            <h2>
              Web版ならではの物語体験
            </h2>

            <p>
              小説本文には、物語に合わせて挿絵や
              キャラクターイラスト、背景ビジュアルなどを
              順次掲載していく予定です。
            </p>

            <a
              href="/suzumori"
              className="featured-link"
            >
              鈴守神社 作品ページへ戻る →
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img
          src={logoPaw}
          alt="ちぃちぃトレジャーズ"
          className="footer-logo"
        />

        <p>
          © {new Date().getFullYear()} CHII CHII TREASURES
        </p>
      </footer>
    </div>
  )
}

export default Novel