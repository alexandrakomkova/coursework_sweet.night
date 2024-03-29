$(".table").on("click", function(){
  if($("#_place").val() == "стол 1")
  {
    $("#chosen_table").text("Вы выбрали стол №1");
  }
  else
    if($("#_place").val() == "стол 2")
  {
    $("#chosen_table").text("Вы выбрали стол №2");
  }
  else
    if($("#_place").val() == "стол 3")
  {
    $("#chosen_table").text("Вы выбрали стол №3");
  }
  else
    if($("#_place").val() == "стол 4")
  {
    $("#chosen_table").text("Вы выбрали стол №4");
  }
  else
    if($("#_place").val() == "стол 5")
  {
    $("#chosen_table").text("Вы выбрали стол №5");
  }
});
$("#send_mail").on("click", function(){
  var name = $("#_name").val().trim(); //трим убирает пробелы
  var phone = $("#_phone").val().trim();//вал берет значение
  var email = $("#_email").val().trim();
  var date = $("#_date").val().trim();
  var place = $("#_place").val();
  var datetime = $("#_datetime").val().trim();

  if(name == "")
  {
    $("#error").text("Введите ваше имя");
    return false;
  }
  else
    if(phone == "" || phone.length < 13 )
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
    else
      if(place == "")
      {
        $("#error").text("Выберите место в зале");
        return false;
      }

    $("#error").text("");
    $("#chosen_table").text("");

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
