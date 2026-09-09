var currentIndex = 0;

// Function to move the slider track using .css()
function slideImage() {
  var cardWidth = $(".product-card").outerWidth();
  var gap = 30; // spacing between cards on desktop
  var moveDistance = currentIndex * (cardWidth + gap);

  $(".slider-track").css("transform", "translateX(-" + moveDistance + "px)");
}

// NEXT BUTTON CLICK
$(".next-btn").click(function () {
  var screenWidth = $(window).width();
  var visibleCards = 2;

  // Check how many cards are visible based on screen width
  if (screenWidth >= 1400) {
    visibleCards = 4;
  } else if (screenWidth >= 1200) {
    visibleCards = 3;
  }

  var totalCards = $(".product-card").length;
  var maxLimit = totalCards - visibleCards;

  // Move forward only if we haven't reached the end
  if (currentIndex < maxLimit) {
    currentIndex++;
    slideImage();
  }
});

// PREVIOUS BUTTON CLICK
$(".prev-btn").click(function () {
  // Move backward only if we are past the first image
  if (currentIndex > 0) {
    currentIndex--;
    slideImage();
  }
});

// RESET POSITION ON WINDOW RESIZE
$(window).resize(function () {
  currentIndex = 0;
  $(".slider-track").css("transform", "translateX(0px)");
});

var currentIndexBest = 0;

// Function to slide the track
function updateBestSlider() {
  var screenWidth = $(window).width();
  var visibleCards = 2; // Default for mobile and tablet

  // 1400px view shows 4 items
  if (screenWidth >= 1400) {
    visibleCards = 4;
  } 
  // 1200px view shows 3 items
  else if (screenWidth >= 1200) {
    visibleCards = 3;
  }

  var totalCards = $(".product-card-best").length;
  var maxLimit = totalCards - visibleCards;

  // Keep index within boundaries
  if (currentIndexBest > maxLimit) {
    currentIndexBest = maxLimit;
  }
  if (currentIndexBest < 0) {
    currentIndexBest = 0;
  }

  var cardWidth = $(".product-card-best").outerWidth();
  var gap = 30; // Gap used for 1200px and 1400px
  var moveDistance = currentIndexBest * (cardWidth + gap);

  // Apply CSS transform directly
  $(".slider-track-best").css("transform", "translateX(-" + moveDistance + "px)");
}

// NEXT BUTTON CLICK
$(".next-btn-best").click(function () {
  var screenWidth = $(window).width();
  var visibleCards = 2;

  if (screenWidth >= 1400) {
    visibleCards = 4;
  } else if (screenWidth >= 1200) {
    visibleCards = 3;
  }

  var maxLimit = $(".product-card-best").length - visibleCards;

  if (currentIndexBest < maxLimit) {
    currentIndexBest++;
    updateBestSlider();
  }
});

// PREVIOUS BUTTON CLICK
$(".prev-btn-best").click(function () {
  if (currentIndexBest > 0) {
    currentIndexBest--;
    updateBestSlider();
  }
});

// RESET POSITION ON WINDOW RESIZE
$(window).resize(function () {
  currentIndexBest = 0;
  $(".slider-track-best").css("transform", "translateX(0px)");
});


var currentIndexLike = 0;

// Function to slide the track
function updateLikeSlider() {
  var screenWidth = $(window).width();
  var visibleCards = 2; // Default for mobile & tablet

  // 1400px view shows 4 items
  if (screenWidth >= 1400) {
    visibleCards = 4;
  } 
  // 1200px view shows 3 items
  else if (screenWidth >= 1200) {
    visibleCards = 3;
  }

  var totalCards = $(".product-card-like").length;
  var maxLimit = totalCards - visibleCards;

  // Keep index within boundaries
  if (currentIndexLike > maxLimit) {
    currentIndexLike = maxLimit;
  }
  if (currentIndexLike < 0) {
    currentIndexLike = 0;
  }

  var cardWidth = $(".product-card-like").outerWidth();
  var gap = 30; // Gap width on 1200px and 1400px
  var moveDistance = currentIndexLike * (cardWidth + gap);

  // Move the slider using CSS transform
  $(".slider-track-like").css("transform", "translateX(-" + moveDistance + "px)");
}

// NEXT BUTTON CLICK
$(".next-btn-like").click(function () {
  var screenWidth = $(window).width();
  var visibleCards = 2;

  if (screenWidth >= 1400) {
    visibleCards = 4;
  } else if (screenWidth >= 1200) {
    visibleCards = 3;
  }

  var maxLimit = $(".product-card-like").length - visibleCards;

  if (currentIndexLike < maxLimit) {
    currentIndexLike++;
    updateLikeSlider();
  }
});

// PREVIOUS BUTTON CLICK
$(".prev-btn-like").click(function () {
  if (currentIndexLike > 0) {
    currentIndexLike--;
    updateLikeSlider();
  }
});

// RESET SLIDER ON WINDOW RESIZE
$(window).resize(function () {
  currentIndexLike = 0;
  $(".slider-track-like").css("transform", "translateX(0px)");
});