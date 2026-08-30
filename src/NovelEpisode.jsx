import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import './App.css'
import './NovelEpisode.css'

import logoPaw from './assets/logo-paw.png'
import episodeHero from './assets/novel-episode01-hero.png'

import episodes from './novel/episodes'

const episodeFiles = import.meta.glob(
  './novel/*.txt',
  {
    query: '?url',
    import: 'default',
  }
)

function NovelEpisode() {
  const { episodeId } = useParams()

  const [text, setText] = useState('')
  const [bookmark, setBookmark] = useState(null)
  const [bookmarkMessage, setBookmarkMessage] = useState('')

  const publishedEpisodes = useMemo(
    () =>
      episodes.filter(
        (episode) => episode.status === 'published'
      ),
    []
  )

  const episodeIndex = publishedEpisodes.findIndex(
    (episode) => episode.id === episodeId
  )

  const episode =
    episodeIndex >= 0
      ? publishedEpisodes[episodeIndex]
      : null

  const previousEpisode =
    episodeIndex > 0
      ? publishedEpisodes[episodeIndex - 1]
      : null

  const nextEpisode =
    episodeIndex >= 0 &&
    episodeIndex < publishedEpisodes.length - 1
      ? publishedEpisodes[episodeIndex + 1]
      : null

  const bookmarkKey = episode
    ? `suzumori-novel-${episode.id}-bookmark`
    : null

  useEffect(() => {
    if (!episode) {
      document.title =
        '小説 | 鈴守神社～妖怪異変録～'

      return
    }

    document.title =
      `${episode.number}「${episode.title}」 | 鈴守神社～妖怪異変録～`

    const filePath = `./novel/${episode.file}`
    const loadFile = episodeFiles[filePath]

    if (!loadFile) {
      setText('本文ファイルが見つかりませんでした。')
      return
    }

    loadFile()
      .then((url) => fetch(url))
      .then((response) => {
        if (!response.ok) {
          throw new Error('本文を取得できませんでした。')
        }

        return response.text()
      })
      .then((data) => {
        const formattedText = data
          .replace(/\r\n/g, '\n')
          .replace(/\n{2,}/g, '\n')

        setText(formattedText)
      })
      .catch(() => {
        setText('本文を読み込めませんでした。')
      })

    if (bookmarkKey) {
      const savedBookmark =
        localStorage.getItem(bookmarkKey)

      if (savedBookmark !== null) {
        const parsedBookmark =
          Number(savedBookmark)

        if (!Number.isNaN(parsedBookmark)) {
          setBookmark(parsedBookmark)
        }
      }
    }

    return () => {
      document.title =
        'ちぃちぃトレジャーズ'
    }
  }, [episode, bookmarkKey])

  const saveBookmark = () => {
    if (!bookmarkKey) return

    const position = window.scrollY

    localStorage.setItem(
      bookmarkKey,
      String(position)
    )

    setBookmark(position)

    setBookmarkMessage(
      'ここにしおりを挟みました'
    )

    window.setTimeout(() => {
      setBookmarkMessage('')
    }, 2500)
  }

  const jumpToBookmark = () => {
    if (bookmark === null) return

    window.scrollTo({
      top: bookmark,
      behavior: 'smooth',
    })
  }

  if (!episode) {
    return (
      <div className="site novel-episode-page">
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
              <a href="/suzumori">
                GAME
              </a>
              <a href="/suzumori/novel">
                NOVEL
              </a>
            </nav>
          </div>
        </header>

        <main className="novel-episode-main">
          <article className="novel-episode-body">
            <div className="novel-text">
              <div className="novel-chapter-title">
                この話は公開されていません
              </div>
            </div>

            <div className="novel-episode-navigation">
              <a href="/suzumori/novel">
                ← 目次へ戻る
              </a>
            </div>
          </article>
        </main>
      </div>
    )
  }

  return (
    <div className="site novel-episode-page">
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
            <a href="/suzumori">
              GAME
            </a>
            <a href="/suzumori/novel">
              NOVEL
            </a>
          </nav>
        </div>
      </header>

      <div className="novel-bookmark-controls">
        {bookmark !== null && (
          <button
            type="button"
            className="
              novel-bookmark-button
              bookmark-return
            "
            onClick={jumpToBookmark}
          >
            📖 しおりから読む
          </button>
        )}

        <button
          type="button"
          className="
            novel-bookmark-button
            bookmark-save
          "
          onClick={saveBookmark}
        >
          🔖 ここにしおり
        </button>
      </div>

      {bookmarkMessage && (
        <div className="novel-bookmark-message">
          {bookmarkMessage}
        </div>
      )}

      <main className="novel-episode-main">
        <article className="novel-episode-body">

          <div className="novel-episode-hero">
            <img
              src={episodeHero}
              alt={
                `小説版 鈴守神社～妖怪異変録～ ` +
                `${episode.number} ${episode.title}`
              }
              className="
                novel-episode-hero-image
              "
            />
          </div>

          <div className="novel-text">
            {text
              .split('\n')
              .map((line, index) => {
                const trimmed =
                  line.trim()

                if (
                  trimmed ===
                  episode.number
                ) {
                  return (
                    <div
                      key={index}
                      className="
                        novel-chapter-number
                      "
                    >
                      {episode.number}
                    </div>
                  )
                }

                if (
                  trimmed ===
                  `【${episode.title}】`
                ) {
                  return (
                    <div
                      key={index}
                      className="
                        novel-chapter-title
                      "
                    >
                      【{episode.title}】
                    </div>
                  )
                }

                return (
                  <div key={index}>
                    {line || '\u00A0'}
                  </div>
                )
              })}
          </div>

          <div className="novel-episode-navigation">
            <div>
              {previousEpisode ? (
                <a
                  href={
                    `/suzumori/novel/` +
                    previousEpisode.id
                  }
                >
                  ← {previousEpisode.number}
                </a>
              ) : (
                <a href="/suzumori/novel">
                  ← 目次へ戻る
                </a>
              )}
            </div>

            <div>
              {nextEpisode ? (
                <a
                  href={
                    `/suzumori/novel/` +
                    nextEpisode.id
                  }
                >
                  {nextEpisode.number} →
                </a>
              ) : (
                <span>
                  次回へ続く
                </span>
              )}
            </div>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <img
          src={logoPaw}
          alt="ちぃちぃトレジャーズ"
          className="footer-logo"
        />

        <p>
          © {new Date().getFullYear()}
          {' '}
          CHII CHII TREASURES
        </p>
      </footer>
    </div>
  )
}

export default NovelEpisode