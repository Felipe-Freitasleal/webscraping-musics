import puppeteer from "puppeteer";
// import { DBquerys } from "../db/DBquerys.js";

export async function getMusics(link, id) {
  const chromeOptions = {
    headless: "new",
    slowMo: 10,
  };

  const browser = await puppeteer.launch(chromeOptions);
  const page = await browser.newPage();

  await page.goto(`${link}`);
  await page.setViewport({ width: 1440, height: 3000 });

  await new Promise((e) => setTimeout(e, 3000));

  const getNames = await page.$$(
    "td[style='text-align: left; vertical-align: top;']"
  );

  const getDuration = await page.$$(
    "td[style='padding-right: 10px; text-align: right; vertical-align: top;']"
  );
  const listNames = [];
  const listDuration = [];

  if (getNames[0]) {
    for (let i = 0; getNames.length > i; i++) {
      const text = await page.evaluate(
        (element) => element.innerText,
        getNames[i]
      );

      listNames.push(text);
    }
    console.log(listNames);
  } else {
    console.log("Nenhum elemento encontrado.");
  }

  if (getDuration[0]) {
    for (let i = 0; getDuration.length > i; i++) {
      if (i % 2 !== 0) {
        const text = await page.evaluate(
          (element) => element.innerText,
          getDuration[i]
        );

        listDuration.push(text);
      }
    }
    console.log(listDuration);
  } else {
    console.log("Nenhum elemento encontrado.");
  }

  await browser.close();

  return `Musicas upadas com sucesso no album com id ${id}`;
}

// const nodeList = document.querySelectorAll('.Type__TypeElement-sc-goli3j-0.fZDcWX.t_yrXoUO3qGsJS4Y6iXX.standalone-ellipsis-one-line');
// const nameItem1 = nodeList[0].innerText;
// console.log(nameItem1);
