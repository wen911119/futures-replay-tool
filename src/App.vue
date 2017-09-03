<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
require('@/style/normalize.css')
export default {
    name: 'app'
}
</script>

<style lang="scss">
@import './style/common.scss';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
}

@font-face {
    font-family: 'iconfont';
    src: url('./assets/iconfont.eot');
    src: url('./assets/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/iconfont.woff') format('woff'),
    url('./assets/iconfont.ttf') format('truetype'),
    url('./assets/iconfont.svg#iconfont') format('svg');
}
</style>
