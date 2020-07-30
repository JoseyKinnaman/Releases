import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function() {
  const data = async () => new Promise(resolve => {
    setTimeout(() => resolve(window.apiResponse), 1000)
  });
console.log(window.apiResponse)



  const sortReleases = e => {
    const { value = 'name' } = e.target
    console.log('sorted', value);
  }
 

    (async () => {
    const $sort = document.getElementById('sort')
    $sort.addEventListener('change', sortReleases)
    const response = await data()
    console.log(`${response.releases.length} Releases`)
    getElements(response);
      // $("#card").html(`<h3>${response.releases.length} </h3>`);
  })();
  function getElements(response) {
    if (response) {
      $("#cards").html(`<h3>${response.releases[0].artist}</h3>`);
    } else if (response === false) {
      $("#cards").html(`<h3> Release cannot be found. </h3>`
      );
    } else {
      $('#cards').html(`<h3> ${response}</h3>`);
    }
  }
});