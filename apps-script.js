
function doPost(e){

  const sheet =
    SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("Ships");

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.arrival,
    data.departure,
    data.port
  ]);

  return ContentService
    .createTextOutput("success");
}
