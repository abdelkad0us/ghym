import { editorActions } from "./editorActions";
function listenToKey(name,atWhat,keyAction,key,fun,onGeneral,removeListererAfter) {
    atWhat.addEventListener(keyAction, function f(e) {
        console.log("🚀 ~ f ~ e:", e)
        //FIXME:
        if (e.key != key){
            chakForRemove()
            onGeneral(e);
        }else{
            chakForRemove()
            fun(e);
        }
        function chakForRemove() {
            if (removeListererAfter > 0) {
                +removeListererAfter;
                --removeListererAfter;
                if (removeListererAfter === 0) {
                    atWhat.removeEventListener(keyAction, f);
                }
            }
        }
    });
}
// document.addEventListener('keydown', function listenToWrite(e) {
//     // Use the outer n variable here
//     appInfo.word = document.getElementById(`l${appInfo.lineNum}w${appInfo.wordNum}`);
//     if (e.keyCode >= 21 && e.keyCode <= 126) {
//         if (e.keyCode !== 32) {
//             appInfo.word.innerHTML += e.key; // Correct property name
//             console.log(appInfo)
//         } else {
//             // Correct property name
//             appInfo.wordNum++;
//             appInfo.line.innerHTML += `<span id='l${appInfo.lineNum}w${appInfo.wordNum}'>&nbsp;</span>`;
//             appInfo.wordNum++;
//             document.removeEventListener('keydown', listenToWrite);
//             makeWord(appInfo.wordNum);
//         }
//     }else if (e.key === 'Enter') {
//         document.removeEventListener('keydown', listenToWrite);
//         appInfo.lineNum++;
//         makeLine(appInfo.lineNum);
//     }
// });
const listeners = {
    "listenToKey" : listenToKey,
}
export {listeners};