$(document).ready(function() {
    
    var nightMode = localStorage.getItem('nightMode');
  
    if (nightMode === 'true') {
      enableNightMode();
    }
  
    $('#night-mode-toggle').click(function() {
      toggleNightMode();
    });
  
    function enableNightMode() {
      $('body').addClass('dark-mode');
      $('#night-mode-toggle').text('Disable Night Mode');
      localStorage.setItem('nightMode', 'true');
    }
  
    function disableNightMode() {
      $('body').removeClass('dark-mode');
      $('#night-mode-toggle').text('Enable Night Mode');
      localStorage.setItem('nightMode', 'false');
    }
  
    function toggleNightMode() {
      if ($('body').hasClass('dark-mode')) {
        disableNightMode();
      } else {
        enableNightMode();
      }
    }
  });

  
$(document).ready(function() {
    
  $('#read-more').click(function() {
    $('.more').slideToggle();
    $(this).text(function(_, text) {
       return text === 'Read More' ? 'Read Less' : 'Read More';
    });
  });
  
  });
  