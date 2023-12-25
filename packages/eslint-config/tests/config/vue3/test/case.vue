<script setup>
import { ref } from 'vue';

const count = ref(0);


</script>

<template>
    <MyComponent>test</MyComponent>
    <!-- eslint-disable vue/no-undef-components -->
  <div   >{{ count }}</div>
    <div
        :attr="[
            a,
        ]" />
    <div :attr="[ 'foo' ]" />
    <div
        :attr="[
            a,
            b, c,
        ]" />
    <div :attr="()=>a" />
    <div
        :attr="function foo()
        {
            return true;
        }" />
    <div :attr="{ my_pref: 1 }" />
    <button @click="() => fn([a, b,])" />
    <button @click="($event,) => fn()" />
    <button
        @click="() => {
            fn([a, b,])
            fn([
                a,
                b
            ])
        }" />
    <input :value="[2000 ,12 ,31]">
    <input :value="{ y: 2000 ,m: 12 ,d: 31 }">
    <button @click="foo(a ,b)" />
    <button @click="(a ,b) => {}" />
    <button @click="function (a ,b) {}" />
    <MyComponent v-slot="[a ,b]">
        {{ b }}
    </MyComponent>
    {{ [a /*comment*/ ,/*comment*/b] }}
    <button
        @click="
            fn(a, b)
        " />
    <CustomButton
        :data="[
            1
            , 2
            , 3
        ]" />
    <div
        :attr="foo
            .bar" />
    <div :attr="foo['bar']" />
    <div :[foo[`bar`]]="a" />
    <div v-if="'str' == 'str'" />
    <div :foo="foo ()" />
    <div :attr="{ a :1 }" />
    <div :[{a:1}.a]="{ a : 1 }.a" />
    <div
        @click="
            if(foo) {
            //...
            }else if(bar) {
            //...
            }else{
            //...
            }
        " />
    <div
        @click="
            if(foo) {
                //...
            }else if(bar) {
                //...
            }else{
                //...
            }
        " />
    <div
        :[(function(){return(1)})()]="(function(){
            return(1)
        })()" />
    <div>{{ (() => '........................................................................................')() }}</div>
    <div
        :class="{
            test: someReallyLongCondition ?
                aVeryLongOutput : thisCantFitOnASingleLine,
        }" />
    <button @click="console.log">
        {{ condition && 'console' }}
    </button>
    <button @click="console.info">
        {{ condition && 'console' }}
    </button>
    <button @click="console.error">
        {{ condition && 'console' }}
    </button>
    <CustomButton v-if="-2" />
    <CustomButton v-else-if="true" />
    <CustomButton v-show="{}" />
    <CustomButton v-if="0 < 1" />
    <CustomButton v-if="0 || 1" />
    <CustomButton v-if="`foo`" />

    <div
        @attr="() => {
            var {} = foo;
            var [] = foo;
            var { a: {} } = foo;
            var { a: [] } = foo;
        }" />
    <div
        @attr="function foo({}) {}" />
    <div :class="(foo + bar)" />
    {{ (foo + bar) }}
    <div class="foobar" />
    <div class="foo bar" />
</template>

<style scoped>
.text {
    color: v-bind('foo(a,b)')
}
.text {
    color: v-bind(foo[`bar`])
}
.text {
    color: v-bind("foo[`bar`]")
}
.text {
    color: v-bind('foo ()')
}
</style>
