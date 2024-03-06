import { appInfo } from './appInfo.js';
import { editorActions } from './editorActions.js';
import { listeners } from './listen.js';
const editor = document.querySelector('#editor');
const numberSlider = document.querySelector('#numberSlider');
editor.innerHTML = `<div id="muse" style="position: absolute;padding: 0px;">|</div>`
const muse = document.querySelector('#muse');
muse.style.padding = `5px 0px`
// muse.style.transform = `translateX(1px)`
const allEditorActionkeys = `q w e r t y u i o p a s d f g h j k l z x c v b n m Q W E R T Y U I O P A S D F G H J K L Z X C V B N M 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) Meta ArrowUp ArrowDown ArrowRight ArrowLeft Escape Metac [ ] { } | < > . , ? / - = _ + \` ~ \\ `;
editorActions.CompleteProcedures.makeLine(appInfo.lineNum);
//console.log("🚀 ~ appInfo.lineNum:", appInfo.lineNum)

// function writeLineNumber(nline) {
//     numberSlider.innerHTML += `<div id="sln${nline}" style="height: 30px;">${nline}</div>`
// }

// function makeLine(nline) {
//     appInfo.line = document.createElement('div'); // Create a line element
//     appInfo.line.id = `l${nline}`;
//     appInfo.line.style.height = `30px`;
//     editor.appendChild(appInfo.line);
//     appInfo.wordNum = 1;
//     writeLineNumber(appInfo.lineNum);
//     makeWord(appInfo.wordNum);
// }

// function makeWord(nword) {
//     document.addEventListener('keydown', function listenToMake(e) {
//         appInfo.line = document.getElementById(`l${appInfo.lineNum}`);
//         if (e.keyCode >= 21 && e.keyCode <= 126) {
//             appInfo.line.innerHTML += `<span id='l${appInfo.lineNum}w${nword}'>${e.key}</span>`;
//             document.removeEventListener('keydown', listenToMake);
//             // Ensure write is called to set up its listener
//             write();
//         } else if (e.key === 'Enter') {
//             document.removeEventListener('keydown', listenToMake);
//             appInfo.lineNum++;
//             makeLine(appInfo.lineNum);
//         }
//     });
// }
// let ac = 0;
// let r
// let presed = false;
// function SpaceKeyactionDecider(e){
//     // r = (ac === 1) ? 'commandMode' : 'Space' 
//     console.log('r')
//     presed = false;
// };
document.addEventListener(`keydown` , function actionDecider(e) {
        if (e.code === `Enter`) {
            ++appInfo.lineNum;
            appInfo.musex = 0;
            editorActions.CompleteProcedures.curserMove('Down');
            editorActions.CompleteProcedures.makeLine(appInfo.lineNum);
        }else if(e.code === `Space`){
            editorActions.CompleteProcedures.curserMove('Right');
            editorActions.CompleteProcedures.write.writeSpace();
        }else if(e.code.search('Arrow') != -1){
            let arrow = e.code.substring(5,10);
            editorActions.CompleteProcedures.curserMove(arrow);
        }else{
            editorActions.CompleteProcedures.curserMove('Right');
            editorActions.CompleteProcedures.write.writeLater(e.key);
        }
})


// function write() {
//     document.addEventListener('keydown', function listenToWrite(e) {
//         // Use the outer n variable here
//         appInfo.word = document.getElementById(`l${appInfo.lineNum}w${appInfo.wordNum}`);
//         if (e.keyCode >= 21 && e.keyCode <= 126) {
//             if (e.keyCode !== 32) {
//                 appInfo.word.innerHTML += e.key; // Correct property name
//                 //console.log(appInfo)
//             } else {
//                 // Correct property name
//                 appInfo.line.innerHTML += `<span id='l${appInfo.lineNum}w${appInfo.wordNum}'>&nbsp;</span>`;
//                 appInfo.wordNum++;
//                 document.removeEventListener('keydown', listenToWrite);
//                 makeWord(appInfo.wordNum);
//             }
//         }else if (e.key === 'Enter') {
//             document.removeEventListener('keydown', listenToWrite);
//             appInfo.lineNum++;
//             makeLine(appInfo.lineNum);
//         }
//     });
// }


// function k() {
//     console.log('yes')
// }
// listeners.listenToKey('listenOne',document,'keydown','g',k,2)




//FIXME:
// document.addEventListener('mousedown', (e) =>{
//     // let musey = (Math.floor(e.clientY / 30)) * 30
//     // let musex = (Math.floor((e.clientX - 100) / 10)) * 10
//     console.log('d',e.x);
//     // muse.style.top = `${musey}px`;
//     // muse.style.left = `${musex}px`;
// })

editor.addEventListener('mousedown', (e) =>{
    appInfo.musey = (Math.floor(e.clientY / 30)) * 30
    appInfo.musex = (Math.floor((e.clientX - 100) / 10)) * 10
    // console.log('e',e.x);
    muse.style.top = `${appInfo.musey}px`;
    muse.style.left = `${appInfo.musex}px`;
})

//TODO:
// setInterval(function curserFlick() {
//     if(cFlick  === 1) { 
//     muse.style.display = 'none' ; 
//     cFlick = 0;
//     }else{
//     muse.style.display = 'block';
//     cFlick = 1;
// }
// },500)