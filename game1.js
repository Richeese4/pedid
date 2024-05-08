 var api = '74e98956be55214'
  $('#id').on('change', function () {
   var id = $(this).val();
   $.ajax({
    method: "GET",
    url: "https://api-rekening.my.id/trueid/game/freefire/ " + game + "/?id=" + id + "&key=" + api,
    beforeSend: function () {
     $('#cek').val('Sedang Mengecek ID Player');
    },
    success: function (response) {
     if (response.hasOwnProperty('error_msg')) {
      $('#cek').val(response.error_msg);
      $('#nick').text('Gagal Cek!');
     } else {
      $('#cek').val(response.nickname);
      $('#nick').text(response.nickname);
      $('#linkBeli').show();
      $('#spaces').show();
     }
    }
   });
  });