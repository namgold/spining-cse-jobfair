function getSV() {
    return [
        "1713057 Trần Văn Tâm", "1814812 ahihi tớ nè", "1912463 PHẠM HOÀNG VŨ", "1710187 Nguyễn Thị Trúc Ly", "1712638 Huỳnh Quốc Phú", "1712516 Lê Thành Nhơn", "1911900 ĐINH GIA QUANG", "1712025 Nguyễn Việt Long", "1811867 Ngô Tấn ĐẠT", "1814149 Nguyễn Duy Thìn", "1711807 Đỗ Đăng Khôi", "1710195 Nguyễn Đăng Hà Nam", "1912123 LÊ TRẦN HOÀNG THỊNH", "1714075 Cao Ngọc Xuân Yến", "1911704 NGUYỄN THỦY NGỌC", "1912190 NGUYỄN MAI THY", "1911594 HOÀNG ĐĂNG MINH", "1911591 ĐỖ QUANG MINH", "1910339 LÊ HỮU ĐỨC MINH", "1910644 NGUYỄN HOÀNG TRUNG", "1910123 NGUYỄN PHÙNG HẢI ĐĂNG", "1910094 Trần Đức Duy", "1911565 CAO THỊ THANH MAI", "1710477 Nguyễn Công Anh", "1910006 Nguyễn Ngọc Thái An", "1910060 NHAN MINH CHÂU", "1713239 Nguyễn Hữu Thắng", "1711371 Phạm Phước Hoài", "1910137 NGUYỄN HUỲNH ĐỨC", "1713454 Trần Hữu Thức", "1711948 Lê Công Linh", "1712855 Phan Tấn Quốc", "1710780 Lê Anh Duy", "1814182 Phan Khánh Thịnh", "1712831 Trần Minh Quân", "1911314 LƯƠNG THỊ QUỲNH HƯƠNG", "1711754 Từ Nguyên Gia Khiêm", "1710738 Nguyễn Công Danh", "1710738 Nguyễn Công Danh", "1711861 Nguyễn Hàn Mạnh Kiệt", "1711790 Nguyễn Trần Phương Khoa", "1711355 Nguyễn Lê Hoàng Hiệu", "1712179 Nguyễn Nhật Minh", "1711651 Đàm Ngọc Hương", "1713417 Đặng Nguyễn Minh Thư", "1812516 NGUYỄN VĂN HỮU", "1713177 Lê Thị Thanh Thảo", "1812869 Hồ Thiên Long", "1713775 Đinh Đức Tuấn", "1914661 Nguyễn Quốc Phú", "1710259 Bùi Việt Minh Quân", "1911296 ĐẶNG PHƯỚC VĨNH HƯNG", "1710735 Vương Chí Cường", "1913446 Nguyễn Trần Hoàng", "1712817 Lê Bá Quân", "1710228 Nguyễn Ngọc Phát", "1814710 Trần Khánh Tùng", "1912835 Trần Quốc Cường", "1810657 Trần Hoàng Việt", "1710009 Phan Gia Anh", "1710853 Đặng Văn Dũng", "1711271 Danh Trí Hiếu", "1710849 Cao Đăng Dũng", "1714050 Nguyễn Khải Vy", "1713521 Nguyễn Trung Tính", "1810388 Nguyễn Thành NHÂN", "1713215 Bùi Thanh Thắng", "1710433 Nguyễn Thành Khánh An", "1711014 Nguyễn Trần Minh Đăng", "1711457 Trần Xuân Hội", "1712802 Trần Thanh Quang", "1813084 Nguyễn Hoàng Minh", "1711726 Bùi Quốc Khải", "1613001 Dương Văn Tài", "1711547 Nguyễn Xuân Huy", "1912526 Nguyễn Đình An", "1912594 Nguyễn Quang Anh", "1711020 Chung Minh Đệ", "1811015 Lê Phương Khuê", "1810987 Đỗ Việt Vân Khanh", "1812924 Nguyễn Thăng Long", "1814436 Lê Thanh TRIỀU", "1711835 Võ Đình Khương", "1710934 Châu Thành Đạt", "1713375 Đỗ Vương Thế Thục Anh", "1812883 LÊ HỮU VÕ LONG", "1814205 Nguyễn Phi Thông", "1814220 Nguyễn Văn THUẦN", "1713490 Phạm Hồng Tiến", "1612305 Đoàn Lê", "1712380 Nguyễn Duy Nguyên", "1713511 Công Huyền Tôn Nữ Ngọc Huyền", "1712964 Hồ Công Sơn", "1712928 Hoàng Văn Sang", "1713952 Phạm Hồng Việt", "1812694 PHẠM NGUYỄN THÁI KHƯƠNG", "1713153 Nguyễn Công Thành", "1814506 LÊ HOÀNG BẢO TRUNG", "1812426 Trần Quang Huy", "1612115 Nguyễn Hoàng Nam"
    ]
}
jQuery.extend( jQuery.easing, {
    easeOutElastic: function(x, t, b, c, d) {
        var ts=(t/=d)*t;
        var tc=ts*t;
        return b+c*(33*tc*ts + -106*ts*ts + 126*tc + -67*ts + 15*t);
    }
})
$(document).ready(function() {
    var users = [],
        shuffled = [],
        loadout = $("#loadout"),
        default_duration_time = 3000,
        easing = ["easeOutCirc", "easeOutExpo", "easeOutBack", "easeOutElastic"],
        default_maxLength = 300,
        force = 0;

    var lines = getSV();
    for (var i = 0;i < lines.length;i++)
        if(lines[i].length > 0)
            users.push(lines[i]);

    Pressure.set('#roll', {
        change: function(_force, event) {
            $("#power-bar > span").width(_force*100 + "%");
            force = _force;
        }
    });

    $("#roll").click(function() {
        duration_time = default_duration_time + 5 * force* default_duration_time;
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
