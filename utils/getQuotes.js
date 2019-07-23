const axios = require("axios");
const htmlToText = require("html-to-text");

const genNumSeq = () => {
  const num = Math.floor(Math.random() * 200);
  let primary = 0;
  let secondary = 0;
  let inc = 1;
  for (i = 1; i < 50; i++) {
    primary++;
    secondary = num - inc;
    inc = inc + i;
    if (inc > num) break;
  }
  return [primary, secondary];
};

module.exports = async category => {
  const numSeq = genNumSeq();

  const results = await axios.get(
    `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${
      numSeq[0]
    }`
  );
  const index = numSeq[1];
  const quote = htmlToText.fromString(results.data[index].content, {
    wordwrap: 60
  });
  const author = htmlToText.fromString(results.data[index].title);

  return `
  ${quote}
    -${author}
      `;
};
