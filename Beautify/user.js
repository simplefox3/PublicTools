// ==UserScript==
// @name         Beautify
// @namespace    https://github.com/symant233
// @version      0.0.25
// @description  美化<误>各网页界面
// @author       symant233
// @icon         https://cdn.jsdelivr.net/gh/symant233/PublicTools/Beautify/Bkela.png
// @require      https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js
// @match        https://cn.vuejs.org/v2/*
// @match        https://www.runoob.com/*
// @match        https://www.zxzj.me/*
// @match        https://blog.csdn.net/*
// @match        https://es6.ruanyifeng.com/*
// @match        https://wenku.baidu.com/*
// @match        https://didi.github.io/cube-ui/*
// @match        https://www.bilibili.com/*
// @match        https://cn.bing.com/search?q=*
// @match        https://duckduckgo.com/?q=*
// @match        https://baike.baidu.com/*
// @match        https://yz.chsi.com.cn/sytj/tj/*
// @match        https://www.30secondsofcode.org/*
// @match        https://developer.mozilla.org/*
// @match        https://juejin.cn/editor/drafts/*
// @match        https://xui.ptlogin2.qq.com/cgi-bin/xlogin*
// @match        https://steamcommunity.com/*
// @match        https://www.pixiv.net/*
// @match        https://live.bilibili.com/*
// @match        https://frontendwingman.com/*
// @match        https://cloud.tencent.com/developer/*
// @match        https://www.npmjs.com/*
// @match        https://www.zhihu.com/*
// @match        https://fanyi.baidu.com/*
// @match        https://jiexi.8old.cn/*
// @match        https://read.qidian.com/*
// @match        https://*.taobao.com/*
// @match        https://*.tmall.com/*
// @match        https://caddyserver.com/docs/*
// @grant        GM_addStyle
// @license      GPL-3.0
// @homepageURL  https://github.com/symant233/PublicTools
// @supportURL   https://github.com/symant233/PublicTools/issues
// ==/UserScript==

