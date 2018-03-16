const vm = new Vue({ //vm =viewmodel
  el : "#app", //tell it what element it will bind/mount in the html

  data : {
    welcomeMessage : "Welcome to my first Vue app!",

    deliciousFruit : [//placing objects for the list
      { name: "apple", flavour:  "tasty!"},
      { name: "orange", flavour:  "orangey!"},
      { name: "raspberry", flavour:  "bestest!"}
    ],

        hasVue : true,
        vuemessage : "you can haz cheezeVue!",
  },

  methods : {
    logClicked(e){ //e=event
      console.log(e.currentTarget, this);//this means something different in vue. this points at the view reference itself.
    }

  }

});
