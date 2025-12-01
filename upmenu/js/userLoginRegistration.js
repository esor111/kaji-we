var com = com || {};
com.upmenu = com.upmenu || function () {
};
com.upmenu.User = {};
com.upmenu.User.loader = jQuery("#registration-loader");

com.upmenu.User.googleLoginSetup = function () {
    jQuery(document).on('click', '.google-login-button', function (e) {
        e.preventDefault();
    });
};

function handleGoogleRegistrationCredentialResponse(response) {
    grecaptcha.ready(function () {
        grecaptcha.execute('6LeHXbIUAAAAAIb_5PPqRGp4il40Yz1YFDdPJl0Q', {action: 'submit'}).then(function (token) {
            jQuery('#reCaptchaV3Token').val(token);
            handleCredentialResponse(response);
        });
    });
}

function handleFacebookRegistrationCredentialResponse(response) {
    grecaptcha.ready(function () {
        grecaptcha.execute('6LeHXbIUAAAAAIb_5PPqRGp4il40Yz1YFDdPJl0Q', {action: 'submit'}).then(function (token) {
            jQuery('#reCaptchaV3Token').val(token);
            com.upmenu.User.socialSubmit(response.authResponse.accessToken, '/admin/registration/facebook');
        });
    });

}

function handleCredentialResponse(response) {
    com.upmenu.User.socialSubmit(response.credential, '/admin/registration/google')
}


com.upmenu.User.socialSubmit = function (token, link) {
    com.upmenu.User.loader.show();
    var clauseApprovalCheckbox = jQuery("#clause-approval").is(":checked");
    var phone = jQuery("#phone").val();
    var phoneCountryCode = jQuery("#phone_country_code").val();

    var socialUserDto = {
        lang: com.upmenu.User.lang,
        restaurantName: jQuery("#restaurant-name").val(),
        phone: phone,
        phoneCountryCode: phoneCountryCode,
        clauseApproval: !!clauseApprovalCheckbox,
        token: token,
        templateId: com.upmenu.User.templateId,
        themeType: com.upmenu.User.themeType,
        recaptchaToken: jQuery("#reCaptchaV3Token").val(),
        trial: jQuery("#_trial").val()
    };

    jQuery.ajax({
        url: link,
        data: JSON.stringify(socialUserDto),
        contentType: 'application/json',
        dataType: 'json',
        type: 'post',
        statusCode: {
            200: com.upmenu.User.successLogin,
            201: com.upmenu.User.afterSSOSignIn
        },
        error: function (data) {
            if (data.status === 401 && link.indexOf('facebook') !== -1) {
                com.upmenu.User.fbLogin();
            } else {
                com.upmenu.User.socialError(data.responseJSON);
            }
        }
    });
};

com.upmenu.User.socialError = function (error) {
    assignErrors(error.errors);

    if (window.location.href.includes('/admin/login')) {
        for (var i = 0; i < error.errors.length; i++) {
            if (error.errors[i].field === 'restaurantName') {
                window.location.href = '/admin/registration?lang=' + com.upmenu.User.lang;
            }
        }
    }

    com.upmenu.User.loader.hide();
};

