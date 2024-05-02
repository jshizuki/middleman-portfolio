// This is where it all goes :)

document.addEventListener("DOMContentLoaded", function () {
  let hoverToJapanese = document.getElementById("hover-to-japanese");
  let intro = document.getElementById("intro");

  let isEnglish = true;

  const englishText = `Originally from Hong Kong, I've been based in Tokyo since 2010.  I am a full-stack web developer with a focus on <b>Ruby</b> and the <b>Ruby on Rails</b> framework.
  <br><br>I also have JLPT N1, and am now a permanent resident of Japan.
  <br><br>Currently, I'm managing a stock management/ invoice-creating web application for a Hong Kong-based ceramist, while spending my time working on <b>React</b>.</p>`

  const japaneseIntro = `香港でファッションデザインの修士号を取得した後、日本に移住し、永住者として東京に生活しているジョイスと申します。
  <br><br>Ruby on RailsフレームワークとReactを中心に活躍しているフルスタックエンジニアです。日本語能力試験１級を取得しております。
  400時間のウェブ開発コースを修了した後に、実務経験としてアート系の在庫管理・請求書作成のウェブアプリを開発しました。今後、日本のIT業界で力を発揮したいと思います！よろしくお願いします。`;

  hoverToJapanese.addEventListener("click", function (event) {
    if (isEnglish) {
      intro.innerHTML = japaneseIntro;
      hoverToJapanese.innerHTML = "<b>Click to switch to English</b>"
    } else {
      intro.innerHTML = englishText;
      hoverToJapanese.innerHTML = "<b>日本語はここにクリックしてね！</b>"
    }
    isEnglish = !isEnglish;
  });

});
