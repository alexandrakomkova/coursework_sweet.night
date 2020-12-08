$("#send_mail").on("click", function(){
  var name = $("#_name").val().trim(); //трим убирает пробелы
  var phone = $("#_phone").val().trim();//вал берет значение
  var email = $("#_email").val().trim();
  var place = $("#_place").val().trim();
  var date = $("#_date").val().trim();
  var datetime = $("#_datetime").val().trim();

  if(name == "")
  {
    $("#error").text("Введите ваше имя");
    return false;
  }
  else
    if(phone == "" || phone.length < 13 || phone == "+375441111111" )
    {
      $("#error").text("Введите номер телефона не менее 13 символов");
      return false;
    }
  else
    if(email == "")
    {
      $("#error").text("Введите ваш email");
      return false;
    }
  else
    if(date == "")
    {
      $("#error").text("Введите дату для бронирования места");
      return false;
    }
  else
    if(datetime == "")
    {
      $("#error").text("Введите время для бронирования места");
      return false;
    }
    $("#error").text("");

    $.ajax({
      url: '../php/mail.php', //куда отправляются наши данные на обработку
      type: 'POST', //тип передачи данных
      cache: false, //кеширование не надо
      data: { 'name': name,
      'phone number': phone,
      'email': email,
      'place': place,
      'date': date,
      'time': datetime,
    }, //то что передадим в маил.пхп
      dataType: 'html', //тип передаваемых данных
      beforeSend: function() {
        $("#send_mail").prop("disabled", true);//делаем кнопку не активной
      },//то что сработает до отправки
      success: function(data) {
        if(data == false)
        {
          alert("Что-то пошло не так..Ваша заявка не отправлена");
        }
        else
        {
          $("#form").trigger("reset");
        }
        $("#send_mail").prop("disabled", false);//делаем кнопку активной т.е снова можно нажимать и отправлять
      }//после отправки данных вызывается
    });



});