jQuery(document).on("blur paste", "#actual-website, #websiteUrl", function () {
    let val = jQuery(this).val().trim();

    val = val.replace(/^https?:\/\//i, "");

    jQuery(this).val(val);
});

com.upmenu.User.formSubmit = function () {
    jQuery("#registration-loader").show();

    var language = jQuery('#language').val();
    var email = jQuery('#email').val();
    var phone = jQuery('#phone').val();

    var form = jQuery('#_registration-form');

    const websiteInput = jQuery('#actual-website');

    const originalWebsite = websiteInput.val().trim().replace(/^https?:\/\//i, "");

    const fullWebsite = originalWebsite ? "https://" + originalWebsite : "";

    websiteInput.val(fullWebsite);

    if (com.upmenu.User.templateId != null && typeof com.upmenu.User.templateId !== 'undefined') {
        jQuery('#_templateSiteId').val(com.upmenu.User.templateId);
    }

    if (com.upmenu.User.themeType != null && typeof com.upmenu.User.themeType !== 'undefined') {
        jQuery('#_templateThemeType').val(com.upmenu.User.themeType);
    }

    const currentUrl = new URL(window.location.href);
    var lang = currentUrl.searchParams.get("lang");


    var formData = form.serialize();
    if (lang) {
        formData += "&lang=" + encodeURIComponent(lang);
    }

    jQuery.ajax({
        url: form.attr('action'),
        data: formData,
        dataType: 'html',
        success: function (data) {
            var user = {email: email, phone: phone, lang: language};
            com.upmenu.User.successRegistration(user, data);

            gtagEvent({
                'event': 'RegistrationFinished'
            });

            try {
                api.trackEvent('Registration', 'Registration Finished', email);
                api.trackEvent('Nie landing page', 'Zakładanie konta', 'Rejestracja poprawna');
                midaEvent("Registration");
                plausible('Registration Finished', {
                    props: {
                        lang: language,
                    }
                });
            } catch (e) { }
        },
        error: function (error) {
            jQuery("#registration-loader").hide();

            const $html = jQuery('<div>').html(error.responseText);
            const $newFormWrapper = $html.find('.registration-form-wrapper');

            if ($newFormWrapper.length) {
                jQuery('.registration-form-wrapper').html($newFormWrapper.html());
            } else {
                jQuery('.registration-form-wrapper').html(error.responseText);
            }

            let w = jQuery('#actual-website').val();
            if (w) {
                jQuery('#actual-website').val(w.replace(/^https?:\/\//i, ""));
            }

            initPopovers();
            com.upmenu.User.setupLanguage();
            setupPhoneInput("phone");
            com.upmenu.User.updatePhoneLabel();

            if (typeof window.initGoogleIdentity === 'function') {
                window.initGoogleIdentity();
            }
        }
    });

    return false;
};

jQuery(document).on('click', "#fb-login", function () {
    com.upmenu.User.fbLogin();
});

jQuery(document).on('click', ".dev-sso-login-button", function () {
    jQuery("#registration-loader").show();
    const $this = jQuery(this);
    const email = $this.attr('data-email');
    handleDevSSORegistrationCredentialResponse(email);
    return false;
});

function handleDevSSORegistrationCredentialResponse(token = "randomDevSso") {
    com.upmenu.User.socialSubmit(token, '/admin/registration/dev-sso')
}

jQuery(document).on('click', "#fb-registration-login", function () {
    jQuery("#registration-loader").show();
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            handleFacebookRegistrationCredentialResponse(response);

        } else {
            com.upmenu.User.fbLogin();
        }
    });
    return false;
});

com.upmenu.User.fbLogin = function () {
    FB.login(function (response) {
        if (response.status === 'connected') {
            com.upmenu.User.socialSubmit(response.authResponse.accessToken, '/admin/registration/facebook');
        }
    }, {scope: 'public_profile,email'});
}


com.upmenu.User.successLogin = function (user) {
    window.location = '/admin';
};

com.upmenu.User.afterSSOSignIn = function (data) {
    if (data && data.redirectUrl) {
        window.location.href = data.redirectUrl;
    } else {
        noty({text: 'Something goes wrong', type: 'error'});
    }
}

com.upmenu.User.successRegistration = function (user, redirectUrl = '/admin') {
    try {
        if (typeof user === 'undefined' || user == null) {
            user.email = 'user was undefined';
            user.lang = 'user was undefined';
            user.phone = 'user was undefined';
            user.id = 'user was undefined';
        }

        var email = user.email;
        var lang = user.lang;
        var userId = user.id;

        com.upmenu.Cookies.clearUTMCampaignParam();
        com.upmenu.Cookies.clearReferral();

        var api = new com.upmenu();

        gtagEvent({
            'event': 'RegistrationFinished'
        });

        if (com.upmenu.production) {
            try {
                api.trackEvent('Registration', 'Registration Finished', email);
                api.trackEvent('Nie landing page', 'Zakładanie konta', 'Rejestracja poprawna');
                midaEvent("Registration");
            } catch (e) {

            }

            try {
                fbq('track', 'CompleteRegistration');
            } catch (e) {

            }

            try {
                jQuery('#_linkedin-conversion-tracker').html(
                    '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=2489282&conversionId=4751266&fmt=gif" />');
            } catch (e) {

            }

            try {
                plausible('Registration Finished', {props: {lang: lang, userId: userId}});
            } catch (e) {

            }
        }


                setTimeout(function () {
                    window.top.location.href = redirectUrl;
        }, 1000);
    } catch (ex) {
        console.error('Error in successRegistration:', ex);
    }

    setTimeout(function () {
        window.top.location.href = '/admin';
    }, 5000);
};



com.upmenu.User.setupLanguage = function () {
    var language = getURLParameter('lang');
    if (language == null || language === 'null') {
        let getUrl = window.location.href;
        let url = new URL(getUrl);
        language = 'en';
        url.searchParams.set('lang', language);
    }

    language = language.toUpperCase();
    com.upmenu.User.lang = language;
};

com.upmenu.User.collectUrlParams = function () {
    var templateId = getURLParameter('templateId');
    if (templateId != null && templateId !== 'undefined' && templateId !== 'null') {
        com.upmenu.User.templateId = templateId;
    } else {
        com.upmenu.User.templateId = null;
    }

    var themeType = getURLParameter('themeType');
    if (themeType != null && themeType !== 'undefined' && themeType !== 'null') {
        com.upmenu.User.themeType = themeType;
    } else {
        com.upmenu.User.themeType = null;
    }
};

jQuery('.registration-form-wrapper .terms .more').click(function () {
    jQuery('.registration-form-wrapper .terms .sign-in-up-gdpr-clause').slideToggle();
});

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}

