//判段是否為IE瀏覽器
var isMSIE = !-[1,];

//jQuery.extend(verge) --> 千萬不能砍
jQuery.extend(verge)

$.fn.extend({
    // has attr 
    hasAttr: function (name) {
        return this.attr(name) !== undefined;
    },
    // has data
    hasData: function (name) {
        return this.data(name) !== undefined;
    }
});


String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return args[n];
  });
};

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}


;(function ($) {
    $.getUrlQueryByName = function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name.toLowerCase() + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search.toLowerCase());
        if(results == null) return "";
        else return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
} (jQuery));

;(function ($) {
    $.getALinkHrefQueryByName = function (compareStr, name) {

        if (!compareStr) compareStr = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(compareStr);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));

    };
} (jQuery));

;(function ($) {
    $.cancelBubble = function (event) {
        if (event.preventDefault) { event.preventDefault(); }

        event.cancelBubble = true;
        if (event.stopPropagation) { event.stopPropagation(); }
    }
}(jQuery));

var ConverCont = function(Obj)
{
    if(Obj.length==undefined || Obj.length==null)
    {
        Obj[0]=Obj;Obj.length=1;
        return Obj;
    }
    else
    {
        return Obj;
    }
}

var Sys_FormatNumber = function(strNumber)
{
    var i;
    
    if(typeof(strNumber) == "number")
    {
        strNumber = strNumber.toString();
    }
    
    for (i = strNumber.length - 3 ; i > 0; i -= 3)
    {
        strNumber = strNumber.substring(0,i) + "," + strNumber.substring(i);
    }

    return strNumber;
}

//頁面按登出 call的 function
var topLogout = function()
{
    var topParentUrl = location.href;
    topParentUrl = escape(topParentUrl);
    topParentUrl = topParentUrl.replace(/SHOWCOUPON%3DY/i, "SHOWCOUPON%3DN");
    
    topParentUrl  = topParentUrl.replace(new RegExp("https", "gm"), 'http');
    location.href = "Logout.aspx?Go="+topParentUrl;
}

//就頁面使用，為求安心先放著
var Login = function()
{
    var ParentUrl = top.location.href;
    if (ParentUrl.indexOf("PRODUCTPAGE") != -1)
    {
        ParentUrl = ParentUrl.replace("PRODUCTPAGE","ProductPage") ;
    }
}

var setStoreLink = function(storeID)
{
        var storeLink = '';
        //var hostFullName = 'http:https://www.etmall.com.tw/Pages/';
        var hostFullName = '';
    
        switch(storeID.toString())
        {
            case "1":
                storeLink = hostFullName + "Je_Home.aspx?StoreID=1";
                break;
            case "2":
                storeLink = hostFullName + "Fa_Home.aspx?StoreID=2";
                break;
            case "3":
                storeLink = hostFullName + "Be_Home.aspx?StoreID=3";
                break;
            case "4":
                storeLink = hostFullName + "El_Home.aspx?StoreID=4";
                break;
            case "5":
                storeLink = hostFullName + "Li_Home.aspx?StoreID=5";
                break;
            case "6":
                storeLink = hostFullName + "Fo_Home.aspx?StoreID=6";
                break;
            case "7":
                storeLink = hostFullName + "Le_Home.aspx?StoreID=7";
                break;
            case "8":
                storeLink = hostFullName + "Bo_Home.aspx?StoreID=8";
                break;
            case "12":
                storeLink = hostFullName + "Sy_Home.aspx?StoreID=12";
                break;
            case "4416":
                storeLink = hostFullName + "Au_Home.aspx?StoreID=4416";
                break;
            case "6049":
                storeLink = hostFullName + "Br_Home.aspx?StoreID=6049";
                break;
            case "10095":
                storeLink = hostFullName + "Wa_home.aspx?StoreID=10095";
                break;
            case "16462":
                storeLink = hostFullName + "Cg_Home.aspx?StoreID=16462";
                break;
            case "31771":
                storeLink = hostFullName + "TV_Home.aspx?StoreID=31771";
                break;
            case "31772":
                storeLink = hostFullName + "Sh_Home.aspx?StoreID=31772";
                break;
            case "55399":
                storeLink = hostFullName + "Lu_Home.aspx?StoreID=55399";
                break;
            default:
                storeLink = "Home.aspx";
                break;
        }
    
    return storeLink;
}

var isHasSSL = false;

