function toggleMenu(show) {
    document.getElementById('fullscreenMenu').classList.toggle('hidden', !show);
}

function toggleMenu(show) {
    var $menu = $('#fullscreenMenu');
    var $items = $menu.find('.menu-item');

    if (show) {
      $menu.removeClass('hidden');

      // انیمیشن مرحله به مرحله نمایش آیتم‌ها
      $items.each(function(i) {
        var $this = $(this);
        setTimeout(function() {
          $this.addClass('show');
        }, i * 150);
     });
    } else {
      // انیمیشن مخفی شدن آیتم‌ها
      $items.each(function(i) {
        var $this = $(this);
        setTimeout(function() {
          $this.removeClass('show');
        }, i * 100);
      });

      // بعد از انیمیشن ها منو رو مخفی کن
      setTimeout(function() {
        $menu.addClass('hidden');
      }, 100 * $items.length + 400);
  }
}