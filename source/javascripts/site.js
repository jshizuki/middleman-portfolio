// This is where it all goes :)

document.addEventListener("DOMContentLoaded", function () {
  let hoverToJapanese = document.getElementById("hover-to-japanese");
  let intro = document.getElementById("intro");

  let englishText = intro.innerHTML;

  const japaneseIntro = `香港でファッションデザインの修士号を取得した後、日本に移住し、永住者として東京に生活しているジョイスです。
  <br><br>Ruby on RailsフレームワークとReactを中心に活躍しているフルスタックエンジニアです。日本語能力試験１級を取得しております。
  400時間のウェブ開発コースを修了した後に、実務経験としてアート系の在庫管理・請求書作成のウェブアプリを開発しました。今後、日本のIT業界で力を発揮したいと思います！どうぞよろしくお願いします。`;

  hoverToJapanese.addEventListener("mouseenter", function (event) {
    intro.innerHTML = japaneseIntro;
  });

  hoverToJapanese.addEventListener("mouseleave", function (event) {
    hoverToJapanese.innerHTML = "<b>日本語はここにホバーしてね！</b>";
    intro.innerHTML = englishText;
  });
});
