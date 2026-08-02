function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function doGet() {
  return HtmlService.createTemplateFromFile("Home")
    .evaluate()
    .setTitle("Nainika English Vocabulary");
}

function getCategories() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Vocabulary");

  const values = sheet.getDataRange().getValues();
  const headers = values.shift();

  const categoryIndex = headers.indexOf("Category");

  const map = {};

  values.forEach(r => {

    const category = r[categoryIndex];

    if (!category) return;

    if (!map[category]) {

      map[category] = {
        Category: category,
        Words: 0
      };

    }

    map[category].Words++;

  });

  return Object.values(map)
    .sort((a,b)=>a.Category.localeCompare(b.Category));

}

function getVocabulary() {

  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Vocabulary");

  const values = sheet.getDataRange().getValues();

  const headers = values.shift();

  return values.map(r => {

    let o = {};

    headers.forEach((h,i)=>o[h]=r[i]);

    return o;

  });

}