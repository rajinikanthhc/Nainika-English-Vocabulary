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

function getLevels() {

  return [

    {id:1,name:"Beginner",emoji:"🌱"},

    {id:2,name:"Reader",emoji:"📘"},

    {id:3,name:"Builder",emoji:"🧩"},

    {id:4,name:"Explorer",emoji:"🔍"},

    {id:5,name:"Master",emoji:"🏆"}

  ];

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