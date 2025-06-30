import { useState } from 'react';
import reactLogo from './assets/dots.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            style={{ width: '510px', height: 'auto' }}
          />
        </a>
      </div>
      <h1>内田 朝陽</h1>
      <div className="card">
        <p>
          <code>Node.js</code>と<code>React</code>で作って<code>AWS</code>でデプロイしてみました。
        </p>
      </div>

      <div className="affiliation">
        <div className="myphoto">
          <a href="https://x.com/talesof_therays/status/1505469201884057600/photo/1">
            <img alt="襲爪雷斬" width="100" src="./image/raizan.png" />
          </a>
        </div>
        <div className="myinfo">
          <h2>出身：熊本</h2>
          <h3>学部：情理(2回~) 経済(1回)</h3>
        </div>
      </div>

      <div className="contentArea_white">
        <div className="box">
          <div className="title">
            <h2 className="titleSentence">テイルズオブシリーズ</h2>
          </div>
          <p className="contentInfo">
            <strong>
              デスティニー、ヴェスペリア、ザレイズが一番好きです。
              <br />
              ザレイズをサ終させたバンダイナムコを許しません
            </strong>
          </p>
        </div>
      </div>

      <div className="contentArea_color">
        <div className="box">
          <div className="title">
            <h2 className="titleSentence">好きなこと</h2>
          </div>
          <p className="contentInfo">
            <strong>
              山登ったりしてます。サイクリングもしてます。
              <br />
              他に野球やイナズマイレブンなどプレイしてます。
              <br />
              たまにポケモン、スマブラ、マイクラ、FF4、GV、その他JRPG
              <br />
              などやったりしています。
            </strong>
          </p>
        </div>
      </div>

      <div className="contentArea_white">
        <div className="box">
          <div className="title">
            <h2 className="titleSentence">好きなアニメ</h2>
          </div>
          <p className="contentInfo">
            <strong>
              イナイレ、テイルズ、MIX
              <br />
              スレイヤーズ、ゆるキャン△、ヤマノススメ
            </strong>
          </p>
        </div>
      </div>

      <div className="contentArea_color">
        <div className="box">
          <div className="title">
            <h2 className="titleSentence">生息地</h2>
          </div>
          <table border="3" align="center" width="50%">
            <tbody>
              <tr>
                <th>
                  <div className="seisokuchibar">エリア</div>
                </th>
                <th>
                  <div className="seisokuchibar">出現率</div>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="seisokuchi">月曜PM・金曜AS1</div>
                </th>
                <th><font color="black">シンボル</font></th>
              </tr>
              <tr>
                <th>
                  <div className="seisokuchi">14号館(情理)</div>
                </th>
                <th>
                  <font color="black">◎</font><span style={{ color: 'grey' }}>[朝昼夕]</span>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="seisokuchi">いえ・ぶしつ</div>
                </th>
                <th><font color="black">○</font></th>
              </tr>
              <tr>
                <th>
                  <div className="seisokuchi">そと</div>
                </th>
                <th>
                  <font color="black">△</font><span style={{ color: 'grey' }}>[晴]</span>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="seisokuchi">やま</div>
                </th>
                <th>
                  <font color="black">▲</font><span style={{ color: 'grey' }}>[晴]</span>
                </th>
              </tr>
            </tbody>
          </table>
          <br></br>
        </div>
      </div>

      <div className="contentArea_white">
        <div className="box">
          <div className="title">
            <h2 className="titleSentence">部活・サークル等</h2>
          </div>
          <p className="contentInfo">
            <strong>C.A.C.・<s>軟式野球サークル</s>・あまてく・探検部</strong>
          </p>
        </div>
      </div>

      <div className="contentArea_color">
        <div className="box">
          <div className="title">
            <h2 className="titleSentence">今年度の目標</h2>
          </div>
          <p className="contentInfo">
            <strong>
              GPA3以上、なんか作る、なんか習得する
              <br />
              夏の<a href="https://www.city.maibara.lg.jp/mtibuki/about_tozan/index.html">伊吹山</a>・六甲山・金剛山、雪の金剛山・蓬莱山・伊吹山
              <br />
              10キロマラソン・<a href="https://www.biwako1.jp/basic/plan">ビワイチ</a>(達成)・<a href="https://route3776.jp">富士3776</a>
              <br />
              動画制作、インターン、野球
            </strong>
          </p>
        </div>
      </div>
      <div className="contentArea_white">
      <div className="center">
        <a href="https://tales-ch.jp/special_index.php?ms_id=227">
          <img alt="ザレイズありがとう" height="400" src="./image/t-therays.png" />
        </a>
      </div>

      <div className="meiki">
        <p>author : Uchida Asahi</p>
        <p>version : 1.0.2</p>
        <p>date : 2025/07/01 (created: 2025/06/20)</p>
      </div>
      </div>
    </>
  );
}

export default App;
