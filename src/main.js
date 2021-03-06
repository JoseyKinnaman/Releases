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
      
  })();
  function getElements(response) {
    if (response) {
      for (let i =0; i <= response.releases.length; i++) {
      $("#card").append(`<li>${response.releases[i].artist}
      ${response.releases[i].year}</li>`);
      }
    } else if (response === false) {
      $("#cards").html(`<h3> Release cannot be found. </h3>`
      );
    } else {
      $('#cards').html(`<h3> ${response}</h3>`);
    }
  }
});