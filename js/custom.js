/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.archipelago_subtheme_rpi = {
    attach: function (context, settings) {
      if ($(context).is('.view') || context == document) {
          $("#main-breadcrumbs").find('.views-display-link').remove();
          $(context).once('view-header-rpi').find('.view-header .views-display-link').each(function () {
            $(this).detach().appendTo("#main-breadcrumbs");
        });
      }
    }
  }
})(jQuery, Drupal);
