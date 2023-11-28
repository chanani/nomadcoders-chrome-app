const quotes = [
  {
    quote : "성공은 꿈꾸고, 믿고, 대담해지고, 실천하는데서 오는 것이다.",
    author : "존 디줄리어스 3세",
  },
  {
    quote : "준비하지 않은 자는 기회가 와도 소용없다.",
    author : "알렉시스 드 토크빌",
  },
  {
    quote : "불가능한 일을 해보는 것은 신나는 일이다.",
    author : "월트 디즈니",
  },
  {
    quote : "당신이 포기할 때, 나는 시작한다.",
    author : "엘론 머스크",
  },
  {
    quote : "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author : "마이클 조던",
  },
  {
    quote : "할 수 있다고 믿는 사람은 결국 그렇게 된다.",
    author : "샤론 드골",
  },
  {
    quote : "삶은 당신이 만드는 것이다. 이전에도 그랬고 앞으로도 그럴 것이다.",
    author : "그랜마 모세",
  },
  {
    quote : "꿈이 없다면 아무 일도 일어나지 않는다.",
    author : "칼 샌드버그",
  },
  {
    quote : "자기 신뢰 없이는 성공하지 못한다.",
    author : "랄프 왈도 에머슨",
  },
  {
    quote : "모험은 그 자체만으로도 해볼 만한 가치가 있다.",
    author : "아멜리아 에어하트",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;