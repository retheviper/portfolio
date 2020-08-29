import PropTypes from 'prop-types'
import React from 'react'
import pic_coffee from '../images/pic_coffee.jpg'
import pic_excelweaver from '../images/pic_excelweaver.jpg'
import pic_character from '../images/pic_character.jpg'
import pic_seworld from '../images/pic_seworld.jpg'
import pic_write from '../images/pic_write.jpg'
import Video from './Video'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic_coffee} alt="" />
          </span>
          <p>
            韓国で日本語と韓国語教育を専攻し、日本語の翻訳・研究・教育に従事しました。
            韓国放送通信大学のティーティングアシスタントとして在職中に、知識の伝達という
            教育の本質は、対面でなくデジタル化・永続化したデータとして成すべきことと
            思い、その根幹となる技術の必要性を感じました。
          </p>
          <p>
            以後、韓国貿易協会のソフトウェアエンジニア養成課程のSCIT
            Masterコースに入学。
            コースの中では日本の応用情報処理技術者に対応する情報処理技士を取得し、
            Java、Spring、JavaScript、jQuery、MyBatisなどを学びました。
            現在は努力を認めていただき、2019年から東京の某IT企業にてシステムエンジニアとして在職中です。
          </p>
          <p>
            仕事としては主にJavaとSpring
            Bootによるサーバサイド共通部品を作っていますが、
            フロントエンドやモバイルアプリ、デスクトップアプリの開発にも興味を持っています。
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work: ExcelWeaver</h2>
          <span className="image main">
            <img src={pic_excelweaver} alt="ExcelWeaver" />
          </span>
          <p>
           Javaを通じてExcelファイルに大量のデータを書き込んだり、読み込むためのライブラリです。
           普通のDTOクラスに、アノテーションでシートのヘッダーの意味を与えると
           Excelにデータを書き込むことも、読み込んだデータをDTOにマッピングすることも簡単です。
          </p>
          <p>
            仕事で作っていたExcel管理ライブラリを、ソースコードの重複なしにして、より単純化・軽量化して
            作っています。MITライセンスとして公開していますので、ご自由にお使いください。PRも歓迎いたします。
          </p>
          <p>
            ソースコードは
            <a href="https://github.com/retheviper/ExcelWeaver">こちら</a>
          </p>
          <h2 className="major">Work: JLPT Test</h2>
          <span className="image main">
            <img src={pic_character} alt="JLPT Test" />
          </span>
          <p>
            Javaを学び、初めて完成したアプリケーション。デスクトップアプリの完成を目標として、
            JavaFXを独学しGUIを実現しました。また、マルチスレッドによる音声ファイルの再生と、
            プログレスバーのリアルタイム更新も実現しています。
          </p>
          <p>
            日本語能力試験(JLPT)の過去問を持って、模擬試験を行うことができるプログラムで
            管理者モードでは問題と問題に使われる画像や音声の登録ができます。受験者モードでは、
            管理者が登録した問題で受験し、結果を出力してもらうことができます。
          </p>
          <p>
            ソースコードは
            <a href="https://github.com/retheviper/JLPTTest">こちら</a>
          </p>
          <h2 className="major">Work: SE World</h2>
          <span className="image main">
            <img src={pic_seworld} alt="SE World" />
          </span>
          <p>
            4人チームのリーダーとして開発に参加したプロジェクトです。Open
            APIからの情報取得、 Google
            MapやJavaScriptのライブラリ活用、ページングの実現という技術的なゴールと、ソーシャル
            ネットワークサービスとしてのユーザーエクスペリエンスの両立を試すためのプロジェクトでした。
            以下からプロジェクトの紹介の動画をご覧ください。
          </p>
          <center>
            <Video
              videoSrcURL="https://www.youtube.com/embed/KamwQ8SAFhE"
              videoTitle="SE World"
            />
          </center>
          <p />
          <p>
            韓国の公共APIから情報を定期的に取得し、展示会の
            開かれる国、場所、日付の情報を提供します。ユーザは参加したい展示会の情報を共有したり、
            参加後のレビューを書くことができます。私はCKEditorを使用した記事の作成、DataTables
            を利用した一覧表示・ページング・検索機能などを担当しています。
          </p>
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <span className="image main">
            <img src={pic_write} alt="" />
          </span>
          <p>
            ITの業界に転職してから学んできたものをまとめた技術系ブログを書いています。
            ネタは特に決まったことはなく、Java、Spring、JavaScript、TypeScript、
            Jenkins、REST
            API、Python、Gradleなど個人的に興味を持ったものに対して
            ポストを書いています。
          </p>
          <p>
            リンクは
            <a href="https://retheviper.github.io">こちら</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/%E8%8B%B1%E6%96%8C-%E9%87%91-6736ba194"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/retheviper"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
