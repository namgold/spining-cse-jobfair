$(document).ready(function() {
    var users = [],
        shuffled = [],
        loadout = $("#loadout"),
        default_duration_time = 500,
        easing = ["easeOutCirc", "easeOutExpo", "easeOutBack", "easeOutElastic"],
        default_maxLength = 300,
        force = 0;

    $('textarea').val("1612000\n1612001\n1612002\n1612003\n1612004\n1612005\n1612006\n1612007\n1612008\n1612009\n1612010\n1612011\n1612012\n1612013\n1612014\n1612015\n1612016\n1612017\n1612018\n1612019\n1612020\n1612021\n1612022\n1612023\n1612024\n1612025\n1612026\n1612027\n1612028\n1612029\n1612030\n1612031\n1612032\n1612033\n1612034\n1612035\n1612036\n1612037\n1612038\n1612039\n1612040\n1612041\n1612042\n1612043\n1612044\n1612045\n1612046\n1612047\n1612048\n1612049\n1612050\n1612051\n1612052\n1612053\n1612054\n1612055\n1612056\n1612057\n1612058\n1612059\n1612060\n1612061\n1612062\n1612063\n1612064\n1612065\n1612066\n1612067\n1612068\n1612069\n1612070\n1612071\n1612072\n1612073\n1612074\n1612075\n1612076\n1612077\n1612078\n1612079\n1612080\n1612081\n1612082\n1612083\n1612084\n1612085\n1612086\n1612087\n1612088\n1612089\n1612090\n1612091\n1612092\n1612093\n1612094\n1612095\n1612096\n1612097\n1612098\n1612099")
    var lines = $('textarea').val().split('\n');
    for (var i = 0;i < lines.length;i++)
        if(lines[i].length > 0)
            users.push(lines[i]);

    Pressure.set('#roll', {
        change: function(_force, event) {
            $("#power-bar > span").width(_force*100+"%");
            force = _force;
        }
    });

    $("#roll").click(function() {
        duration_time = default_duration_time + 3 * force* default_duration_time;
        maxLength = default_maxLength + force* default_maxLength;

        if (force<0.25)
            ease = "easeOutCirc";
        else if (force == 1)
            ease = "easeOutElastic";
        else 
            ease = easing[Math.floor(Math.random() * easing.length)];

        console.log("duration_time: ",duration_time);
        console.log("maxLength: ",maxLength);
        
        $("#roll").attr("disabled",true);
        var scrollsize = 0;
        $(loadout).html("");
        // while ($(loadout).firstChild) {
        //     $(loadout).firstChild.remove();
        // }

        $("#log").html("");
        let shuffled = []

        for(; shuffled.length < maxLength;) {
            tempUser = users;
            tempUser.shuffle();
            shuffled = shuffled.concat(tempUser);
        }
        shuffled = shuffled.slice(0, maxLength);
        loadout.css("top",-shuffled.length+"em");

        for(var i = 0; i < shuffled.length; i++)
            loadout.append('<tr><td><div class="roller"><div>' + shuffled[i] + '</div></div></td></tr>');
        console.log(ease);
        winner = randomEx(shuffled.length/2, shuffled.length/4*3);
        pos = (shuffled.length-winner+2) + "em";
        $("#loadout").animate({
            top: "+="+ pos
        }, duration_time, ease, function() {
            $("#roll").attr("disabled", false);
            var rollBox = $(".rollbox"),
                midLine = rollBox.offset().top + rollBox.height()
            console.log("rollBox.offset().top: ", rollBox.offset().top)
            console.log("rollBox.height(): ", rollBox.height())
            console.log("midLine: ", midLine)
            $('#loadout').children('td').each(function () {
                var center = window.innerWidth / 2;
                if($(this).offset().left < center && $(this).offset().left + 185 > center){
                    var text = $(this).children().text();
                    $("#log").append("THE WINNER IS<br/> <span class=\"badge\">"+text+"</span>");
                }
                
            });
        });
    });

    Array.prototype.shuffle = function() {
        var counter = this.length, temp, index;
        while (counter > 0) {
            index = (Math.random() * counter--) | 0;
            temp = this[counter];
            this[counter] = this[index];
            this[index] = temp;
        }
    }

    function randomEx(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
});
