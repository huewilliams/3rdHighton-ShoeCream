var icons = {
    "soccer":"fa fa-futbol",
    "baseball":"fa fa-baseball-ball",
    "basketball":"fa fa-basketball-ball",
    "golf":"fa fa-golf-ball",
    "volleyball":"fa fa-volleyball-ball",
}

$("document").ready(function(){
    $(".sports").on("click", function(){
        clearInterval(timeout);
        $(".sports").removeClass('active');
        $(this).addClass('active');
        now = $(this).find("img").attr('alt');
        $(".nowname").html(now.toUpperCase());
        $(".nowimg").attr("src",data[now].img);
        cnt = 1;
        $(".slider").css('background-color', '#fff');
        $(`.slider:nth-child(${cnt})`).css('background-color', '#CD4843');
        $(".third").html(data[now].data[cnt - 1].name);
        $(".img1, .rsimg1").attr('src', data[now].data[0].img).attr("alt", data[now].data[0].name);
        $(".img2, .rsimg2").attr('src', data[now].data[1].img).attr("alt", data[now].data[1].name);
        $(".img3, .rsimg3").attr('src', data[now].data[2].img).attr("alt", data[now].data[2].name);
        $(".img4, .rsimg4").attr('src', data[now].data[3].img).attr("alt", data[now].data[3].name);
        $(".img5, .rsimg5").attr('src', data[now].data[4].img).attr("alt", data[now].data[4].name);
        $(".imgslide").css({marginLeft:'-'+(cnt-1)+'00%'});
        $(".head > .icon > i").attr('class',icons[now]);
        customsettimeout();
        $(".shoes").eq(0).click();
    });
    $(".shoes").on("click", function(){
        $(".shoes").removeClass('active');
        $(this).addClass('active');
        var name = $(this).find("img").attr("alt");
        getData(name);
    });

});

function getData(query){
    $.ajax({
        url:'/blog.php',
        type:'get',
        data:{'query' : query},
        success: function(data){
            $('.blog-list').empty();
            var json = JSON.parse(data);
            var items = json.items;
            if(items.length==0){
                $('.blog-list').html("<h2><center>게시물이 존재하지 않습니다.</center></h2>");
            }
            for(var i = 0; i < items.length; i++){
                var txt = `<li>
                    <ul>
                        <li class="title" onclick="window.open('${items[i].link}','_blank')">${items[i].title}</li>
                        <li class="description">${items[i].description}</li>
                    </ul>
                </li>`;
                $('.blog-list').append(txt);
            }
        }
    });
    $.ajax({
        url:'/shop.php',
        type:'get',
        data:{'query' : query},
        success: function(data){
            $('.shop-list').empty();
            var items = JSON.parse(data);
            if(items.length==0){
                $('.shop-list').html("<h2><center>상품이 존재하지 않습니다.</center></h2>");
            }
            for(var i = 0; i < items.length; i++){
                var txt = `<li>
                        <ul>
                            <img src="${items[i].image}" alt="">
                            <li class="title" onclick="window.open('${items[i].link}','_blank')">${items[i].title}</li>
                            <li class="mallname">${items[i].mallName}</li>
                            <li class="price">${items[i].lprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</li>
                        </ul>
                    </li>`;
                $('.shop-list').append(txt);
            }
        }
    });
}
