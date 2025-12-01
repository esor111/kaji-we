var com = com || {};
com.upmenu = com.upmenu || function() {}; // TODO: change to object
com.upmenu.Cookies = {};

com.upmenu.Cookies.CART = 'cart-'+com.upmenu.restaurantId;
com.upmenu.Cookies.CUSTOMER = 'cid';
com.upmenu.Cookies.ANONYMOUS_CUSTOMER = 'anonymous-cid';
com.upmenu.Cookies.CUSTOMER_DATA = 'customer-data';
com.upmenu.Cookies.SESSION_ID = 'session-id';
com.upmenu.Cookies.RECOMMENDATION_ON_PAGE_ENTER = 'recommendation-on-page-enter-modal';
com.upmenu.Cookies.AFFILIATE_BANNER_MODAL = 'affiliate-banner-modal';
com.upmenu.Cookies.PARTNERS_PROGRAM = 'um_ppid';
com.upmenu.Cookies.NEWSLETER_MODAL = 'newsletter-modal';
com.upmenu.Cookies.THEME_MODALS = 'theme-modals';
com.upmenu.Cookies.THEME_POPUPS = 'theme-popups';
com.upmenu.Cookies.CAMPGAIN_TRACER = 'um_cid_';
com.upmenu.Cookies.COOKIE_IDS_NAME = 'um_cids';
com.upmenu.Cookies.UTM_PARAM_NAMES = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content'];
com.upmenu.Cookies.TABLE_NUMBER = 'table-number';
com.upmenu.Cookies.VERIFY_AGE = 'verify-age';
com.upmenu.Cookies.REFERRAL = 'upmenu_referral';

com.upmenu.Cookies.saveCartId = function(cartId) {
    var date = new Date();
	date.setTime(date.getTime() + (1 * 6 * 60 * 60 * 1000)); // 6 hour
	store.set(com.upmenu.Cookies.CART, cartId, date.getTime());
};

com.upmenu.Cookies.getCartId = function() {
	var cartId = store.get(com.upmenu.Cookies.CART);
	if(cartId == null) cartId = '';
	return cartId;
};

com.upmenu.Cookies.saveCustomerId = function(customerId) {
	var date = new Date();
	date.setTime(date.getTime() - (3 * 365 * 24 * 60 * 60 * 1000)); // 3 years
	store.set(com.upmenu.Cookies.CUSTOMER, customerId, date.getTime());
};

com.upmenu.Cookies.getCustomerId = function() {
	return store.get(com.upmenu.Cookies.CUSTOMER);
};

com.upmenu.Cookies.saveAnonymousCustomerId = function(customerId) {
	var date = new Date();
	date.setTime(date.getTime() + (3 * 365 * 24 * 60 * 60 * 1000)); // 3 years
	jQuery.cookie(com.upmenu.Cookies.ANONYMOUS_CUSTOMER, customerId, { expires : date, path:'/' });
};

com.upmenu.Cookies.getAnonymousCustomerId = function() {
	var customerId = jQuery.cookie(com.upmenu.Cookies.ANONYMOUS_CUSTOMER);
	return customerId;
};

com.upmenu.Cookies.saveCustomerData = function(customerData) {
	var current = com.upmenu.Cookies.getCustomerData();

	var model = $.extend(false, current, customerData);

	var date = new Date();
	date.setTime(date.getTime() + (3 * 365 * 24 * 60 * 60 * 1000)); // 3 years

	var str = JSON.stringify(model);

	store.set(com.upmenu.Cookies.CUSTOMER_DATA, str, date.getTime());
};

com.upmenu.Cookies.getCustomerData = function() {
	var customer = store.get(com.upmenu.Cookies.CUSTOMER_DATA);
	if(customer == null){
		return {};
	}
	var model = JSON.parse(customer);
	if(model == null) {
		model = {};
	}
	return model;
};

com.upmenu.Cookies.saveSessionId = function(sessionId, date) {
	jQuery.cookie(com.upmenu.Cookies.SESSION_ID, sessionId, {path: '/', expires: date});
};

com.upmenu.Cookies.getSessionId = function() {
	return jQuery.cookie(com.upmenu.Cookies.SESSION_ID );
};

com.upmenu.Cookies.saveRecommendationOnPageEnter = function(hash) {
	store.set(com.upmenu.Cookies.RECOMMENDATION_ON_PAGE_ENTER, hash);
};

com.upmenu.Cookies.getRecommendationOnPageEnter = function() {
	return store.get(com.upmenu.Cookies.RECOMMENDATION_ON_PAGE_ENTER);
};

