require('../mota-js/styles.css');
require('../pixi/pixi.js');

console.log('loadSecond');
import actions from './libs/actions.js'
import control from './libs/control.js'
import _core from './libs/core.js'
import data from './libs/data.js'
import enemys from './libs/enemys.js'
import events from './libs/events.js'
import extensions from './libs/extensions.js'
import icons from './libs/icons.js'
import items from './libs/items.js'
import loader from './libs/loader.js'
import maps from './libs/maps.js'
import ui from './libs/ui.js'
import utils from './libs/utils.js'
import data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d from 'exports-loader?data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d!../editor/project/data'

function _main() {
    
    //------------------------ 用户修改内容 ------------------------//

    this.version = "2.6.6"; // 游戏版本号；如果更改了游戏内容建议修改此version以免造成缓存问题。

    this.useCompress = false; // 是否使用压缩文件
    // 当你即将发布你的塔时，请使用“JS代码压缩工具”将所有js代码进行压缩，然后将这里的useCompress改为true。
    // 请注意，只有useCompress是false时才会读取floors目录下的文件，为true时会直接读取libs目录下的floors.min.js文件。
    // 如果要进行剧本的修改请务必将其改成false。

    this.bgmRemote = false; // 是否采用远程BGM
    this.bgmRemoteRoot = "https://h5mota.com/music/"; // 远程BGM的根目录

    this.isCompetition = false; // 是否是比赛模式

    this.savePages = 1000; // 存档页数，每页可存5个；默认为1000页5000个存档

    //------------------------ 用户修改内容 END ------------------------//

    this.dom = {
        'body': document.body,
        'gameGroup': document.getElementById('gameGroup'),
        'mainTips': document.getElementById('mainTips'),
        'musicBtn': document.getElementById('musicBtn'),
        'startPanel': document.getElementById('startPanel'),
        'startTop': document.getElementById('startTop'),
        'startTopProgressBar': document.getElementById('startTopProgressBar'),
        'startTopProgress': document.getElementById('startTopProgress'),
        'startTopLoadTips': document.getElementById('startTopLoadTips'),
        'startBackground': document.getElementById('startBackground'),
        'startLogo': document.getElementById('startLogo'),
        'startButtonGroup': document.getElementById('startButtonGroup'),
        'floorMsgGroup': document.getElementById('floorMsgGroup'),
        'logoLabel': document.getElementById('logoLabel'),
        'versionLabel': document.getElementById('versionLabel'),
        'floorNameLabel': document.getElementById('floorNameLabel'),
        'statusBar': document.getElementById('statusBar'),
        'status': document.getElementsByClassName('status'),
        'toolBar': document.getElementById('toolBar'),
        'tools': document.getElementsByClassName('tools'),
        'gameCanvas': document.getElementsByClassName('gameCanvas'),
        'gif': document.getElementById('gif'),
        'gif2': document.getElementById('gif2'),
        'gameDraw': document.getElementById('gameDraw'),
        'startButtons': document.getElementById('startButtons'),
        'playGame': document.getElementById('playGame'),
        'loadGame': document.getElementById('loadGame'),
        'replayGame': document.getElementById('replayGame'),
        'levelChooseButtons': document.getElementById('levelChooseButtons'),
        'data': document.getElementById('data'),
        'ui': document.getElementById('ui'),
        'statusLabels': document.getElementsByClassName('statusLabel'),
        'statusTexts': document.getElementsByClassName('statusText'),
        // 'floorCol': document.getElementById('floorCol'),
        // 'nameCol': document.getElementById('nameCol'),
        // 'lvCol': document.getElementById('lvCol'),
        // 'hpmaxCol': document.getElementById('hpmaxCol'),
        // 'hpCol': document.getElementById('hpCol'),
        // 'manaCol': document.getElementById('manaCol'),
        // 'atkCol': document.getElementById('atkCol'),
        // 'defCol': document.getElementById('defCol'),
        // 'mdefCol': document.getElementById('mdefCol'),
        // 'moneyCol': document.getElementById('moneyCol'),
        // 'experienceCol': document.getElementById('experienceCol'),
        // 'upCol': document.getElementById('upCol'),
        // 'keyCol': document.getElementById('keyCol'),
        // 'pzfCol': document.getElementById('pzfCol'),
        // 'debuffCol': document.getElementById('debuffCol'),
        // 'skillCol': document.getElementById('skillCol'),
        // 'hard': document.getElementById('hard'),
        // 'statusCanvas': document.getElementById('statusCanvas'),
        // 'statusCanvasCtx': document.getElementById('statusCanvas').getContext('2d'),
        'inputDiv': document.getElementById('inputDiv'),
        'inputMessage': document.getElementById('inputMessage'),
        'inputBox': document.getElementById('inputBox'),
        'inputYes': document.getElementById('inputYes'),
        'inputNo': document.getElementById('inputNo'),
        'next': document.getElementById('next')
    };
    this.mode = 'play';
    this.loadList = [
        'loader', 'control', 'utils', 'items', 'icons', 'maps', 'enemys', 'events', 'actions', 'data', 'ui', 'extensions', 'core'
    ];
    this.pureData = [ 
        'data', 'enemys', 'icons', 'maps', 'items', 'functions', 'events', 'plugins'
    ];
    this.materials = [
        'animates', 'enemys', 'hero', 'items', 'npcs', 'terrains', 'enemy48', 'npc48'
    ];

    this.statusBar = {
        'icons': {
            'floor': 0,
            'name': null,
            'lv': 1,
            'hpmax': 2,
            'hp': 3,
            'atk': 4,
            'def': 5,
            'mdef': 6,
            'money': 7,
            'experience': 8,
            'up': 9,
            'book': 10,
            'fly': 11,
            'toolbox': 12,
            'keyboard': 13,
            'shop': 14,
            'save': 15,
            'load': 16,
            'settings': 17,
            'play': 18,
            'pause': 19,
            'stop': 20,
            'speedDown': 21,
            'speedUp': 22,
            'rewind': 23,
            'equipbox': 24,
            'mana': 25,
            'skill': 26,
            'paint': 27,
            'erase': 28,
            'empty': 29,
            'exit': 30,
            'btn1': 31,
            'btn2': 32,
            'btn3': 33,
            'btn4': 34,
            'btn5': 35,
            'btn6': 36,
            'btn7': 37,
            'btn8': 38
        },
    }
    this.floors = {}
    this.canvas = {};

    this.__VERSION__ = "2.6.6";
    this.__VERSION_CODE__ = 99;
}

