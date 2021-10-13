<template>
  <div>
    <style>
      :root {
        --theme-color: {{ colorTheme }};
      }
    </style>
    <div
      v-for="(d, i) in list"
      :key="i"
      class="item"
    >
      <div
        class="parent accordion-item1 heading"
        :v-b-toggle="d.id"
        v-b-toggle="d.id"
      >
        {{d.heading}}
      </div>
      <b-collapse
        :id="d.id"
        :visible="d.visibility"
        class="body text-left pr-4"
      >
        <div v-html="d.body" />
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    colorTheme: {
      type: String,
      default: () => '#1e306e'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_variables.scss';
.item {
  border-bottom: 1px solid $grey1;
  .accordion-text{
    font-weight: 300;
    margin-bottom: 30px;
    a {
      color: var(--theme-color);
      font-weight: 700;
      &:visited {
        color: var(--theme-color);
      }
    }
  }
  .heading {
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    min-height: 100px;
    padding-right: 30px;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.4;
    cursor: pointer;
    color:  var(--theme-color);
    &:after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate3d(0, -50%, 0) rotate(45deg);
      display: block;
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      content: "+";
      color: var(--theme-color);
      transition: .3s ease transform;
    }
    &.collapsed {
      color: $alur-dark-grey;
      &:after {
        transform: translate3d(0, -50%, 0);
      }
    }
  }
  .body {
    ul.order-list {
      list-style-type: circle !important;
      padding: 0 30px !important;
      margin: 0 !important;
    }
  }
}
</style>
