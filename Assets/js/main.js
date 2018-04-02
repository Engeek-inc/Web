  $(function() {
      $('#button01').click(function() {
          $.ajax({
                 type: 'GET',
                 url: 'test.html',
                 dataType: 'html',
                 success: function(data) {
                     $('#sample01').append(data);
                 },
                 error:function() {
                     alert('問題がありました。');
                 }
          });
      });
  });

/*  jQuery . ajax( {
                  url: 'test.html',
                  success: function( data ) {
                      jQuery( 'body' ) . html( data );
                      jQuery( 'body' ) . text( '読み込み成功' );
                  },
                  error: function( data ) {
                      jQuery( 'body' ) . text( '読み込み失敗' );
                  }
              } );
});*/