_main.prototype.init = function (mode, callback) {
    for (var i = 0; i < main.dom.gameCanvas.length; i++) {
        main.canvas[main.dom.gameCanvas[i].id] = main.dom.gameCanvas[i].getContext('2d');
    }
    main.mode = mode;
    //load project
    var mainData = data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d.main;
    for(var ii in mainData)main[ii]=mainData[ii];
    // main.dom.startBackground.src=require("./project/images/"+main.startBackground).default;
    // main.dom.startLogo.style=main.startLogoStyle;
    // main.dom.startButtonGroup.style = main.startButtonsStyle;
    // main.levelChoose.forEach(function(value){
    //     var span = document.createElement('span');
    //     span.setAttribute('class','startButton');
    //     span.innerText=value[0];
    //     (function(span,str_){
    //         span.onclick = function () {
    //             core.events.startGame(str_);
    //         }
    //     })(span,value[1]);
    //     main.dom.levelChooseButtons.appendChild(span);
    // });
    // main.createOnChoiceAnimation();
    
    const core = new _core();
    window.core = core;
    main.core = core;
    core.actions = new actions();
    core.control = new control();
    core.data = new data();
    core.enemys = new enemys();
    core.events = new events();
    core.extensions = new extensions();
    core.icons = new icons();
    core.items = new items();
    core.loader = new loader();
    core.maps = new maps();
    core.ui = new ui();
    core.utils = new utils();
    main.lzw=utils.lzw;
    main.loadFile = {
        sounds: require.context('../editor/project/sounds/', false, /\.(mp3|wav|wma|ogg|ape|acc)$/),
    };
    main.loadFloors(function() {
        var coreData = {};
        ["dom", "statusBar", "canvas", "images", "tilesets", "materials",
            "animates", "bgms", "sounds", "floorIds", "floors"].forEach(function (t) {
            coreData[t] = main[t];
        })
        pixi.event.emit('resize');
        main.core.init(coreData, callback);

        main.core.resize();
    });
}

////// 动态加载所有核心JS文件 //////
_main.prototype.loadJs = function (dir, loadList, callback) {

    // 加载js
    main.setMainTipsText('正在加载核心js文件...')

    if (this.useCompress) {
        main.loadMod(dir, dir, function () {
            callback();
        })
    }
    else {
        var instanceNum = 0;
        for (var i = 0; i < loadList.length; i++) {
            main.loadMod(dir, loadList[i], function (modName) {
                main.setMainTipsText(modName + '.js 加载完毕');
                instanceNum++;
                if (instanceNum === loadList.length) {
                    callback();
                }
            });
        }
    }
}

////// 加载某一个JS文件 //////
_main.prototype.loadMod = function (dir, modName, callback, onerror) {
    var script = document.createElement('script');
    var name = modName;
    script.src = dir + '/' + modName + (this.useCompress?".min":"") + '.js?v=' + this.version;
    script.onload = function () {
        callback(name);
    }
    main.dom.body.appendChild(script);
}

