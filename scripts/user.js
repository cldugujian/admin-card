window.onload = function () {

    $("body").height(innerHeight);

    // 鼠标图片替换 - 手机端不需要
    let cursor = {
        el:$(".js_cursor"),
        flag:false,
        enter:function () {
            let _this = this;
            $(document).mouseenter(function () {
                _this.flag = true;
                _this.el.show();
            });
        },
        leave:function () {
            let _this = this;
            $(document).mouseleave(function () {
                _this.flag = false;
                _this.el.hide();
            });
        },
        move:function () {
            let _this = this;
            $(document).mousemove(function (e) {
                if( _this.flag ){
                    _this.x = e.pageX;
                    _this.y = e.pageY;
                    $(".js_cursor").css({
                        left:_this.x,
                        top:_this.y
                    });
                }
            });
        },
        run:function () {
            this.enter();
            this.move();
            this.leave();
        }

    };

    // 移动端适配
    let rem = {
        // 隐藏浏览器状态栏
        hideBar:function () {
            setTimeout(function() {
                window.scrollTo(0, 1)
            }, 0);
        },
        // 屏幕适配
        response:function () {
            let fontSize;
            if( innerWidth<innerHeight ){
                fontSize = 100*innerWidth/360 + "px";
            }else{
                fontSize = 100*innerWidth/640 + "px";
            }
            $("html,body").css({ fontSize:fontSize });
        },
        // 改变屏幕大小时
        resize:function () {
            let _this = this;
            $(window).resize(function () {
                _this.response();
            });
        },
        // 屏幕旋转时
        rotate:function (target) {
            let width = document.documentElement.clientWidth;
            let height = document.documentElement.clientHeight;
            if (width < height) {
                target.width(height);
                target.height(width);
                target.css({
                    top: (height - width)/200+"rem",
                    left: -(height - width)/200+"rem",
                    transform: "rotate(90deg)",
                });
            }
            let evt = "onorientationchange" in window ? "orientationchange" : "resize";
            window.addEventListener(evt, function () {
                setTimeout(function () {
                    let width = document.documentElement.clientWidth;
                    let height = document.documentElement.clientHeight;
                    if (width > height) {
                        target.width(width);
                        target.height(height);
                        target.css({
                            top: 0,
                            left: 0,
                            transform: "none",
                        });
                    }
                    else {
                        target.width(height);
                        target.height(width);
                        target.css({
                            top: (height - width)/200+"rem",
                            left: -(height - width)/200+"rem",
                            transform: "rotate(90deg)",
                        });
                    }
                }, 200);

            }, false);
        },
        // 执行以上所有方法
        run:function () {
            // this.response();
            // this.resize();
            this.hideBar();
            this.rotate($("#game"));
        }
    };

    // 游戏主体
    let card = {
        // 卡片数据
        data: [
            {
                level:"1",
                name:"第一关",
                preTime:4000,
                gameTime:15000,
                list:[
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                ],
            },
            {
                level:"2",
                name:"第二关",
                preTime:3000,
                gameTime:12000,
                list:[
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                ],
            },
            {
                level:"3",
                name:"第三关",
                preTime:6000,
                gameTime:20000,
                list:[
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                ]
            },
            {
                level:"4",
                name:"第四关",
                preTime:4000,
                gameTime:18000,
                list:[
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                ]
            },
            {
                level:"5",
                name:"第五关",
                preTime:10000,
                gameTime:30000,
                list:[
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "5", src: "images/5.jpg"},
                ]
            },
            {
                level:"6",
                name:"第六关",
                preTime:7000,
                gameTime:25000,
                list:[
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "1", src: "images/1.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "3", src: "images/3.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "5", src: "images/5.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "6", src: "images/6.jpg"},
                    {name: "2", src: "images/2.jpg"},
                    {name: "4", src: "images/4.jpg"},
                    {name: "6", src: "images/6.jpg"},
                ]
            },
        ],
        // newData用来存放新数组
        newData:null,
        // num用来记录第几次点击
        num:2,
        // 发牌顺序
        postIndex:null,
        // 当前关卡
        currentLevel:0,
        // 当前关卡的数据
        currentData:function () {
            return this.data[this.currentLevel];
        },
        // 提示消息
        tips:function (msg) {
            // 生成一个提示
            let tips = $('<div class="tips">'+ msg + '</div>');
            // 1s后自动消失
            $("#game").append(tips).find(".tips").fadeIn(300).delay(1000).fadeOut(300,function () {
                $(this).remove();
            });
        },
        // 阻止鼠标右键
        mouseFalse:function () {
            document.oncontextmenu = function(){
                return false;
            }
        },
        // 加载完成后
        load:function () {
            setTimeout(function () {
                // 去除加载动画
                $(".js_loading").fadeOut(500,function () {
                    $(this).remove();
                });
                // 去除所有图片
                $(".js_image").remove();
                // 呈现开始按钮
                setTimeout(function () {
                    $(".js_begin").addClass("begin_active");
                },500);
            },100);
            // 播放背景音乐
            let audioBgMusic = $(".js_audio_bg_music")[0];
            let flag = true;
            audioBgMusic.play();
            document.ontouchstart = function () {
                if( flag ){
                    if( !audioBgMusic.play() ){
                        audioBgMusic.play();
                    }
                }
                flag = false;
            };
        },
        // 初始化卡片
        run:function () {
            // 复制data数组
            let cache = this.currentData().list.slice(0);
            // 先清空数组
            this.newData = [];
            // 遍历数组并生成相应的HTML内容
            while (cache.length > 0) {
                // 生成一个随机数
                let random = parseInt(cache.length * Math.random());
                // 向新数组中添加旧数组的数据
                this.newData.push(
                    '<li class="card_list card_init js_card_list js_audio_card_trigger clickable" name="' + cache[random].name + '">' +
                        '<img draggable="false" class="card_true" src=' + cache[random].src + '>' +
                        '<img draggable="false" class="card_reverse" src="images/reverse.jpg">' +
                    '</li>'
                );
                // 去除旧数组中的数据
                cache.splice(random, 1);
            }
            // 添加html内容并显示
            $(".js_card").html(this.newData.join(""));
        },
        // 发牌动画
        postCard:function () {
            let _this = this;
            // 总宽度
            let totalWidth = $(".js_card").width();
            // 因为每张图片宽高相同，所以可以取第一个卡片作为参考
            let target = $(".js_card_list:first");
            // 参考卡片的宽度
            let width = target.width();
            // 参考卡片的高度
            let height = target.height();
            // 卡片之间的间距
            let margin = (totalWidth-width*6)/5;
            setTimeout(function () {
                // 每张卡片先移除默认class，再按照顺序排列发放
                $(".js_card_list").eq(_this.postIndex).removeClass("card_init").css({
                    top:parseInt(_this.postIndex/6)*(height+margin),
                    left:_this.postIndex%6*(width+margin)
                });
                // 如果没发完，那就继续发，发完为止
                _this.postIndex<_this.currentData().list.length && _this.postCard();
                // 递增
                _this.postIndex++;
            },100);
        },
        // 所有卡片切换
        toggle:function () {
            $(".js_card_list").toggleClass("active clickable");
        },
        // 先全部摊开
        pre:function () {
            let _this = this;
            _this.toggle();
            setTimeout(function () {
                // 重置并播放计时音效
                let audioCount = $(".js_audio_count");
                audioCount[0].currentTime = 0;
                audioCount.trigger("play");
                _this.toggle();
                _this.num = 0;
                //倒计时
                _this.countDown();
            },_this.currentData().preTime+1000);
            setTimeout(function () {
                // 文字提示
                $(".js_info_txt").text("预览结束").fadeIn(300).delay(500).fadeOut(300);
            },_this.currentData().preTime);
        },
        // 倒计时
        countDown:function () {
            let _this = this;
            // 获取提示文字及倒计时文字
            let infoTxt = $(".js_info_txt");
            // 获取时间
            let cd = _this.currentData().gameTime/1000;
            _this.countDown.timer = setInterval(function () {
                if( cd > 0 ){
                    cd --;
                    // 若果小于10s则再前面补上一个"0";
                    let finalCd = cd<10 ? "0" + cd : cd;
                    infoTxt.fadeIn(0).text("00:"+finalCd);
                    // 如果时间小于5s，则文字变红并警示
                    cd<5 && infoTxt.addClass("ready_danger");
                }else{
                    // 播放失败音效
                    $(".js_audio_failed").trigger("play");
                    // 暂停并重置计时音效
                    let audioCount = $(".js_audio_count");
                    audioCount.currentTime = 0;
                    audioCount.trigger("pause");
                    // 不可点击
                    _this.num = 2;
                    // 取消警示并提示
                    infoTxt.removeClass("ready_danger").text("很遗憾，时间到了~").delay(2000).fadeOut();
                    // 再来一局？
                    setTimeout(function () {
                        $(".js_next").text("再来一局").addClass("next_active");
                    },2500);
                    // 清除定时器
                    clearInterval(_this.countDown.timer);
                    _this.countDown.timer = null;
                }
            },1000);
        },
        // 显示文字并倒计时
        txt:function () {
            let _this = this;
            setTimeout(function () {
                // 倒计时移除警示
                $(".js_info_txt").removeClass("ready_danger").text(_this.currentData().name).fadeIn(300).delay(500).fadeOut(300,function () {
                    $(this).text("开始预览...").fadeIn(300).delay(500).fadeOut(300,function () {
                        // 全部摊开
                        _this.pre();
                    });
                });
            },1800);
        },
        // 卡片点击事件
        onclick:function () {
            let _this = this;
            // 分别保存第一次和第二次点击的卡片
            let first,second;
            // 初始化点击
            _this.num = 2;
            $(".js_card_list").click(function () {
                // 如果当前卡片可点击
                if( $(this).hasClass("clickable") ){
                    // 播放点击音效
                    let audioTap = $(".js_audio_tap");
                    audioTap.trigger("pause");
                    audioTap[0].currentTime=0;
                    audioTap.trigger("play");
                    // 如果是第一次点击，记录下当前卡片
                    if( _this.num == 0 ){
                        _this.num = 1;
                        first = $(this);
                        // 切换显示
                        $(this).toggleClass("active clickable");
                    }
                    // 如果是第二次点击，记录下当前卡片
                    else if( _this.num == 1 ){
                        _this.num = 2;
                        second = $(this);
                        // 切换显示
                        $(this).toggleClass("active clickable");
                        // 如果两次卡片相同，则固定住，否则再反转回去
                        if( first.attr("name") == second.attr("name") ){
                            _this.num = 0;
                            setTimeout(function () {
                                // 判断是否已翻开所有卡片
                                if( $(".active").length == _this.newData.length ){
                                    // 暂停并重置计时音效
                                    let audioCount = $(".js_audio_count");
                                    audioCount.currentTime = 0;
                                    audioCount.trigger("pause");
                                    // 播放胜利音效
                                    $(".js_audio_victory").trigger("play");
                                    // 下一关按钮
                                    $(".js_next").text( _this.currentLevel == (_this.data.length-1) ? "通关啦，真厉害！" : "下一关" ).addClass("next_active");
                                    // 清除定时器
                                    clearInterval(_this.countDown.timer);
                                    _this.countDown.timer = null;
                                }else{
                                    // 播放匹配音效
                                    let audioMatched = $(".js_audio_matched");
                                    audioMatched[0].currentTime = 0;
                                    audioMatched.trigger("play");
                                    // 文字提示
                                    _this.tips("真棒");
                                }
                            },500);
                        }else{
                            // 播放错误音效
                            $(".js_audio_error").trigger("play");
                            // 1s后可以再次点击
                            setTimeout(function () {
                                first.toggleClass("active clickable");
                                second.toggleClass("active clickable");
                                _this.num = 0;
                            },1000);
                        }
                    }
                }
            });
        },
        // 点击开始游戏
        handle:function () {
            // 卡片复位
            this.postIndex = 0;
            // 初始化卡片
            this.run();
            // 发牌
            this.postCard();
            // 添加点击事件
            this.onclick();
            // 文字变化
            this.txt();
        },
        // 点击"开始游戏"
        begin:function () {
            let _this = this;
            // 点击开始或下一关时，播放开始音效
            $(".js_audio_begin_trigger").click(function () {
                // 判断是"开始游戏"还是"下一关"
                if( $(this).hasClass("begin") ){
                    // 按钮移出
                    $(this).removeClass("begin_active").delay(800).fadeOut(300,function () {
                        // 删除开始按钮
                        $(this).remove();
                    });
                }else{
                    // 按钮移入
                    $(this).removeClass("next_active");
                    // 文字消失
                    $(".js_info_txt").text("").fadeOut();
                    // 判断当前是重来一句？下一关？
                    if( $(this).text() != "再来一局" ){
                        // 判断是不是最后一关
                        if( _this.currentLevel != _this.data.length-1 ){
                            // 下一关
                            _this.currentLevel++;
                        }else{
                            return;
                        }
                    }
                }
                let audioObject={};
                audioObject.volume  = 1;
                audioObject.timer = setInterval(function () {
                    if( audioObject.volume  > 0.4 ){
                        audioObject.volume  -= 0.1;
                    }else{
                        clearInterval(audioObject.timer);
                        audioObject.timer = null;
                    }
                    $(".js_audio_bg_music")[0].volume  = audioObject.volume ;
                },50);
                // 播放开始音效
                $(".js_audio_begin").trigger("play");
                setTimeout(function () {
                    // 开始游戏
                    _this.handle();
                    // 播放发牌音效
                    $(".js_audio_refresh").trigger("play");
                },1100);
            });
        },
        // 入口函数
        start: function () {            
            // 若果屏幕宽度大于1024，就启用鼠标指针
            if( innerWidth >= 1024 ){ cursor.run(); };
            // 画面适配
            rem.run();
            // 去除加载动画
            this.load();
            // 阻止鼠标右键
            this.mouseFalse();
            // 点击开始
            this.begin();
        }
    };

    // 开始游戏
    card.start();

};