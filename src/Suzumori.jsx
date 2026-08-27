import { useEffect } from 'react'
import './App.css'

import logoPaw from './assets/logo-paw.png'
import projectSuzumoriFeatured from './assets/project-suzumori-featured.png'

function Suzumori() {
  useEffect(() => {
    document.title =
      '鈴守神社～妖怪異変録～ | ちぃちぃトレジャーズ'

    const description =
      'かわいい巫女と妖怪たちが駆ける、和風アクションシューティング「鈴守神社～妖怪異変録～」の公式紹介ページです。'

    let meta = document.querySelector(
      'meta[name="description"]'
    )

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }

    meta.content = description

    let favicon = document.querySelector(
      'link[rel="icon"]'
    )

    if (!favicon) {
      favicon = document.createElement('link')
      favicon.rel = 'icon'
      document.head.appendChild(favicon)
    }

    favicon.href = '/suzumori-favicon.png'

    return () => {
      document.title = 'ちぃちぃトレジャーズ'
      favicon.href = '/favicon.png'
    }
  }, [])

  return (
    <div className="site suzumori-page">
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
          </nav>
        </div>
      </header>

      <main>
        <section className="suzumori-hero">
          <div className="suzumori-hero-image">
            <img
              src={projectSuzumoriFeatured}
              alt="鈴守神社～妖怪異変録～"
            />
          </div>

          <div className="suzumori-hero-content">
            <p className="section-label">
              FIRST TITLE / DEVELOPING
            </p>

            <h1>
              <span>鈴守神社</span>
              <span>～妖怪異変録～</span>
            </h1>

            <p className="suzumori-catch">
              かわいい巫女と妖怪たちが駆ける、
              <br />
              和風アクションシューティング。
            </p>

            <div className="featured-meta">
              <span>
                主人公：鈴（りん）
              </span>

              <span>
                ジャンル：和風アクションシューティング
              </span>

              <span>
                開発状況：開発中
              </span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner suzumori-info">
            <p className="section-label">
              STORY
            </p>

            <h2>
              妖怪異変の始まり
            </h2>

            <p>
              鈴守神社を舞台に、
              次々と巻き起こる妖怪たちの異変。
            </p>

            <p>
              主人公の巫女・鈴（りん）は、
              神社と人々を守るため、
              妖怪たちが引き起こす異変へ立ち向かいます。
            </p>

            <p>
              かわいい妖怪たち、
              和の世界観、
              爽快なアクションと弾幕。
            </p>

            <p>
              ちぃちぃトレジャーズ第一作目として
              現在開発中です。
            </p>
          </div>
        </section>

        <section className="section suzumori-feature-section">
          <div className="section-inner">
            <p className="section-label">
              GAME FEATURES
            </p>

            <h2>
              ゲームの特徴
            </h2>

            <div className="suzumori-feature-grid">
              <article>
                <span>01</span>
                <h3>和風アクション</h3>
                <p>
                  巫女・鈴を操作して、
                  妖怪たちとの戦いを爽快に楽しめます。
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>個性豊かな妖怪たち</h3>
                <p>
                  かわいいものから恐ろしいものまで、
                  さまざまな妖怪が登場します。
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>成長する主人公</h3>
                <p>
                  ステージを進めながら鈴を強化し、
                  より強大な妖怪異変へ挑みます。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner suzumori-status-box">
            <p className="section-label">
              DEVELOPMENT STATUS
            </p>

            <h2>
              現在開発中
            </h2>

            <p>
              ゲーム内容、キャラクター、ステージ、
              演出などを順次制作しています。
            </p>

            <a
              href="/"
              className="featured-link"
            >
              ちぃちぃトレジャーズへ戻る →
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
          © 2026 CHII CHII TREASURES
        </p>
      </footer>
    </div>
  )
}

export default Suzumori