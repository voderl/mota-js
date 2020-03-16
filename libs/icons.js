export default icons;
import icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1 from 'exports-loader?icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1!../../editor/project/icons'
"use strict";

function icons() {
    this._init();
}

icons.prototype._init = function () {
    this.icons = icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1;
    //delete(icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1);

    // tileset的起点
    this.tilesetStartOffset = 10000;
}

icons.prototype.getIcons = function () {
    return core.clone(this.icons);
}

////// 根据道具ID获得其cls //////
icons.prototype.getClsFromId = function (id) {
    for (var cls in core.material.icons) {
        if (cls != 'hero' && id in core.material.icons[cls])
            return cls;
    }
    return null;
}

icons.prototype._getAnimateFrames = function (cls, useOriginValue) {
    if (cls == 'enemys' || cls == 'npcs') {
        return 2;
    }
    if (cls == 'animates' || cls == 'enemy48') {
        return 4;
    }
    if (cls == 'npc48') {
        return useOriginValue ? 4 : 1;
    }
    return 1;
}

////// 根据图块数字或ID获得所在的tileset和坐标信息 //////
icons.prototype.getTilesetOffset = function (id) {

    if (typeof id == 'string') {
        // Tileset的ID必须是 X+数字 的形式
        if (!/^X\d+$/.test(id)) return null;
        id = parseInt(id.substring(1));
    }
    else if (typeof id != 'number') {
        return null;
    }
    if (id >= this.tilesetStartOffset) return true;
    return null;
}