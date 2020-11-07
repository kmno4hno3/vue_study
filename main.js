new Vue({
  el: '#app',
  data: {
    number: 0,
    x: 0,
    y: 0
  }, 
  methods: {
    countUp: function(times){
      this.number += 1 * times
    },
    chnageMousePosition: function(event, divideNumber){
      this.x = event.clientX / divideNumber
      this.y = event.clientY / divideNumber
    }, 
    myAlert: function(){
      alert('アラート')
    }
  }
})