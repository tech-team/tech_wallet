jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};


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
    	//window.location.href = "wallet-info.html";
        //return false;
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
    	var result_txt = $(".recipient-result");
    	var result = $(document).find(".recipient-result");

    	if (obj !== "Другой (ввести)") {
    		result.attr("disabled", "disabled");
    		if (obj === "Web Money (R0010100101010010) 1000 Р") {
    			result.attr("value", "R0010100101010010");
    		}
    		if (obj === "Visa Electron (Зарплатная) (7623545235426354) 28 000 Р") {
    			result.attr("value", "7623545235426354");
    		}
    		if (obj === "Visa Electron (Общак) (3745653645364556) 30 000 Р") {
    			result.attr("value", "3745653645364556");
    		}
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
        window.location.href = "index.html";
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

    $('#delete-wallet').click(function() {
        if (confirm("Вы действительно хотите удалить этот счёт из кошелька?"))
            window.location.href = "index.html";

        return false;
    });

    $('#menu-button').click(function() {
        var menu = $('#menu');
        if (menu.hasClass("hidden-phone")) {
            menu.hide();
            menu.removeClass("hidden-phone");
        }
        menu.toggle(100);
    });






    $('.slider__down-button').click(function() {
        var $list = $('.item-wrapper');
        $list.each(function(i) {
            $(this).children().unwrap();
        });
        $('.slider__list__list-item').slideDown();
    });

    $('.slider__list__list-item').click(function() {
        var id = $(this).data('id');
        var $this = $(this);
        var $list = $this.parent('.slider__list');
        var classList = $list.attr('class') + ' item-wrapper';
        var ul = $('<ul></ul>');
        ul.attr('class', classList);
        var ulHtml = ul.outerHTML();

        var beforeElems = $this.prevAll();
        var before = beforeElems.wrapAll(ulHtml).parent();

        var afterElems = $this.nextAll();
        var after = afterElems.wrapAll(ulHtml).parent();

        before.slideUp();
        after.slideUp();


        // $(before).each(function(index) {
        //     var li = $(this);
            
        //     setTimeout(function() {
        //         li.slideUp(2000);
        //     }, 2000 * index);
        // });

        // $(after).each(function(index) {
        //     var li = $(this);
            
        //     setTimeout(function() {
        //         li.slideUp(2000);
        //     }, 2000 * index);
        // });

    });
});
