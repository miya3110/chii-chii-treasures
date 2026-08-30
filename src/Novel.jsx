import { useEffect } from 'react'

import './App.css'

import logoPaw from './assets/logo-paw.png'
import novelCover from './assets/novel-cover.png'

import episodes from './novel/episodes'

function Novel() {
  useEffect(() => {
    document.title =
      '小説版 鈴守神社～妖怪異変録～ | ちぃちぃトレジャーズ'

    let descriptionMeta =
      document.querySelector('meta[name="description"]')

    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.name = 'description'
      document.head.appendChild(descriptionMeta)
    }

    descriptionMeta.content =
      'ちぃちぃトレジャーズ公式Web小説「鈴守神社～妖怪異変録～」。主人公・鈴と妖怪たちの物語を、挿絵付きで連載しています。'

    return () => {
      document.title = 'ちぃちぃトレジャーズ'
    }
  }, [])

  const firstPublishedEpisode = episodes.find(
    (episode) => episode.status === 'published'
  )

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

            <div
              className="brand-text notranslate"
              translate="no"
            >
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
            <a href="/suzumori/novel">NOVEL</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section novel-hero-section">
          <div className="section-inner novel-hero">
            <div className="novel-cover-wrap">
              <a
                href={
                  firstPublishedEpisode
                    ? `/suzumori/novel/${firstPublishedEpisode.id}`
                    : '/suzumori/novel'
                }
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
                OFFICIAL WEB NOVEL
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

              <p className="novel-description">
                ちぃちぃトレジャーズ公式版では、
                本文とともに挿絵やビジュアルを掲載し、
                Webならではの物語体験をお届けします。
              </p>

              <div className="novel-status">
                <span>連載中</span>
                <span>公式Web小説</span>
                <span>挿絵対応</span>
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
              {episodes.map((episode) => {
                const isPublished =
                  episode.status === 'published'

                const isWriting =
                  episode.status === 'writing'

                return (
                  <article
                    key={episode.id}
                    className={
                      isWriting
                        ? 'novel-episode-card novel-episode-card-writing'
                        : 'novel-episode-card'
                    }
                  >
                    <span className="novel-episode-number">
                      {episode.number}
                    </span>

                    <div className="novel-episode-info">
                      <h3>
                        {isPublished
                          ? episode.title
                          : '執筆中'}
                      </h3>

                      <p>
                        {episode.description}
                      </p>

                      {isPublished &&
                        episode.publishedAt && (
                          <p className="novel-episode-date">
                            公開日：
                            {episode.publishedAt}
                          </p>
                        )}
                    </div>

                    {isPublished ? (
                      <a
                        href={`/suzumori/novel/${episode.id}`}
                        className="novel-episode-link"
                      >
                        読む →
                      </a>
                    ) : (
                      <span className="novel-episode-link novel-episode-link-disabled">
                        COMING SOON
                      </span>
                    )}
                  </article>
                )
              })}
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

            <p>
              ゲーム版と小説版は同じ世界を共有しながら、
              それぞれの表現だからこそ描ける
              『鈴守神社～妖怪異変録～』を展開していきます。
            </p>

            <a
              href="/suzumori"
              className="featured-link"
            >
              GAME版 鈴守神社を見る →
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