//ボタンテスト用 jQuery


var image_url;
var img_urls = [];
var file_name;

/* ラジオボタンを押したらファイルボタンの値をリセットしてサムネに値を渡す */
$(function(){
    var radio_src;
    var btn_number;
    $('input[name=selected_button]').on('click',function(){
        $('input[type=file]').val('');
        $('#choiced_img').attr('');
        btn_number = $(this).val();
        console.log(btn_number);

        /* input type="button"のCSSを元に戻す */
        $('#up_image').css({'border':'3px solid transparent','background-color':'transparent'});

        var image_name = btn_number + '.jpg';
        console.log(image_name);
        file_name = '/../static/img/kate-images/' + btn_number;
        btn_url = '/../static/img/kate-images/' + image_name;
        console.log(btn_url);
        radio_src = $('#choiced_img').prop('src',btn_url);

        image_url = btn_url;
        $('#js_return').text(image_url);

        console.log(radio_src);
        $('#choiced_img').show();
        return image_url,file_name;
        // return radio_src;
    });
});

/* ラジオボタンの値をリセット リセットボタン*/
$(function(){
    $('#radio_reset').click(function(){
        $(this.form).find('input[name="selected_button"]').val('').end().find(':checked').prop('checked', false);
    });
});

/* ボタンを押したらinput type="file"を押してラジオの値を消す */
$(function(){
    $('#up_btn').on('click',function(){
        $('#file_btn').click();
        $(this.form).find('input[name="selected_button"]').end().find(':checked').prop('checked', false);
        /* input type="button"のCSSで枠線を変える */
        $('#up_image').css({'border':'3px #ff0000 solid','background-color':'#ffeeee'});
    });
});

$(function() {
    // アップロードするファイルを選択
    $('input[type=file]').change(function() {
    var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
    if (! file.type.match('image.*')) {
        // クリア
        test = $(this).val('');
        return test;
        console.log(test);
    }

      // 画像表示
    var img_src;
    reader = new FileReader();
    reader.onload = function() {

        user_src = reader.result;

        var img_src = $('#choiced_img').attr('src', reader.result);
        console.log(img_src);
        return img_src;
        
    };
    $('#choiced_img').show();
    reader.readAsDataURL(file);

    // image_url = user_src;
    // console.log(image_url);
    console.log(user_src);
    $('#js_return').text(user_src);

    return img_src;

    }); 
});

$(function(){
    $('#sub_btn').click(function(){
        img_urls.push(image_url);
        window.location.href = '/results.html' + file_name;
    });
});