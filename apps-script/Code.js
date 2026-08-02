function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function doGet() {
  return HtmlService.createTemplateFromFile("Home")
    .evaluate()
    .setTitle("Nainika English Vocabulary");
}

function getCategories() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Categories");

  const values = sheet.getDataRange().getValues();

  const headers = values.shift();

  return values.map(r => {

    let o = {};

    headers.forEach((h,i)=>o[h]=r[i]);

    return o;

  });

}