com.upmenu.User.submitForm = function () {
    grecaptcha.ready(function () {
        grecaptcha.execute('6LeHXbIUAAAAAIb_5PPqRGp4il40Yz1YFDdPJl0Q', {action: 'submit'}).then(function (token) {
            jQuery('#reCaptchaV3Token').val(token);
            com.upmenu.User.formSubmit();
        });
    });
    return false;
};


jQuery(document).on('click', '#_submit-registration-form', com.upmenu.User.submitForm);


window.addEventListener("load", function () {
    com.upmenu.User.setupLanguage();
    com.upmenu.User.googleLoginSetup();
    com.upmenu.User.collectUrlParams();
    setupPhoneInput("phone");
});

com.upmenu.User.updatePhoneLabel = function () {
    var $wrapper = $('.phone-field');
    var $input = $wrapper.find('input[type="tel"]');
    if ($input.length === 0) {
        return;
    }
    var iti = window.intlTelInputGlobals.getInstance($input[0]);

    var phoneVal = iti ? iti.getNumber() : $input.val();
    $wrapper.toggleClass('filled', phoneVal.replace(/\D/g,'').length > 0);
};

$(function () {
    var $input = $('.phone-field input[type="tel"]');

    $input.on('input blur focus', com.upmenu.User.updatePhoneLabel);
    com.upmenu.User.updatePhoneLabel();
});


(function() {
    function initGoogleIdentity() {
        const container = document.getElementById('google-auth-container');
        if (!container) return;
        const clientId = container.dataset.clientId;
        if (!clientId) {
            console.warn('Google client_id not found on #google-auth-container');
            return;
        }

        if (window.google && google.accounts && google.accounts.id) {
            try {
                google.accounts.id.initialize({
                    client_id: clientId,
                    callback: handleGoogleRegistrationCredentialResponse,
                });

                var btn = document.querySelector('.g_id_signin');
                if (btn) {
                    try {
                        google.accounts.id.renderButton(btn, {
                            theme: 'outline',
                            size: 'large',
                            type: 'standard',
                            width: 240
                        });
                    } catch (e) {
                        console.warn('Google ID renderButton failed', e);
                    }
                }

            } catch (e) {
                console.warn('Google ID initialize failed', e);
            }
        } else {
            setTimeout(initGoogleIdentity, 200);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGoogleIdentity);
    } else {
        initGoogleIdentity();
    }

    window.initGoogleIdentity = initGoogleIdentity;
})();


