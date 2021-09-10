//Component One: Use DOM functions to grab the bark of the trees and change their color

AFRAME.registerComponent('change-tree-color',{
    init: function(){
        let sceneEl = document.querySelector('a-scene');
        sceneEl.querySelectorAll('a-cylinder')[0].setAttribute('color','blue');
        sceneEl.querySelectorAll('a-cylinder')[1].setAttribute('color', 'red');
    }
});

//Component Two: Everytime we hover over the snowman’s head we want it to turn purple

AFRAME.registerComponent('change-color-hover',{
    init: function(){
        let snowHead = this.el;
        snowHead.onmouseenter = function(){
            snowHead.setAttribute('color', 'purple');
        }

        snowHead.onmouseleave = function(){
            snowHead.setAttribute('color','white');
        }
    }
});

//Component Three: Everytime we click on the snowman’s body, we want it to turn into a random color
AFRAME.registerComponent('click-listener',{
    init: function(){
        let COLORS = ['red','green','blue','yellow','orange'];
        var snowBody = this.el;
        snowBody.onclick = function(){
            var randomIndex = Math.floor(Math.random() * COLORS.length);
            snowBody.setAttribute('color',COLORS[randomIndex]);
        }
    }
});