////// 动态加载所有楼层（剧本） //////
_main.prototype.loadFloors = function (callback) {

    // 加载js
    this.setMainTipsText('正在加载楼层文件...')
    if (this.useCompress) { // 读取压缩文件
        var script = document.createElement('script');
        script.src = 'project/floors.min.js?v=' + this.version;
        main.dom.body.appendChild(script);
        script.onload = function () {
            main.dom.mainTips.style.display = 'none';
            callback();
        }
    }
    else {
        for (var i = 0; i < main.floorIds.length; i++) {
            main.loadFloor(main.floorIds[i], function (modName) {
                main.setMainTipsText("楼层 " + modName + '.js 加载完毕');
                if (Object.keys(main.floors).length === main.floorIds.length) {
                    // main.dom.mainTips.style.display = 'none';
                    callback();
                }
            });
        }
    }
}

////// 加载某一个楼层 //////
_main.prototype.loadFloor = function(floorId, callback) {
    // var script = document.createElement('script');
    // script.src = 'project/floors/' + floorId +'.js?v=' + this.version;
    // main.dom.body.appendChild(script);
    // script.onload = function () {
    //     callback(floorId);
    // }
    require(`../editor/project/floors/${floorId}.js`);
    callback(floorId);
}

////// 加载过程提示 //////
_main.prototype.setMainTipsText = function (text) {
    return;
    main.dom.mainTips.innerHTML = text;
}

_main.prototype.log = function (e) {
    if (e) {
        if (main.core && main.core.platform && !main.core.platform.isPC) {
            console.log((e.stack || e.toString()));
        }
        else {
            console.log(e);
        }
    }
}

_main.prototype.createOnChoiceAnimation = function () {
    var borderColor = main.dom.startButtonGroup.style.caretColor || "rgb(255, 215, 0)";
    // get rgb value
    var rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+\s*)?\)$/.exec(borderColor);
    if (rgb != null) {
        var value = rgb[1] + ", " + rgb[2] + ", " + rgb[3];
        var style = document.createElement("style");
        style.type = 'text/css';
        var keyFrames = "onChoice { " +
            "0% { border-color: rgba("+value+", 0.9); } " +
            "50% { border-color: rgba("+value+", 0.3); } " +
            "100% { border-color: rgba("+value+", 0.9); } " +
            "}";
        style.innerHTML = "@-webkit-keyframes " + keyFrames + " @keyframes " + keyFrames;
        document.body.appendChild(style);
    }
}

////// 选项 //////
_main.prototype.selectButton = function (index) {
    var select = function (children) {
        index = (index + children.length) % children.length;
        for (var i = 0;i < children.length; ++i) {
            children[i].classList.remove("onChoiceAnimate");
        }
        children[index].classList.add("onChoiceAnimate");
        if (main.selectedButton == index) {
            children[index].click();
        }
        else {
            main.selectedButton = index;
        }
    }

    if (core.dom.startPanel.style.display != 'block') return;

    if (main.dom.startButtons.style.display == 'block') {
        select(main.dom.startButtons.children);
    }
    else if (main.dom.levelChooseButtons.style.display == 'block') {
        select(main.dom.levelChooseButtons.children);
    }
}

