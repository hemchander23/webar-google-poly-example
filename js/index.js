AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      let $color = $(evt.detail.target);
      let state = $color.data("state");;
      restUpdate({
        name: $color.data("lamp-id"),
        state: state,
        color: evt.detail.target.id
      });
    });
  }
});

function restUpdate(lamp){
$.ajax({
  type: "POST",
  url: '/api/ikea/update',
  data: {
    id 			: 65538,
    name 		: lamp.name,
    state 	: lamp.state,
    color   : lamp.color
  }
});
}
