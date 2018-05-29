
Vue.component('game-header', {
    template: ['<header>',
    '<div class="title">',
        '<h1>Twin Game</h1>',
    '</div>',
    '<game-controls></game-controls>',
    '</header>'].join(''),
});

Vue.component('game-controls', {
    template: ['<div class="controls">',
                '<div class="selector">',
                    '<select name="parejas" @change="refreshTarget();">',
                        '<option value="2">Fácil</option>',
                        '<option value="4">Medio</option>',
                        '<option value="5">Difícil</option>',
                    '</select>',
                '</div>',
                '<img class="refresh" src="icons/baseline-refresh-24px.svg" @click="refreshTarget"></img>',
            '</div>'].join(''),
    methods: {
        refreshTarget: function () {
            console.log("Refresh")
        }
    },
});


Vue.component('game-board', {
    template: '<span>board</span>'
});

Vue.component('game-overlay', {
    template: '<span>overlay</span>'
});

const app = new Vue({
    el: 'main',
    template: [
        '<div class="view">',
            '<game-header></game-header>',
            '<game-board></game-board>',
            '<game-overlay></game-overlay>',
        '</div>'
    ].join('')
});