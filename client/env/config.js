// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'FILL_ME_IN';
