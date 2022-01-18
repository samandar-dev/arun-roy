document.getElementById('modeBtn').addEventListener('click', function () {
  // document.getElementById('header').classList.toggle('dark');
  document.body.classList.toggle('light');
});

let elopenmodal = document. getElementById('openModal');
let elColsemodal = document. getElementById('close-btn');
let elModal = document. getElementById('Modal');


elopenmodal.addEventListener('click', function(){
  elModal.classList.add('show');
});

elColsemodal.addEventListener('click', function(){
  elModal.classList.remove('show');
});