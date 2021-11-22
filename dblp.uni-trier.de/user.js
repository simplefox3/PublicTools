// ==UserScript==
// @name        dblp.uni-trier.de CCF等级标注
// @namespace   https://github.com/symant233/PublicTools
// @icon        https://dblp.uni-trier.de/img/favicon.ico
// @match       https://dblp.uni-trier.de/*
// @grant       GM_addStyle
// @run-at      document-end
// @version     1.0.1
// @author      symant233
// @description 学术会议CCF等级标注（没做期刊的）
// @homepageURL https://github.com/symant233/PublicTools
// @supportURL  https://github.com/symant233/PublicTools/issues
// @license     GPL-3.0
// ==/UserScript==
;(function() {
    'use strict';
    console.log('CCF等级标注已载入...');
    const COLORS = ['seashell', 'cornsilk', 'honeydew']; // ABC
    const CCFA = [
        "conf/ppopp/",
        "conf/fast/",
        "conf/dac/",
        "conf/hpca/",
        "conf/micro/",
        "conf/sc/",
        "conf/asplos/",
        "conf/isca/",
        "conf/usenix/",
        "conf/sigcomm/",
        "conf/mobicom/",
        "conf/infocom/",
        "conf/nsdi/",
        "conf/ccs/",
        "conf/eurocrypt/",
        "conf/sp/",
        "conf/crypto/",
        "conf/uss/",
        "conf/pldi/",
        "conf/popl/",
        "conf/sigsoft/",
        "conf/sosp/",
        "conf/oopsla/",
        "conf/kbse/",
        "conf/icse/",
        "conf/issta/",
        "conf/osdi/",
        "conf/pldi/",
        "conf/popl/",
        "conf/sigsoft/",
        "conf/sosp/",
        "conf/oopsla/",
        "conf/kbse/",
        "conf/icse/",
        "conf/issta/",
        "conf/osdi/",
        "conf/stoc/",
        "conf/soda/",
        "conf/cav/",
        "conf/focs/",
        "conf/lics/",
        "conf/mm/",
        "conf/siggraph/",
        "conf/vr/",
        "conf/visualization/",
        "conf/aaai/",
        "conf/nips/",
        "conf/acl/",
        "conf/cvpr/",
        "conf/iccv/",
        "conf/icml/",
        "conf/ijcai/",
        "conf/aaai/",
        "conf/nips/",
        "conf/acl/",
        "conf/cvpr/",
        "conf/iccv/",
        "conf/icml/",
        "conf/ijcai/",
        "conf/www/",
        "conf/rtss/"
    ];
    const CCFB = [
        "conf/cloud/",
        "conf/spaa/",
        "conf/podc/",
        "conf/fpga/",
        "conf/cgo/",
        "conf/date/",
        "conf/eurosys/",
        "conf/cluster/",
        "conf/iccd/",
        "conf/iccad/",
        "conf/icdcs/",
        "conf/codes/",
        "conf/hipeac/",
        "conf/sigmetrics/",
        "conf/IEEEpact/",
        "conf/icpp/",
        "conf/ics/",
        "conf/vee/",
        "conf/ipps/",
        "conf/performance/",
        "conf/hpdc/",
        "conf/itc/",
        "conf/lisa/",
        "conf/mss/",
        "conf/rtas/",
        "conf/sensys/",
        "conf/conext/",
        "conf/secon/",
        "conf/ipsn/",
        "conf/mobisys/",
        "conf/icnp/",
        "conf/mobihoc/",
        "conf/nossdav/",
        "conf/iwqos/",
        "conf/imc/",
        "conf/acsac/",
        "conf/asiacrypt/",
        "conf/esorics/",
        "conf/fse/",
        "conf/csfw/",
        "conf/srds/",
        "conf/ches/",
        "conf/dsn/",
        "conf/raid/",
        "conf/pkc/",
        "conf/ndss/",
        "conf/tcc/",
        "conf/ecoop/",
        "conf/etaps/",
        "conf/iwpc/",
        "conf/re/",
        "conf/caise/",
        "conf/icfp/",
        "conf/lctrts/",
        "conf/models/",
        "conf/cp/",
        "conf/icsoc/",
        "conf/wcre/",
        "conf/icsm/",
        "conf/vmcai/",
        "conf/icws/",
        "conf/middleware/",
        "conf/sas/",
        "conf/esem/",
        "conf/fm/",
        "conf/issre/",
        "conf/hotos/",
        "conf/ecoop/",
        "conf/etaps/",
        "conf/iwpc/",
        "conf/re/",
        "conf/caise/",
        "conf/icfp/",
        "conf/lctrts/",
        "conf/models/",
        "conf/cp/",
        "conf/icsoc/",
        "conf/wcre/",
        "conf/icsm/",
        "conf/vmcai/",
        "conf/icws/",
        "conf/middleware/",
        "conf/sas/",
        "conf/esem/",
        "conf/fm/",
        "conf/issre/",
        "conf/hotos/",
        "conf/compgeom/",
        "conf/esa/",
        "conf/coco/",
        "conf/icalp/",
        "conf/cade/",
        "conf/concur/",
        "conf/hybrid/",
        "conf/sat/",
        "conf/mir/",
        "conf/si3d/",
        "conf/sca/",
        "conf/dcc/",
        "conf/eurographics/",
        "conf/vissym/",
        "conf/sgp/",
        "conf/rt/",
        "conf/icassp/",
        "conf/icmcs/",
        "conf/ismar/",
        "conf/pg/",
        "conf/sma/",
        "conf/colt/",
        "conf/emnlp/",
        "conf/ecai/",
        "conf/eccv/",
        "conf/icra/",
        "conf/aips/",
        "conf/iccbr/",
        "conf/coling/",
        "conf/kr/",
        "conf/uai/",
        "conf/atal/",
        "conf/ppsn/",
        "conf/group/",
        "conf/iui/",
        "conf/tabletop/",
        "conf/uist/",
        "conf/ecscw/",
        "conf/percom/",
        "conf/mhci/",
        "conf/cogsci/",
        "conf/bibm/",
        "conf/emsoft/",
        "conf/recomb/"
    ];
    const CCFC = [
        "conf/systor/",
        "conf/europar/",
        "conf/ets/",
        "conf/fpl/",
        "conf/fccm/",
        "conf/glvlsi/",
        "conf/ats/",
        "conf/hpcc/",
        "conf/hipc/",
        "conf/mascots/",
        "conf/ispa/",
        "conf/ccgrid/",
        "conf/npc/",
        "conf/ica3pp/",
        "conf/cases/",
        "conf/fpt/",
        "conf/icpads/",
        "conf/iscas/",
        "conf/islped/",
        "conf/ispd/",
        "conf/hoti/",
        "conf/vts/",
        "conf/ancs/",
        "conf/apnoms/",
        "conf/forte/",
        "conf/lcn/",
        "conf/globecom/",
        "conf/icc/",
        "conf/icccn/",
        "conf/mass/",
        "conf/p2p/",
        "conf/ipccc/",
        "conf/wowmom/",
        "conf/iscc/",
        "conf/wcnc/",
        "conf/networking/",
        "conf/im/",
        "conf/msn/",
        "conf/mswim/",
        "conf/wasa/",
        "conf/hotnets/",
        "conf/wisec/",
        "conf/sacmat/",
        "conf/drm/",
        "conf/ih/",
        "conf/acns/",
        "conf/ccs/",
        "conf/acisp/",
        "conf/ctrsa/",
        "conf/dimva/",
        "conf/dfrws/",
        "conf/fc/",
        "conf/trustcom/",
        "conf/sec/",
        "conf/isw/",
        "conf/icdf2c/",
        "conf/icics/",
        "conf/nspw/",
        "conf/pam/",
        "conf/pet/",
        "conf/sacrypt/",
        "conf/soups/",
        "conf/pepm/",
        "conf/paste/",
        "conf/aplas/",
        "conf/apsec/",
        "conf/ease/",
        "conf/iceccs/",
        "conf/icst/",
        "conf/ispass/",
        "conf/scam/",
        "conf/compsac/",
        "conf/icfem/",
        "conf/tools/",
        "conf/qsic/",
        "conf/IEEEscc/",
        "conf/ispw/",
        "conf/seke/",
        "conf/icsr/",
        "conf/icwe/",
        "conf/spin/",
        "conf/atva/",
        "conf/lopstr/",
        "conf/tase/",
        "conf/msr/",
        "conf/refsq/",
        "conf/wicsa/",
        "conf/apweb/",
        "conf/dexa/",
        "conf/ecir/",
        "conf/esws/",
        "conf/webdb/",
        "conf/er/",
        "conf/mdm/",
        "conf/ssdbm/",
        "conf/waim/",
        "conf/ssd/",
        "conf/pakdd/",
        "conf/wise/",
        "conf/csl/",
        "conf/fmcad/",
        "conf/fsttcs/",
        "conf/dsaa/",
        "conf/ictac/",
        "conf/ipco/",
        "conf/rta/",
        "conf/isaac/",
        "conf/mfcs/",
        "conf/stacs/",
        "conf/vrst/",
        "conf/ca/",
        "conf/cgi/",
        "conf/interspeech/",
        "conf/gmp/",
        "conf/apvis/",
        "conf/3dim/",
        "conf/cadgraphics/",
        "conf/icip/",
        "conf/mmm/",
        "conf/pcm/",
        "conf/smi/",
        "conf/aistats/",
        "conf/accv/",
        "conf/acml/",
        "conf/bmvc/",
        "conf/nlpcc/",
        "conf/gecco/",
        "conf/ictai/",
        "conf/iros/",
        "conf/alt/",
        "conf/icann/",
        "conf/fgr/",
        "conf/icdar/",
        "conf/ilp/",
        "conf/ksem/",
        "conf/iconip/",
        "conf/icpr/",
        "conf/icb/",
        "conf/ijcnn/",
        "conf/pricai/",
        "conf/naacl/",
        "conf/icmi/",
        "conf/graphicsinterface/",
        "conf/uic/",
        "conf/haptics/",
        "conf/interact/",
        "conf/acmidc/",
        "conf/cscwd/",
        "conf/coopis/",
        "conf/mobiquitous/",
        "conf/avi/",
        "conf/amia/",
        "conf/apbc/",
        "conf/bigdataconf/",
        "conf/IEEEcloud/",
        "conf/smc/",
        "conf/cosit/",
        "conf/isbra/"
    ];
    const reg = /conf\/.*\//i;
    function tagging() {
        const nodes = document.querySelectorAll('.publ-list li[id^=conf]');
        nodes.forEach((n) => {
            let s = reg.exec(n.id);
            if (s) {
                if (CCFA.indexOf(s[0]) !== -1) n.style.background = COLORS[0];
                else if (CCFB.indexOf(s[0]) !== -1) n.style.background = COLORS[1];
                else if (CCFC.indexOf(s[0]) !== -1) n.style.background = COLORS[2];
            }
        })
    }
    // 选择需要观察变动的节点
    const targetNode = document.querySelector('.publ-list');
    const config = { attributes: true, childList: true, subtree: true };
    // 当观察到变动时执行的回调函数
    const callback = function(mutationsList, observer) {
        console.log('mutations length:', mutationsList.length);
        tagging();
    };
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);
    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);
    // 把图标背景换成透明的
    GM_addStyle(`.drop-down>.head {    
        background: rgba(0,0,0,0);
        border: 2px rgba(0,0,0, 0) solid;
    }`);
})();