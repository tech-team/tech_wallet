$(document).ready(function() {
   $(".btn-primary").click(function() {
        window.location.href = "podtverzhdenie.html";
        return false;
    }) ;

    $(".btn-ok").click(function() {
        window.location.href = "status.html";
        return false;
    }) ;

    $(".wallet-info").click(function() {
    	window.location.href = "wallet-info.html";
        return false;
    }) ;

    $(".payment-type").change(function() {
    	obj = $(this).find("option:selected").text();
    	result = $(".payment-type-result");
    	result_placeholder = $(document).find(".payment-placeholder");
    	if (obj === "ЖКХ") {
    		result.text("Номер счета:");
    		result_placeholder.attr("placeholder", "R?????");
    	}
    	else if (obj === "Мобильный") {
    		result.text("Номер телефона:");
    		result_placeholder.attr("placeholder", "+7(???)???-??-??");
    	}
    	else if (obj === "Steam") {
    		result.text("Steam аккаунт:");
    		result_placeholder.attr("placeholder", "techteam");
    	}
	}) ;

    $(".button-back").click(function() {
        window.history.back();
        return false;
    }) ;

    $(".button-add").click(function() {
        window.location.href = "wallet-add.html";
        return false;
    }) ;

    $(".button-add-confirm").click(function() {
        window.location.href = "wallet-info.html";
        return false;
    }) ;

    $(".editButton").click(function() {
        $(this).hide();
        $('.confirmButton').show();
        var $name = $('#walletName');
        var text = $name.text();
        $name.html('<input type="text" value="' + text + '">');
    });

    $(".confirmButton").click(function() {
        var $name = $('#walletName');
        var text = $name.find('input').prop('value');
        $name.find('input').remove();
        $name.text(text);
        $(this).hide();
        $('.editButton').show();
    });
});
