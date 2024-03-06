import { appInfo } from './appInfo.js';
const languageSpcileChars = '<'
//=======|
function CPmakeWord(nword) {
        appInfo.line = document.getElementById(`l${appInfo.lineNum}`);
        // appInfo.wordNum++;
        appInfo.line.innerHTML += `<span id='l${appInfo.lineNum}w${nword}'></span>`;
            // Ensure write is called to set up its listener
}



//=======|
function SPwriteLineNumber(nline) {
    numberSlider.innerHTML += `<div id="sln${nline}" style="height: 30px;">${nline}</div>`
}




//=======|
function CPmakeLine(nline) {
    // appInfo.lineNum++;
    appInfo.line = document.createElement('div'); // Create a line element
    appInfo.line.id = `l${nline}`;
    appInfo.line.style.height = `30px`;
    editor.appendChild(appInfo.line);
    appInfo.wordNum = 1;
    editorActions.subProcedures.writeLineNumber(appInfo.lineNum);
    editorActions.CompleteProcedures.makeWord(appInfo.wordNum);
}
//---------|
function SPmakeLine(nline) {
    appInfo.line = document.createElement('div'); // Create a line element
    appInfo.line.id = `l${nline}`;
    appInfo.line.style.height = `30px`;
    editor.appendChild(appInfo.line);
    appInfo.wordNum = 1;
}




//=======|
let i = 0;
function CPwriteSpace() {
    // console.log(appInfo.previousLater)
    if (appInfo.previousLater == '&nbsp;') {
        editorActions.subProcedures.write('&nbsp;');
        console.log("🚀 ~ CPwriteSpace ~ nbsp:", '1nbsp')
    }else{
        ++appInfo.wordNum;
        editorActions.CompleteProcedures.makeWord(appInfo.wordNum);
        editorActions.subProcedures.write('&nbsp;');
        i = 1;
    }
}
function SPwrite(text) {
            appInfo.word = document.getElementById(`l${appInfo.lineNum}w${appInfo.wordNum}`);
            appInfo.word.innerHTML += text; // Correct property name
            appInfo.previousLater = text;
            // console.log(appInfo.word);
}
function CPwriteLater(text) {
    if (i === 1) {
        appInfo.wordNum++;
        editorActions.CompleteProcedures.makeWord(appInfo.wordNum)
        i = 0;
    }
    editorActions.subProcedures.write(text);
    // let cFlick = 1;
    //TODO: muse.style.display = 'block';
}
function SPcurserMoveUsingNumbers(musex,musey) {
    muse.style.left = `${musex}px`;
    muse.style.top = `${musey}px`;
}
function CPcurserMove(dierct) {
    switch (dierct) {
        case 'Right': 
            appInfo.musex += 10;
            break;
        case 'Left': 
            appInfo.musex -= 10;
            break;
        case 'Up': 
            appInfo.musey -= 30;
            // appInfo.lineNum -= 1;
            break;
        case 'Down': 
            appInfo.musey += 30;
            // appInfo.lineNum += 1;
            break;
        default: 
        appInfo.musex = appInfo.musex;
        break;
    }
    editorActions.subProcedures.curserMoveUsingNumbers(appInfo.musex,appInfo.musey);
}

const editorActions = {
    "CompleteProcedures" :{
        'makeLine' : CPmakeLine,
        'makeWord': CPmakeWord,
        'write' : {
            'writeLater': CPwriteLater,
            'writeSpace': CPwriteSpace,
        },
        'curserMove' : CPcurserMove,
    },
    'subProcedures' : {
        'writeLineNumber' : SPwriteLineNumber,
        'makeLine': SPmakeLine,
        'write': SPwrite,
        'curserMoveUsingNumbers' : SPcurserMoveUsingNumbers,
    },
};
export { editorActions };