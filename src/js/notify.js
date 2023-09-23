import { Notify } from 'notiflix/build/notiflix-notify-aio';

function success(totalHits) {
  Notify.success(`Hooray! We found ${totalHits} images.`, {
        timeout: 2000,
      });
}

function wrongRequest() {
  Notify.failure("Sorry, there are no images matching your search query. Please try again.", {
        timeout: 2000,
      });
}

function error() {
  Notify.failure('Something went wrong. Please try again later.', {
        timeout: 2000,
      });
}

function noMoreResults() {
  Notify.failure(
      "We're sorry, but you've reached the end of search results.", {
        timeout: 2000,
      });
}

export { success, wrongRequest, error, noMoreResults };