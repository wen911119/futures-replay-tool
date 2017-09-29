<template>
    <div class="replay">
        <div class="graph">
            <candlestick-chart :points="points"></candlestick-chart>
        </div>
        <div class="flex">
            <div class="acount-info flex-1">
                <div class="config-box flex">
                    <div class="flex-1 flex flex-v-center">
                        初始资金：
                        <vue-number-input type="ufloat" placeholder="请输入初始资金" v-model="initMoney"></vue-number-input>
                    </div>
                    <div class="flex-1 flex flex-v-center">
                        策略：
                        <vue-number-input type="int" placeholder="空" v-model="short"></vue-number-input>
                        <vue-number-input type="int" placeholder="多" v-model="long"></vue-number-input>
                    </div>
                    <div class="action-btns flex-1">
                        <!-- <button :class="{'disable':ready}">保存</button> -->
                        <!-- <button :class="{'disable':!ready}">重置</button> -->
                        <button @click="play" v-if="timer===null">开始</button>
                        <button @click="pause" v-if="timer!==null">暂停</button>
                        <button @click="reset">重新开始</button>
                    </div>
                </div>
            </div>
            <div class="actions-log flex-1">操作日志</div>
        </div>
    </div>
</template>

<script>
import VueNumberInput from 'vue-number-input'
import CandlestickChart from '@/components/CandlestickChart/app.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            initMoney: 0,
            short: -10,
            long: 10,
            ready: false
        }
    },
    computed: {
        ...mapState({
            points: state => state.replay.points,
            timer: state => state.replay.timer
        })
    },
    methods: {
        ...mapActions({
            play: 'replay/PLAY'
        }),
        ...mapMutations({
            pause: 'replay/PAUSE',
            reset: 'replay/RESET'
        })
    },
    components: {
        VueNumberInput,
        CandlestickChart
    }
}
</script>

<style lang="scss" scoped>

</style>