_main.prototype.listen = function () {

////// 窗口大小变化时 //////
window.onresize = function () {
    try {
        main.core.resize();
    }catch (e) { main.log(e); }
}

////// 在界面上按下某按键时 //////
main.dom.body.onkeydown = function(e) {
    try {
        // if (main.dom.inputDiv.style.display == 'block') return;
        if (main.core && (main.core.isPlaying() || main.core.status.lockControl))
            main.core.onkeyDown(e);
    } catch (ee) { main.log(ee); }
}

////// 在界面上放开某按键时 //////
main.dom.body.onkeyup = function(e) {
    try {
        if (main.dom.startPanel.style.display == 'block' &&
            (main.dom.startButtons.style.display == 'block' || main.dom.levelChooseButtons.style.display == 'block')) {
            if (e.keyCode == 38 || e.keyCode == 33) // up/pgup
                main.selectButton((main.selectedButton||0) - 1);
            else if (e.keyCode == 40 || e.keyCode == 34) // down/pgdn
                main.selectButton((main.selectedButton||0) + 1);
            else if (e.keyCode == 67 || e.keyCode == 13 || e.keyCode == 32) // C/Enter/Space
                main.selectButton(main.selectedButton);
            else if (e.keyCode == 27 && main.dom.levelChooseButtons.style.display == 'block') { // ESC
                main.core.showStartAnimate(true);
            }
            e.stopPropagation();
            return;
        }
        // if (main.dom.inputDiv.style.display == 'block') {
        //     if (e.keyCode == 13) {
        //         setTimeout(function () {
        //             main.dom.inputYes.click();
        //         }, 50);
        //     }
        //     else if (e.keyCode == 27) {
        //         setTimeout(function () {
        //             main.dom.inputNo.click();
        //         }, 50);
        //     }
        //     return;
        // }
        if (main.core && main.core.isPlaying && main.core.status &&
            (main.core.isPlaying() || main.core.status.lockControl))
            main.core.onkeyUp(e);
    } catch (ee) { main.log(ee); }
};

// [main.dom.startButtons, main.dom.levelChooseButtons].forEach(function (dom) {
//     dom.onmousemove = function (e) {
//         for (var i = 0; i < dom.children.length; ++i) {
//             if (dom.children[i] == e.target && i != (main.selectedButton || 0)) {
//                 main.selectButton(i);
//             }
//         }
//     }
// });

// ////// 开始选择时 //////
// main.dom.body.onselectstart = function () {
//     return false;
// }

////// 鼠标按下时 //////
main.dom.data.onmousedown = function (e) {
    try {
        e.stopPropagation();
        var loc = main.core.actions._getClickLoc(e.clientX, e.clientY);
        if (loc == null) return;
        main.core.ondown(loc);
    } catch (ee) { main.log(ee); }
}

////// 鼠标移动时 //////
main.dom.data.onmousemove = function (e) {
    try {
        e.stopPropagation();
        var loc = main.core.actions._getClickLoc(e.clientX, e.clientY);
        if (loc == null) return;
        main.core.onmove(loc);
    }catch (ee) { main.log(ee); }
}

////// 鼠标放开时 //////
main.dom.data.onmouseup = function (e) {
    try {
        e.stopPropagation();
        var loc = main.core.actions._getClickLoc(e.clientX, e.clientY);
        if (loc == null) return;
        main.core.onup(loc);
    }catch (e) { main.log(e); }
}

////// 鼠标滑轮滚动时 //////
main.dom.data.onmousewheel = function(e) {
    try {
        if (e.wheelDelta)
            main.core.onmousewheel(Math.sign(e.wheelDelta))
        else if (e.detail)
            main.core.onmousewheel(Math.sign(e.detail));
    } catch (ee) { main.log(ee); }
}

////// 手指在触摸屏开始触摸时 //////
main.dom.data.ontouchstart = function (e) {
    try {
        e.preventDefault();
        var loc = main.core.actions._getClickLoc(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        if (loc == null) return;
        main.lastTouchLoc = loc;
        main.core.ondown(loc);
    }catch (ee) { main.log(ee); }
}

////// 手指在触摸屏上移动时 //////
main.dom.data.ontouchmove = function (e) {
    try {
        e.preventDefault();
        var loc = main.core.actions._getClickLoc(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        if (loc == null) return;
        main.lastTouchLoc = loc;
        main.core.onmove(loc);
    }catch (ee) { main.log(ee); }
}

////// 手指离开触摸屏时 //////
main.dom.data.ontouchend = function (e) {
    try {
        e.preventDefault();
        if (main.lastTouchLoc == null) return;
        var loc = main.lastTouchLoc;
        delete main.lastTouchLoc;
        main.core.onup(loc);
    } catch (e) {
        main.log(e);
    }
}

// ////// 点击“开始游戏”时 //////
// main.dom.playGame.onclick = function () {
//     main.dom.startButtons.style.display='none';
//     main.core.control.checkBgm();

//     if (main.core.isset(main.core.flags.startDirectly) && main.core.flags.startDirectly) {
//         core.events.startGame("");
//     }
//     else {
//         main.dom.levelChooseButtons.style.display='block';
//         main.selectedButton = null;
//         main.selectButton(0);
//     }
// }

// ////// 点击“载入游戏”时 //////
// main.dom.loadGame.onclick = function() {
//     main.core.control.checkBgm();
//     main.core.load();
// }

// ////// 点击“录像回放”时 //////
// main.dom.replayGame.onclick = function () {
//     main.core.control.checkBgm();
//     main.core.chooseReplayFile();
// }

// main.dom.musicBtn.onclick = function () {
//     try {
//         if (main.core)
//             main.core.triggerBgm();
//     } catch (e) {main.log(e);}
// }

// window.onblur = function () {
//     if (main.core && main.core.control) {
//         try {
//             main.core.control.checkAutosave();
//         } catch (e) {}
//     }
// }

// main.dom.inputYes.onclick = function () {
//     main.dom.inputDiv.style.display = 'none';
//     var func = core.platform.successCallback;
//     core.platform.successCallback = core.platform.errorCallback = null;
//     if (func) func(main.dom.inputBox.value);
// }

// main.dom.inputNo.onclick = function () {
//     main.dom.inputDiv.style.display = 'none';
//     var func = core.platform.errorCallback;
//     core.platform.successCallback = core.platform.errorCallback = null;
//     if (func) func(null);
// }

}//listen end

window.main = new _main();
window.main.init('play');
window.main.listen();