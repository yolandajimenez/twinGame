
Vue.component('game-header', {
    template: ['<header>',
    '<div class="title">',
        '<h1>Twin Game</h1>',
    '</div>',
    '<game-controls></game-controls>',
    '</header>'].join(''),
});

Vue.component('game-controls', {
    template: '<span>controls</span>'
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