const gpts = [
  {
    title: "Lexi-Coach Alpha",
    description: "語彙学習の定着とリテンションを強化するAIコーチ。",
    url: "https://chatgpt.com/g/g-6833c69a47348191a217be6fdb840c9a-lexi-coach-alpha"
  },
  {
    title: "Vocabulary Dictionary",
    description: "意味・発音・例文・使い方まで全部含んだ究極の辞書形式GPT。",
    url: "https://chatgpt.com/g/g-6831cdb3066881919d2818c1bc137732-vocabulary-dictionary"
  },
  {
    title: "英語長文解説ガイド",
    description: "英文→和訳＋文法構造まで完全分解する読解サポートGPT。",
    url: "https://chatgpt.com/g/g-682ea4414fec8191a3f09c52f7c07f58-ying-yu-chang-wen-jie-shuo-kaito"
  }
];
const container = document.getElementById("gpt-list");
gpts.forEach((gpt, index) => {
  const card = document.createElement("div");
  card.className = "gpt-card";
  card.innerHTML = `
    <h2>${gpt.title}</h2>
    <p>${gpt.description}</p>
    <a href="${gpt.url}" target="_blank">使ってみる</a>
  `;
  container.appendChild(card);
});
