// this api is used to track external campaigns (facebook ads, google ads etc.)
var com = com || {};
com.upmenu = com.upmenu || function() {}; // TODO: change to object
com.upmenu.CampaignTracker = {};
com.upmenu.CampaignTracker.COOKIE_LIFETIME_DAYS = 60;
com.upmenu.CampaignTracker.PARAM_NAME = 'umcid'; // upmenu campaign ID
com.upmenu.CampaignTracker.MAX_COOKIES_COUNT = 30; // how many campaigns we can track

com.upmenu.CampaignTracker.track = function() {
	var api = new com.upmenu();
    var cid = api._getParameterByName(com.upmenu.CampaignTracker.PARAM_NAME);
    if(cid == '') {
        return;
    }
    // remove old cookies
    for (var i=0; i<com.upmenu.CampaignTracker.MAX_COOKIES_COUNT; i++) {
        var cookie = com.upmenu.Cookies.getCampaignTracker(i);

        if (cookie !== null) {
            // if cookie exist with same campaign remove it
            if(cookie == cid) {
                com.upmenu.Cookies.saveCampaignTracker(i, null, null)
            }

        }
    }
    // create new cookie on first empty 'slot'
    for (var i=0; i<com.upmenu.CampaignTracker.MAX_COOKIES_COUNT; i++) {
        var cookie = com.upmenu.Cookies.getCampaignTracker(i);
        if (cookie === null || cookie === '') {
            com.upmenu.Cookies.saveCampaignTracker(i, cid,  com.upmenu.CampaignTracker.COOKIE_LIFETIME_DAYS);
            return;
        }
     }
};
// compbine cookies and store as string in one cookie
com.upmenu.CampaignTracker.combine = function() {
    var ids = [];
    for (var i=0; i<com.upmenu.CampaignTracker.MAX_COOKIES_COUNT; i++) {
        var cookie = com.upmenu.Cookies.getCampaignTracker(i);
        if (cookie !== null){
            ids.push(cookie);
        }
    }
    var idsString = ids.join(',');

    com.upmenu.Cookies.saveCampaignTrackerids(idsString);

    return idsString;
};
$(function(){
    com.upmenu.CampaignTracker.track();
    com.upmenu.CampaignTracker.combine();
});