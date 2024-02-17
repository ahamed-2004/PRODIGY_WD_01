window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#555';
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  var menuItems = document.querySelectorAll('#navbar a');
  
  menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      this.style.color = '#ff0000'; // Change color on hover
    });
  
    item.addEventListener('mouseleave', function() {
      this.style.color = '#fff'; // Change color back on mouseout
    });
  });
  