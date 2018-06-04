var cnt = 1;
var now = "soccer";
var timeout = null;
var data = {
    "baseball": {
        img: "image/baseball.png",
        data: [
            {
                img: "image/shoes/baseball/1.png",
                name: "아디다스 S85369",
                add: "아디퓨어 BB RUNNER 2"
            },
            {
                img: "image/shoes/baseball/2.png",
                name: "아식스 SFTA04",
                add: "브리온오더 야구 인조잔디화"
            },
            {
                img: "image/shoes/baseball/3.png",
                name: "아디다스 B39226",
                add: "아이콘 미드"
            },
            {
                img: "image/shoes/baseball/4.png",
                name: "미즈노 2KM33462",
                add: " 단화 교체형 징야구화"
            },
            {
                img: "image/shoes/baseball/5.png",
                name: "아디다스 49221",
                add: "아디스타트 포인트 TPU 미드 야구화"
            }
        ]
    },
    "basketball":{
        img: "image/basketball.png",
        data: [
            {
                img: "image/shoes/basketball/1.png",
                name: "나이키 에어조던1"
            },
            {
                img: "image/shoes/basketball/2.png",
                name: "나이키 에어조던5"
            },
            {
                img: "image/shoes/basketball/3.png",
                name: "나이키 에어조던9"
            },
            {
                img: "image/shoes/basketball/4.png",
                name: "휠라 케이지"
            },
            {
           
                img: "image/shoes/basketball/5.png",
           
                name: "휠라 케이지 TC"
            }
        ]
    },
    "soccer" : {
        img: "image/soccer.png",
        data:[
            {
                img:"image/shoes/soccer/1.png",
                name:"머큐리얼 슈퍼플라이 CR7"
            },
            {
                img:"image/shoes/soccer/2.png",
                name:"머큐리얼 베이퍼워 마지스타 오퍼스"
            },
            {
                img:"image/shoes/soccer/3.png",
                name:"하이퍼베놈 팬텀3"
            },
            {
                img:"image/shoes/soccer/4.png",
                name:"아디다스 F50 아디제로"
            },
            {
                img:"image/shoes/soccer/5.png",
                name:"메시가 받은 특별한 축구화(판매 X)"
            }
        ]
    },
    "volleyball" : {
        img: "image/volleyball.png",
        data:[
            {
                img:"image/shoes/volleyball/1.png",
                name:"나이키 819191-001"
            },
            {
                img:"image/shoes/volleyball/2.png",
                name:"스타 S-ST-JS5930-BL 에이스 블루"
            },
            {
                img:"image/shoes/volleyball/3.png",
                name:"아식스 111533003-2101"
            },
            {
                img:"image/shoes/volleyball/4.png",
                name:"미즈노 V1GA1705 웨이브 라이트닝 Z3 MID"
            },
            {
                img:"image/shoes/volleyball/5.png",
                name:"아식스 TVRA03-0901 리브레 CS"
            }
        ]
    },
    "golf" : {
        img: "image/golf.png",
        data:[
            {
                img:"image/shoes/golf/1.png",
                name:"아디제로 투어"
            },
            {
                img:"image/shoes/golf/2.png",
                name:"나이키골프 2018 로쉬 G"
            },
            {
                img:"image/shoes/golf/3.png",
                name:"아디다스골프 2016 360 트랙션 보아시스템"
            },
            {
                img:"image/shoes/golf/4.png",
                name:"캘러웨이 2017 쉐브 멀리건"
            },
            {
                img:"image/shoes/golf/5.png",
                name:"ECCO Golf Street"
            }
        ]
    },
}
$(document).ready(function () {
    $(".nowname").html(now.toUpperCase());
    $(".nowimg").attr("src",data[now].img);
    // $(`.slider:nth-child(${cnt})`).css('background-color', '#CD4843');
    $(".third").html(data[now].data[cnt - 1].name);
    $(".fourth").html(data[now].data[cnt - 1].add);
    $(".img1, .rsimg1").attr('src', data[now].data[0].img).attr("alt", data[now].data[0].name);
    $(".img2, .rsimg2").attr('src', data[now].data[1].img).attr("alt", data[now].data[1].name);
    $(".img3, .rsimg3").attr('src', data[now].data[2].img).attr("alt", data[now].data[2].name);
    $(".img4, .rsimg4").attr('src', data[now].data[3].img).attr("alt", data[now].data[3].name);
    $(".img5, .rsimg5").attr('src', data[now].data[4].img).attr("alt", data[now].data[4].name);
    getData(data[now].data[0].name);
    $(".imgslide").css({marginLeft:'-'+(cnt-1)+'00%'});
    $("#left-arrow").on("click", function () {
        cnt--;
        if (cnt < 1) cnt = 5;
        movement(cnt);
    });
    $("#right-arrow").on("click", function () {
        cnt++;
        if (cnt > 5) cnt = 1;
        movement(cnt);
    });
    customsettimeout();
});

function customsettimeout(){
    timeout = setInterval(function(){
        cnt++;
        if (cnt > 5) cnt = 1;
        movement(cnt);
    }, 5000);
}

function movement(no) {
    clearInterval(timeout);
    cnt = no;
    $(".slider").css('background-color', '#fff');
    $(`.slider:nth-child(${no})`).css('background-color', '#CD4843');
    $(".third").html(data[now].data[no - 1].name);
    $(".imgslide").animate({marginLeft:'-'+(cnt-1)+'00%'},500);
    customsettimeout();
}