if(window.location.protocol == "https:")
{
    isHasSSL = true;
}

var getGroupFolder = function(GOODID)
{
    var GroupFolder = '';
    
    var ZeroArray = ['0', '0', '0', '0', '0'];

    GroupFolder = GOODID.slice(0, GOODID.length-3);
    
    if(GroupFolder.length < 6)
    {
        GroupFolder = ZeroArray.slice(0, (6 - GroupFolder.length)).join('') + GroupFolder;
    }
    
    return GroupFolder;
}

var getNasHostsName = function(GOODID)
{
    var NasHostName = '';
    
    switch(GOODID.slice(-1))
    {
        case "0":
        case "1":
        case "2":
        case "3":
            if(isHasSSL)
            {
                NasHostName = 'www.etmall.com.tw/NXimg';
            }
            else
            {
                //NasHostName = 'img1.etmall.com.tw/NXimg';
                NasHostName = 'media.etmall.com.tw/NXimg';
            }
            break;
        case "4":
        case "5":
        case "6":
            if(isHasSSL)
            {
                NasHostName = 'www.etmall.com.tw/NXimg';
            }
            else
            {
                //NasHostName = 'img2.etmall.com.tw/NXimg';
                NasHostName = 'media.etmall.com.tw/NXimg';
            }
            break;
        case "7":
        case "8":
        case "9":
            if(isHasSSL)
            {
                NasHostName = 'www.etmall.com.tw/NXimg';
            }
            else
            {
                //NasHostName = 'img3.etmall.com.tw/NXimg';
                NasHostName = 'media.etmall.com.tw/NXimg';
            }
            break;
        default:
            if(isHasSSL)
            {
                NasHostName = 'www.etmall.com.tw/NXimg';
            }
            else
            {
                //NasHostName = 'img1.etmall.com.tw/NXimg';
                NasHostName = 'media.etmall.com.tw/NXimg';
            }
            break;
    }
    
    
    //asHostName = IsUseNewImageIP;
    return NasHostName;
}

var mediaB2EBanner = function (ADPathStr)
{
    var setUpImgStr = '';
    var IMGsrc = ADPathStr;
    
    if(IMGsrc.indexOf('../') != -1)
    {
        if (isHasSSL)
        {
            setUpImgStr = "https://www.etmall.com.tw/" + IMGsrc.substr(3, (IMGsrc.length - 1));
        }
        else
        {
            setUpImgStr = 'https://www.etmall.com.tw/' + IMGsrc.substr(3, (IMGsrc.length - 1));
        }
    }
    else
    {
        setUpImgStr = IMGsrc;
    }
    return setUpImgStr;
}

var getPdImg = function (GOODID, imgSize)
{
    var setUpImgStr = '';
    var whichOne = '';
    
	if(arguments.length > 2)
	{
		whichOne = arguments[2];
	}
    
    if(isUseNewImgPath == 'N')
    {
        if(imgSize == "")
        {
            if (isHasSSL)
            {
                setUpImgStr = "https://www.etmall.com.tw/ProductImage/" + GOODID + "/" + GOODID + whichOne + ".jpg";
            }
            else
            {
                setUpImgStr = "https://media.etmall.com.tw/ProductImage/" + GOODID + "/" + GOODID + whichOne + ".jpg";
            }
        }
        else
        {
            if (isHasSSL)
            {
                setUpImgStr = "https://www.etmall.com.tw/ProductImage/" + GOODID + "/" + GOODID + whichOne + "_" + imgSize + ".jpg";
            }
            else
            {
                setUpImgStr = "https://media.etmall.com.tw/ProductImage/" + GOODID + "/" + GOODID + whichOne + "_" + imgSize + ".jpg";
            }
        }
    }
    else
    {
        var GroupFolder = getGroupFolder(GOODID);
        var GOODIDFolder = '';
        var NasHostName = getNasHostsName(GOODID);
        
        if(imgSize == "")
        {
            setUpImgStr = 'https://' + NasHostName + '/' + GroupFolder + '/' + GOODID + '/' + GOODID + whichOne + '.jpg';
        }
        else
        {
            setUpImgStr = 'https://' + NasHostName + '/' + GroupFolder + '/' + GOODID + '/' + GOODID + whichOne + '_' + imgSize + '.jpg';
        }
    }

    return setUpImgStr;
}