com.upmenu.Cookies.saveAffiliateBannerModal = function() {
	store.set(com.upmenu.Cookies.AFFILIATE_BANNER_MODAL, true);
};

com.upmenu.Cookies.getAffiliateBannerModal = function() {
	return store.get(com.upmenu.Cookies.AFFILIATE_BANNER_MODAL);
};

com.upmenu.Cookies.savePartnersProgram = function(ppid, expires) {
	jQuery.cookie(com.upmenu.Cookies.PARTNERS_PROGRAM, ppid, { expires : expires, path: '/' });
};

com.upmenu.Cookies.getPartnersProgram = function() {
	return jQuery.cookie(com.upmenu.Cookies.PARTNERS_PROGRAM);
};

com.upmenu.Cookies.saveNewsletterModal = function() {
	var date = new Date(date.getTime() + 90*60000);
	store.set(com.upmenu.Cookies.NEWSLETER_MODAL, 'true', date.getTime());		//keep in memory for 90 min
};

com.upmenu.Cookies.getNewsletterModal = function() {
	return store.get(com.upmenu.Cookies.NEWSLETER_MODAL);
};

com.upmenu.Cookies.saveThemeModals = function(value, date) {
	if(date) {
		store.set(com.upmenu.Cookies.THEME_MODALS, value, date.getTime());
	}
	else {
		store.remove(com.upmenu.Cookies.THEME_MODALS);
	}
};

com.upmenu.Cookies.saveThemePopups = function(value, date) {
	if(date) {
		store.set(com.upmenu.Cookies.THEME_POPUPS, value, date.getTime());
	}
	else {
		store.remove(com.upmenu.Cookies.THEME_POPUPS);
	}
};

com.upmenu.Cookies.getThemeModals = function() {
	return store.get(com.upmenu.Cookies.THEME_MODALS);
};

com.upmenu.Cookies.getThemePopups = function() {
	return store.get(com.upmenu.Cookies.THEME_POPUPS);
};

com.upmenu.Cookies.saveCampaignTracker = function(suffix, value, expires) {
	jQuery.cookie(com.upmenu.Cookies.CAMPGAIN_TRACER + suffix, value, {expires: expires});
};

com.upmenu.Cookies.getCampaignTracker = function(suffix ) {
	return jQuery.cookie(com.upmenu.Cookies.CAMPGAIN_TRACER + suffix);
};

com.upmenu.Cookies.saveCampaignTrackerids = function( value) {
	jQuery.cookie(com.upmenu.Cookies.COOKIE_IDS_NAME, value, 60);
};

com.upmenu.Cookies.saveUTMCampaignParam = function(param, value) {
	var existingParam = jQuery.cookie(param);
	if (existingParam) {
		var existings = existingParam.split(',');
		if (existings.length < 10 && existings.indexOf(value) < 0) {
			existingParam += ',' + value;
			jQuery.cookie(param, existingParam, {expires: 30, path: '/'});
		}
	} else {
		jQuery.cookie(param, value, {expires: 30, path: '/'});
	}
}

com.upmenu.Cookies.clearUTMCampaignParam = function() {
	$.each(com.upmenu.Cookies.UTM_PARAM_NAMES, function(idx, param) {
		jQuery.cookie(param,  null, { path: '/' });
	})
}

com.upmenu.Cookies.initUTM = function() {
	$.each(com.upmenu.Cookies.UTM_PARAM_NAMES, function(idx, param) {
		var value = com.upmenu.prototype._getParameterByName(param);
		if (value) {
			com.upmenu.Cookies.saveUTMCampaignParam(param, value);
		}
	});
}

com.upmenu.Cookies.setVerifyAge = function() {
	var date = new Date();
	date.setTime(date.getTime() + (12 * 60 * 60 * 1000)); // 12 hour
	store.set(com.upmenu.Cookies.VERIFY_AGE,  date.getTime());
};

com.upmenu.Cookies.getVerifyAge = function() {
	return store.get(com.upmenu.Cookies.VERIFY_AGE);
};

com.upmenu.Cookies.saveReferral = function() {
	var currentCookieVal = $.cookie(com.upmenu.Cookies.REFERRAL);
	if (!currentCookieVal) {
		var dataReferrer = document.referrer;
		if (dataReferrer && dataReferrer != "" && dataReferrer.indexOf('upmenu.com') === -1) {
			jQuery.cookie(com.upmenu.Cookies.REFERRAL, document.referrer, { expires: 30, path: '/' });
		}
	}
};

com.upmenu.Cookies.clearReferral = function() {
    jQuery.cookie(com.upmenu.Cookies.REFERRAL, null, { path: '/' });
};