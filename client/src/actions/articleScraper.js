import axios from "axios";
import { SCRAPE_ARTICLES } from "./types";
import cheerio from "cheerio";

export const scrapeArticles = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://jerseydigs.com/"
    );
    const $ = cheerio.load(await res.data);
    let articleTitles = [];
    let articleLinks = [];
    let imgLinks = [];
    let arr = [];
    let result = { title: "", imgs: "", links: "" };

    $("div.td-module-container").each(function(i, element) {
      if (articleTitles.length < 3) {
        articleTitles.push(
          $(this)
            .children("div.td-module-meta-info")
            .children("h3.entry-title")
            .text()
        );
        console.log(articleTitles);
      }
    });

    $("h3.entry-title").each(function(i, element) {
      if (articleLinks.length < 3) {
        articleLinks.push(
          $(this)
            .children("a")
            .attr("href")
        );
      }
    });

    $("span.entry-thumb").each(function(i, element) {
      if (imgLinks.length < 3) {
        imgLinks.push($(this).css(["background-image"]));
      }
    });

    for (let x = 0; arr.length < 3; x++) {
      console.log(articleTitles[x]);
      result = {
        title: articleTitles[x],
        imgs: imgLinks[x],
        links: articleLinks[x]
      };
      arr[x] = result;
      console.log(arr);
    }

    console.log(arr);

    dispatch({
      type: SCRAPE_ARTICLES,
      payload: arr
    });
  } catch (err) {
    console.log("errors");
  }
};
