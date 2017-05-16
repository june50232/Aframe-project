 (function() {

     //define parameters to catch json's variation
     var mainSixImgGroup = V1_M_Summer_MainThreeBanner["Repeater"],
         mainSixImg = mainSixImgGroup[0];
     var mainStarImg = V1_M_Summer_middleSixBanner;
     var eightProdsProds = V1_M_Summer_Prods["Repeater"];
     var SSL = 'https://www.etmall.com.tw'; // domain


     function Birthday() {

         var tempPHRef;
         var tempLink;

         //define object
         var that = this;
         var _mgr = new function() {};

         //define parameters
         var getDailyDiscountEightProds;

         /* Functions */
         that.Funs = new function() {

             this.checkHasData = function(jsonObj) {
                 var DataOK = false;
                 if (jsonObj && jsonObj != null && jsonObj != {} && ConverCont(jsonObj).length > 0) {
                     DataOK = true;
                 }

                 return DataOK;
             };

             this.checkLinkUrl = function(urlString, tempPHRef) {
                 var finalUrl;
                 if (urlString.indexOf('?') != -1) {
                     finalUrl = urlString + '&GAcode=' + tempPHRef;
                 } else {
                     finalUrl = urlString + '?GAcode=' + tempPHRef;
                 }

                 return finalUrl;
             };

             //主視覺6圖
             this.mainSixBanner = function(jsonObj) {
                 var sHTML = [];

                 sHTML[sHTML.length] = '<div>';

                 if (mainSixImg.link1 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_bigimg01';
                     sHTML[sHTML.length] = '<a href="' + SSL + that.Funs.checkLinkUrl(mainSixImg.link1, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_bigimg" GALabel="Eventpage_mEtmall_2017EHS3CDay_bigimg01"><img style="width:100%;" src=' + mediaB2EBanner(mainSixImg.image1) + ' alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainSixImg.image1) + '" alt="" border="0"/>';
                 }

                 if (mainSixImg.link2 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_bigimg02';
                     sHTML[sHTML.length] = '<a href="' + SSL + that.Funs.checkLinkUrl(mainSixImg.link2, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_bigimg" GALabel="Eventpage_mEtmall_2017EHS3CDay_bigimg02"><img style="width:100%;" src="' + mediaB2EBanner(mainSixImg.image2) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainSixImg.image2) + '" alt="" border="0"/>';
                 }

                 if (mainSixImg.link3 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_bigimg03';
                     sHTML[sHTML.length] = '<a href="' + SSL + that.Funs.checkLinkUrl(mainSixImg.link3, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_bigimg" GALabel="Eventpage_mEtmall_2017EHS3CDay_bigimg03"><img style="width:100%;" src="' + mediaB2EBanner(mainSixImg.image3) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainSixImg.image3) + '" alt="" border="0"/>';
                 }

                 sHTML[sHTML.length] = '</div>';

                 $('.mainSixBannerDiv').append(sHTML);

             };

             //推薦品牌 (1B+6圖)
             this.mainStarBannerProds = function(jsonObj) {
                 var sHTML = [];

                 sHTML[sHTML.length] = '<div>';

                 if (mainStarImg.link1 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_6bn01';
                     sHTML[sHTML.length] = '<a href="' + that.Funs.checkLinkUrl(mainStarImg.link1, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_6bn" GALabel="Eventpage_mEtmall_2017EHS3CDay_6bn01"><img style="width:100%;" src=' + mediaB2EBanner(mainStarImg.image1) + ' alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image1) + '" alt="" border="0"/>';
                 }

                 if (mainStarImg.link2 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_6bn02';
                     sHTML[sHTML.length] = '<a href="' + that.Funs.checkLinkUrl(mainStarImg.link2, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_6bn" GALabel="Eventpage_mEtmall_2017EHS3CDay_6bn02"><img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image2) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image2) + '" alt="" border="0"/>';
                 }

                 if (mainStarImg.link3 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_6bn03';
                     sHTML[sHTML.length] = '<a href="' + that.Funs.checkLinkUrl(mainStarImg.link3, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_6bn" GALabel="Eventpage_mEtmall_2017EHS3CDay_6bn03"><img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image3) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image3) + '" alt="" border="0"/>';
                 }

                 if (mainStarImg.link4 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_6bn04';
                     sHTML[sHTML.length] = '<a href="' + that.Funs.checkLinkUrl(mainStarImg.link4, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_6bn" GALabel="Eventpage_mEtmall_2017EHS3CDay_6bn04"><img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image4) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image4) + '" alt="" border="0"/>';
                 }

                 if (mainStarImg.link5 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_6bn05';
                     sHTML[sHTML.length] = '<a href="' + that.Funs.checkLinkUrl(mainStarImg.link5, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_6bn" GALabel="Eventpage_mEtmall_2017EHS3CDay_6bn05"><img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image5) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image5) + '" alt="" border="0"/>';
                 }

                 if (mainStarImg.link6 != '') {
                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_6bn06';
                     sHTML[sHTML.length] = '<a href="' + that.Funs.checkLinkUrl(mainStarImg.link6, tempPHRef) + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_6bn" GALabel="Eventpage_mEtmall_2017EHS3CDay_6bn06"><img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image6) + '" alt="" border="0"/></a>';
                 } else {
                     sHTML[sHTML.length] = '<img style="width:100%;" src="' + mediaB2EBanner(mainStarImg.image6) + '" alt="" border="0"/>';
                 }

                 sHTML[sHTML.length] = '</div>';

                 $('.mainStarBannerProdsDiv').append(sHTML);

             };

             //商品排排站 (1T+4品)*n
             this.eightTextProds = function(jsonObj) {
                 var sHTML = '';

                 for (var m = 0, n = eightProdsProds.length; m < n; m++) {

                     tempPHRef = 'Eventpage_mEtmall_2017EHS3CDay_item' + (m + 1) + '_' + eightProdsProds[m].GOOD_ID;
                     tempLink = eightProdsProds[m].GOOD_Link;
                     productLink = (tempLink == '') ?
                         '<a href="https://m.etmall.com.tw/Product/' + eightProdsProds[m].GOOD_ID + '?GAcode=' + tempPHRef :
                         '<a href="' + that.Funs.checkLinkUrl(tempLink, tempPHRef);

                     if (m % 2 == 0) {
                         sHTML += '<ul class="ptlist">';
                     }

                     sHTML += '<li>' + productLink + '" class="setGA" GACategory="Eventpage_mEtmall_2017EHS3CDay" GAAction="Click_Eventpage_mEtmall_2017EHS3CDay_item" GALabel="Eventpage_mEtmall_2017EHS3CDay_item' + (m + 1) + '_' + eightProdsProds[m].GOOD_ID + '"><img src="' + getPdImg(eightProdsProds[m].GOOD_ID, 'L') + '"><p>' + DoubleToSingle(eightProdsProds[m].GOOD_NM) + '</p><h5>' + eightProdsProds[m].SMS1 + '</h5><div><span class="price">' + Sys_showPRCValue(eightProdsProds[m].IsShowDiscount, eightProdsProds[m].DiscountValue, eightProdsProds[m].PRC) + '</span></div></a></li>';

                     if (m % 2 == 1) {
                         sHTML += '</ul>';
                     }
                 }
                 $('.eightTextProdsDiv').append(sHTML);
             };

             //sherry
             this.init = function() {
                 //組出主視覺6圖  主視覺
                 if (that.Funs.checkHasData(mainSixImg)) {
                     that.Funs.mainSixBanner();
                 }

                 //組出推薦品牌 (1B+6圖)  強打商品
                 if (that.Funs.checkHasData(mainStarImg)) {
                     that.Funs.mainStarBannerProds();
                 }

                 //組出商品排排站 (1T+4品)*n  商品內容
                 that.Funs.eightTextProds();
             };


             this.initRegisterEvent = function() {
                 //GA
                 $('.mobi_wap').on('click', '.setGA', function(e) {
                     //停止泡泡事件發生
                     $.cancelBubble(e);

                     var GACategory = $(this).attr('GACategory');
                     var GAAction = $(this).attr('GAAction');
                     var GALabel = $(this).attr('GALabel');

                     ga('send', 'event', GACategory, GAAction, GALabel);
                     location.href = $(this).attr('href');
                     //alert($(this).attr('href'))

                 });
             };
         };
     }

     $(document).ready(function() {

         //不要search bar
         jQuery('.keyHere').css('display', 'none');

         var BirthdayManager = new Birthday();
         BirthdayManager.Funs.initRegisterEvent();
         BirthdayManager.Funs.init();

         // TODO Date        
         var todayDate = parseInt(Date.parse(new Date()));
         var startDate = parseInt(Date.parse("May 12 , 2017 10:00:00"));
         var endDate = parseInt(Date.parse("June 5 , 2017 10:00:00"));

         if (todayDate >= startDate && endDate > todayDate) {} else {
             alert('此活動已結束，感謝您的參與！')
         }

     });

 })();