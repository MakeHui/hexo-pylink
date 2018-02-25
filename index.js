'use strict';

var pinyin = require('node-pinyin');

var hexo = hexo || {};

function join_pingyin(data) {
    var str = '';
    for (var i = 0; i < data.length; i++) {
        data[i][0] = data[i][0].replace(/(^\s*)|(\s*$)/g, '');
        if (data[i][0] != '') {
            str += data[i][0] + '-';
        }
    }
    
    return str.length == 0 ? '' : str.substr(0, str.length - 1);
}

hexo.extend.filter.register('before_post_render', function(data){
    if (data.layout == 'post') {
        data.pylink = join_pingyin(pinyin(data.title, {style: 'normal'}));
    }
    return data;
});
