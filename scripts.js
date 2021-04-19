$(document).ready(function() { 
    $(function quotes() {
      $.ajax({
        method: "GET",
        url: "https://smileschool-api.hbtn.info/quotes",
      })
      .done(function(data) {
        $("#content").removeClass("loader");
        data.forEach(item => {
          let active = "";
  
          // the first one has the active
          if (item.id == 1) {
            active = "active";
          }
  
          $("#content").append(
            '<div class="carousel-item '+ active +'">' +
              '<div class="container-opinion d-flex justify-content-center flex-column flex-sm-row align-items-center">' +
                '<figure class="mx-auto profile-photo">' +
                  '<img class="d-block w-100 mx-" alt="profile-photo" src="' + item.pic_url +'">' +
                '</figure>' +
                '<div class="info-profile d-flex flex-column">' +
                  '<p class="opinion-text">' + item.text + '</p>' +
                  '<p class="person-name">' + item.name + '</p>' +
                  '<p class="profesion">' + item.title + '</p>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        });
        
      });
    });
    
})


