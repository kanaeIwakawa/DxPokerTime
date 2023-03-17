function myFunction() {

    //アクティブシートを取得して変数sheetに格納
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

}

function sitid() {

    const ss = SpreadsheetApp.openById('1PWVHE2uFZBDkiIh0wmWJSq9F5aoB1I7wslUWxBtR2L8');

    const sheet = ss.getSheetByName()[0];

}

function shturl() {

    //シートURLで取得して変数「ss」に格納
    const ss = SpreadsheetApp
        .openByUrl('https://docs.google.com/spreadsheets/d/1PWVHE2uFZBDkiIh0wmWJSq9F5aoB1I7wslUWxBtR2L8/edit#gid=0');

    //取得したシートURLのシート0番目でシートを取得
    const sheet = ss.getSheets()[0];

}