;(function() {
    'use strict';
    if (!$) { var $ = window.jQuery; }
    GM_addStyle(`html{overflow:overlay;}
    ::-webkit-scrollbar {
        height: 12px; width: 12px;
        background-color: initial;
    }::-webkit-scrollbar-button {height: 0;}
    ::-webkit-scrollbar-thumb {
        background-color: rgb(126 126 126 / 40%);
        background-clip: padding-box;
        border: solid transparent;
        border-width: 1px 1px 1px 1px;
        box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
    }::-webkit-scrollbar-thumb:hover{
        background: rgb(126 126 126 / 60%);
        background-clip: padding-box;
    }::-webkit-scrollbar-thumb:active{
        background: rgb(126 126 126 / 85%);
        background-clip: padding-box;
    }::-webkit-scrollbar-track {
        background-clip: padding-box;
        border: solid transparent;
        border-width: 0 0 0 4px;
    }`);
    (function(left, right, color) {
        const arg = [
            `%c ${left} %c ${right} `,
            'padding:1px;border-radius:3px 0 0 3px;color:#fff;background:#606060;',
            `padding:1px;border-radius:0 3px 3px 0;color:#fff;background:${color}`
        ];
        console.log(...arg);
    })('Loaded', 'Beautify', '#e99010');
    switch (document.domain){
        case 'cn.vuejs.org':
            //缩小导航栏
            $('body').css("padding-top", "43px");
            $('#header').css({"padding": "0px", "height": "43px", "box-shadow": "0px 0px 5px 0px rgba(0,0,0,0.2)"});
            $('#logo').css("padding-left", "10px");
            $('#nav').css("top", "1px");
            $('.sidebar').css("top", "43px");
            $('.sidebar-inner').css("padding-top", "13px");
            break;
        case 'www.runoob.com':
            //隐藏头部logo 移动搜索框位置到navbar
            $('#index-nav').append(`<form action="//www.runoob.com/" target="_blank" style="display: inline;float: right;">
                <input class="placeholder" id="s" name="s" placeholder="搜索……" autocomplete="off"></form>`);
            $('.pc-nav').append(`<form action="//www.runoob.com/" target="_blank" style="display: inline;">
                <input class="placeholder" id="s" name="s" placeholder="搜索……" autocomplete="off"></form>`);
            $('.logo-search').remove();
            $('.col.nav').css("padding-top", "5px");
            $('#sidebar-right-re').parent().remove(); //右侧广告
            $('.feedback-btn').remove(); //反馈按钮
            $('.qrcode').remove; //右侧悬浮二维码
            $('.navigation').css("background", "grey");
            if (document.location.href.split('/')[3] == "try") {
                $('nav').remove();
                $("body").css("padding-top", "60px");
                $('footer').remove();
            }
            break;
        case 'www.zxzj.me':
            //缩小间距 省得用滚轮
            $('.stui-header').css("margin", "0px");
            $('.stui-page__item').css("margin", "0px");
            $('.stui-screen').css("padding", "0px");
            //$('.stui-vodlist li').css("padding", "0px 10px");
            $('.stui-pannel').css("margin-bottom", "0px");
            //$('.head.clearfix').css("padding", "5px");
            break;
        case 'csdn.net': {
            console.log('Beautify@ try to click');
            var r = $('.btn-readmore')[0].click();
            console.log('Beautify@ clicked:' + r);
            break;
        }
        case 'es6.ruanyifeng.com':
            $('#content').css("width", "63%");
            $('#content').css("padding-bottom", "0px");
            $('#back_to_top').css("right", "35px");
            $('#edit').css("right", "35px");
            $('#theme').css("right", "35px");
            $('#flip').css("right", "10px");
            break;
        case 'wenku.baidu.com':
            setTimeout(function() {
                console.log('show more');
                $('.btn-know').click();
                $('.moreBtn').click();
            }, 1500 );
            break;
        case 'didi.github.io':
            setTimeout(function() {
                document.getElementsByClassName('navigator')[0].style.height = "54px";
                document.getElementsByClassName('navigator')[0].style.lineHeight = "54px";
                document.getElementsByClassName('home-view')[0].style.paddingTop = "38px";
            }, 500 );
            break;
        case 'www.bilibili.com': {
            // 宽屏模式 来自 https://github.com/bilibili-helper/bilibili-helper-o/blob/637d0741b0d81154c7bc330f8fce19b926f5a71b/src/js/modules/videoWiden/UI/index.js
            function setWide () {
                const btn = document.querySelector('.bilibili-player-video-btn-widescreen:not(.closed)');
                if (btn && !btn.getAttribute('bilibili-helper-data')) {
                    btn.setAttribute('bilibili-helper-data', true);
                    btn.click();
                }
            }
            new Promise(resolve => {
                setWide();
                const player = document.querySelector('#bofqi, #bilibiliPlayer');
                if (player) {
                    new MutationObserver((mutationList) => {
                        mutationList.forEach((mutation) => {
                            if (mutation.oldValue) {
                                setWide();
                            }
                        });
                    }).observe(player, {
                        attributes: true,
                        attributeOldValue: true,
                        subtree: true,
                    });
                }
                resolve();
            });
            // PiP 画中画模式快捷键`p`
            document.addEventListener('keyup', function (e) {
                if (e.key === 'p') {
                    $('.bilibili-player-iconfont-pip-on').click();
                } else if (e.key === 'ArrowRight' & e.altKey === true) {
                    $('.bilibili-player-video-btn-next').click();
                }
            }, false);
            break;
        }
        case 'cn.bing.com': {
            $("head").append('<style>#b_content{padding-left: 85px;}</style>');
            break;
        }
        case 'duckduckgo.com': {
            $("head").append('<style>#links_wrapper{padding-left: 108px;}</style>');
            break;
        }
        case 'baike.baidu.com':
            $('.content-wrapper .content').css('font', 'unset'); // 移除阴间字体
            //$('#sl-player-el-video').trigger('pause'); //暂停自动播放
            //$('.sl-player-el-close').click();
            $('#sl-player-el-video').remove(); // 删除播放器
            $('.sl-player-el-container').remove(); // 删除播放器容器
            GM_addStyle(`.lemmaWgt-searchHeader{height:55px;}
            .wgt-searchbar-new.wgt-searchbar .logo-container{padding: 6px 0;}
            .wgt-searchbar-new.wgt-searchbar .search{padding: 7px 0;}`);
            break;
        case 'yz.chsi.com.cn': {
            // 去除不符合不能调剂的信息
            function filter() {
                const tmp = $("#content-qecxList > table > tbody").children();
                for ( let i in tmp ) {
                    if ( tmp[i].lastElementChild.innerText.includes("不符合") || tmp[i].lastElementChild.firstElementChild.title.includes('不符合') ) {
                        tmp[i].remove();
                        console.log(tmp[i].textContent + 'removed');
                    }
                }
            }
            $('<button id="btn-filter" style="width: 50px;">过滤</button>').appendTo('.ewm-fix');
            $('#btn-filter').click(filter);
            document.addEventListener('keyup', function (e) {
                if (e.key === 'Enter' && e.ctrlKey) {
                    $('.tj-seach-btn').click();
                }
            }, false);
            break;
        }
        case 'www.30secondsofcode.org':
            GM_addStyle('.nav-bar{height:auto;}');
            break;
        case 'developer.mozilla.org': {
            GM_addStyle(`
            .page-header{padding:12px 24px;}
            .breadcrumb-locale-container,#license{margin:0px;}
            .logo{height:59px;}
            .localized-content-note.notecard.neutral{display:none;}
            #beautify-turn:after {content:"|";display:inline-block;margin:0 6px;}`);
            let link = document.location.href;
            link = link.replace('/en-US/', '/zh-CN/');
            $(".language-toggle").prepend(`<li><a id="beautify-turn" href="${link}">📌CN</a></li>`);
            $('.language-icon').remove();
            break;
        }
        case 'juejin.cn':
            GM_addStyle('.header.editor-header{height:4rem;}.main .bytemd{height:calc(100vh - 4rem);}');
            break;
        case 'xui.ptlogin2.qq.com':
            // 自动启用账号密码登录 去他大爷的扫码登录
            GM_addStyle('.web_qr_login{display:block !important;}.qlogin,#bottom_qlogin{display:none !important;}');
            break;
        case 'steamcommunity.com': {
            setInterval(()=>{
                try {
                    document.getElementById('market_sell_dialog_accept_ssa').checked = true;
                } catch (err) {}
                try {
                    document.getElementById('market_buyorder_dialog_accept_ssa').checked = true;
                } catch (err) {}
            }, 2000);
            break;
        }
        case 'www.pixiv.net':
            // 需要与脚本配合使用 https://greasyfork.org/zh-CN/scripts/34153-pixiv-plus
            GM_addStyle(`
            select#select-ahao-favorites {
                font-size: 14px;
                line-height: 22px;
                flex: 1 1 auto;
                height: auto;
                margin: 0px -9px;
                padding: 9px 8px;
                border: none;
                border-radius: 4px;
                color: rgba(0, 0, 0, 0.64);
                background-color: rgba(0, 0, 0, 0.04);
                transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
            }#select-ahao-favorites+div{gap: 0px;}`);
            break;
        case 'live.bilibili.com': {
            GM_addStyle(`
            .side-bar-popup-cntr{bottom:5% !important;height:84% !important;}
            .section-content-cntr{height:556px !important;}
            .title-length-limit{max-width:unset !important;}`);
            break;
        }
        case 'frontendwingman.com':
            try {
                // credit: github.com/invobzvr
                Object.defineProperty(document.querySelector('.theme-container').__vue__,'locked',{
                    get:()=>true,
                    set:function(val){this._data.locked=true}
                });
                document.querySelector('.theme-container').__vue__.locked = true;
            } catch (e) {
                console.warn('Beautify: 自动解锁失效.');
            }
            break;
        case 'cloud.tencent.com':
            GM_addStyle('.doc-main-hd {margin-bottom: 24px;padding-bottom: 28px;border-bottom: 1px solid #e5e5e5;}');
            break;
        case 'www.npmjs.com':
            $("header > div:nth-child(2)").css("display", "none");
            $(".center-ns").css("padding-bottom", "unset");
            break;
        case 'www.zhihu.com':
            if (window.location.href === "https://www.zhihu.com/hot") {
                document.querySelectorAll('.HotItem').forEach((e) => {
                    if (!e.outerHTML.includes('HotItem-excerpt')) {e.remove();}
                    if (!e.outerHTML.includes('HotItem-img')) {e.remove();}
                });
            }break;
        case 'fanyi.baidu.com':
            GM_addStyle(`
            .download-app,.doc-feedback-group{display:none;}
            .header{padding:3px 0 7px 0;}
            .doc-whole-container{height:100%;}
            .doc-trans-view-wrap{
                width:unset;
                height: 88%;
                margin-top: -38px;
            }`);
            break;
        case 'jiexi.8old.cn': {
            // https://jx.m3u8.tv/jiexi/?url=
            document.addEventListener('keyup', function (e) {
                if (e.key === 'f') {
                    $('.dplayer-full-icon').click();
                }else if ([1,2,3,4].includes(parseInt(e.key))) {
                    $('.dplayer-setting-speed-item').slice(1)[parseInt(e.key)].click();
                }
            }, false);
            break;
        }
        case 'qidian.com':
            GM_addStyle(`body{overflow-x:hidden !important;}
            .admire-wrap,.guide-btn-wrap,#j_navGameBtn,#navReward,#j_phoneRead{display:none;}`);
            break;
        case 'caddyserver.com':
            GM_addStyle(`pre > code.cmd {font-size: 1rem;}
            main > .sidebar:last-child {flex-shrink: 2;}
            main > nav.sidebar {font-size: 1.2rem; width: 20%;}
            article > :not(h1), dd, article p, article ol, article ul, article pre, article table {margin-bottom: 0.5rem;}
            pre {padding-bottom: 0.5rem !important;padding-top: 0.5rem !important;}
            pre.chroma {font-size: 1rem;}
            #paper1, #paper2 {display: none;}
            .paper3 {top: unset;left: unset;}
            hr {margin-top: 2.5rem; margin-bottom: 2.5rem !important;}`);
            break;
        default:
            break;
    }
    const aliList = [
        /^https:.+tmall.com\//,
        /^https:.+taobao.com\//,
    ];
    aliList.forEach((i) => {
        if (i.test(document.location.href)) {
            // 移除阴间字体 arial
            GM_addStyle('span,input,li,div,a{font-family:none;}');
        }
    });
})();