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
    	var obj = $(this).find("option:selected").text();
    	var result = $(".payment-type-result");
    	var result_placeholder = $(document).find(".payment-placeholder");
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
	$(".recipient").change(function() {
    	var obj = $(this).find("option:selected").text();
    	var result = $(document).find(".recipient-result");

    	if (obj !== "Другой (ввести)") {
    		result.attr("disabled", "disabled");
    	}
    	else {
    		result.attr("disabled", false);
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
});