var DoubleToSingle = function(str)
{
	if(str != null && str != '')
	{
		var tempVar;
        strNew = str.replace(/\＆/g, '&').replace(/\&amp;/g, '&').replace(/\＃/g, '#').replace(/\；/g, ';').replace(/\&lt;/g, '<').replace(/\&gt;/g, "/>").replace(/\&#47;&gt;/g, '/>').replace(/\&#40;/g, '(').replace(/\&#41;/g, ')').replace(/\&#40;/g, '(').replace(/\&#126;/g, '~').replace(/\&#33;/g, '!').replace(/\&#64;/g, '@').replace(/\&#36;/g, '$').replace(/\&#37;/g, '%').replace(/\&#94;/g, '^').replace(/\&#42;/g, '*').replace(/\&#40;/g, '(').replace(/\&#41;/g, ')').replace(/\&#95;/g, '_').replace(/\&#43;/g, '+').replace(/\&#61;/g, '=').replace(/\&#45;/g, '-').replace(/\&#92;/g, '\\').replace(/\&#93;/g, ']').replace(/\&#91;/g, '[').replace(/\&#123;/g, '{').replace(/\&#125;/g, '}').replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&#47;/g, '/').replace(/\&#58;/g, ':').replace(/\&#124;/g, '|').replace(/\&#166;/g, '|').replace(/\&#169;/g, 'c').replace(/\&#171;/g, '?').replace(/\&#182;/g, '?').replace(/\&#183;/g, '‧').replace(/\&#184;/g, '﹐').replace(/\&#187;/g, '?').replace(/\&#8482;/g, '?').replace(/\&#8592;/g, '←').replace(/\&#8594;/g, '→').replace(/\&#8593;/g, '↑').replace(/\&#8595;/g, '↓').replace(/\&amp;/g, '＆').replace(/\&#59;/g, '；').replace(/\&#35;/g, '＃').replace(/\&#40;/g, '(').replace(/\&#126;/g, '~').replace(/\&#33;/g, '!').replace(/\&#64;/g, '@').replace(/\&#36;/g, '$').replace(/\&#37;/g, '%').replace(/\&#94;/g, '^').replace(/\&#42;/g, '*').replace(/\&#40;/g, '(').replace(/\&#41;/g, ')').replace(/\&#95;/g, '_').replace(/\&#43;/g, '+').replace(/\&#61;/g, '=').replace(/\&#45;/g, '-').replace(/\&#93;/g, ']').replace(/\&#91;/g, '[').replace(/\&#123;/g, '{').replace(/\&#125;/g, '}').replace(/\&lt;/g, '<').replace(/\&gt;/g, '>').replace(/\&#47;/g, '/').replace(/\&#58;/g, ':').replace(/\&#124;/g, '|').replace(/\&#166;/g, '|').replace(/\&#169;/g, 'c').replace(/\&#171;/g, '?').replace(/\&#182;/g, '?').replace(/\&#183;/g, '‧').replace(/\&#184;/g, '﹐').replace(/\&#187;/g, '?').replace(/\&#8482;/g, '?').replace(/\&#8592;/g, '←').replace(/\&#8594;/g, '→').replace(/\&#8593;/g, '↑').replace(/\&#8595;/g, '↓'); 

        return strNew;
	}

	return str;
}

var HTMLencoding = function(searchElement)
{
    searchElement.value = searchElement.value.replace(/</gi,"&lt;");
    searchElement.value = searchElement.value.replace(/>/gi,"&gt;");
    searchElement.value = searchElement.value.replace(/\'/gi,"’");
    searchElement.value = searchElement.value.replace(/\"/gi,"”");
    searchElement.value = searchElement.value.replace(/\)/gi,"&#x29;");
    searchElement.value = searchElement.value.replace(/\(/gi,"&#x28;");
}

var getProductType = function(GD_DiscountValue, GD_IsShowDiscount)
{
    /*
    nowProductType = '1'; 一般商品
    nowProductType = '2'; 再折扣
    nowProductType = '3'; 有優惠價商品
    */
    var nowProductType = '1';
    
    if(GD_DiscountValue == null || GD_DiscountValue == '')
    {
        nowProductType = '1';
    }
    else
    {
        if(GD_IsShowDiscount == 'N')
        {
            nowProductType = '2';
        }
        else
        {
            nowProductType = '3';
        }
    }
    
    return nowProductType;
}

var Sys_showPRCValue = function(IsShowDiscount, DiscountValue, PRC)
{
    var nowProductType = getProductType(DiscountValue, IsShowDiscount);
    var showWhat       = '';
    
    switch(nowProductType)
    {
        case '1':
            showWhat = PRC;
            break;
        case '2':
            showWhat = PRC;
            break;
        case '3':
            showWhat = DiscountValue;
            break;
    }
    
    showWhat = Sys_FormatNumber(showWhat);
    
    return showWhat;
}


//for 宇匯使用
var scupioImgUrlToProdImg = function(imgURL, imgSize)
{
    
    var MSize = '';
    var getGOOD_ID = '';
    
    if(imgURL.indexOf('NXimg') == -1)
    {
        getGOOD_ID = imgURL.split('ProductImage/')[1].split('/')[0];
    }
    else
    {
        getGOOD_ID = imgURL.split('NXimg/')[1].split('/')[1];
    }
    
    MSize = getPdImg(getGOOD_ID, imgSize);
    return MSize;
}

var scupioImgUrlToProdGoodId = function(imgURL)
{
    var getGOOD_ID = '';
    
    if(imgURL.indexOf('NXimg') == -1)
    {
        getGOOD_ID = imgURL.split('ProductImage/')[1].split('/')[0];
    }
    else
    {
        getGOOD_ID = imgURL.split('/').pop().split('_')[0];
    }
    return getGOOD_ID;
}

// 以下為組出 footer 推薦區塊的範例 : 經由點擊 "Click Me" 與 "Click Me Again" 這二個文字區塊, 來替換 div id=row3 的內容, 以模擬實際上線時的情境
var wait_load = function(look_for, callback) 
{
    var interval = setInterval(function() 
    {
        if (eval("typeof " + look_for) != "undefined") 
        {
            clearInterval(interval);
            callback();
        }
    }, 50);
}

//宇匯變數
function sc()
{
    var showLayout = 'jsarray';
    var e = {};
    var f='undefined';var g="http://";var h="https://";var i="//";var j=g;if(document.location.href.indexOf(g)!=-1){j=i}else if(document.location.href.indexOf(h)!=-1){j=i}function l(v){if(v=="")return false;return(eval("typeof "+v)!=f)}function m(a){var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src',a);return s}function n(a){var b=document.getElementsByTagName('head')[0];if(b)b.appendChild(m(a));else document.body.appendChild(m(a))}function o(a,b){var c=setInterval(function(){if(l(a)){clearInterval(c);b()}},50)}function p(a,b,c,d){if(l(b)==false){n(a);o(b,function(){if(c)c();if(d)d()})}else{if(d)d()}}var k=j+"www.etmall.com.tw/E68Includes_Src/rec_ehs.js";p(k,"scupioec",null,function(){self.scupioec.call(e)})
}
//sc();

var buyNowProductPopInfoPage = function(str, PRC)
{
    var newStr;
    str = str.toString();
    
    console.log('str = ' + str);
    //alert(0);
    
    $('#popupControls').css('right', '15px');
    $('#popupControls').css('top', '-3px');
    
    $('#popCloseBox').css('width', '27px');
    $('#popCloseBox').css('height', '27px');
    $('#popCloseBox').css('background', 'url("../E68Images/wantBuy_box_close.jpg")');
    
    //alert(1);
    
    if(str.indexOf("╪") != -1)
    {
        newStr = str.split('╪');
        var tempVar;
        //alert(2);
        showPopWin('ProductPopInfo.aspx?ProductSKU=' + newStr[0] + '&PHRef=' + newStr[1] + '&GDPRC=' + PRC + '&sendData=Y', 810, 470, '', true);
    }
    else
    {
        newStr = str;
        var tempVar;
        //alert(3);
        showPopWin('ProductPopInfo.aspx?ProductSKU=' + newStr + '&PHRef=&GDPRC=' + PRC + '&sendData=Y', 810, 470, '', true);
    }
}

Array.prototype.unique = function (){  
    var r = new Array();  
    o:for(var i = 0, n = this.length; i < n; i++){  
        for(var x = 0, y = r.length; x < y; x++){  
            if(r[x]==this[i]) continue o;}  
        r[r.length] = this[i];}  
    return r;  
} 

function cleanup(arr, prop) {
    var new_arr = [];
    var lookup  = {};
 
    for (var i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }
 
    for (i in lookup) {
        new_arr.push(lookup[i]);
    }
 
    return new_arr;
}





