<template>
  <button>Sign In with Google</button>
</template>

<script>
export default {
  name: 'SigninButton',
};
</script>

<style lang="scss" scoped>
  button {
    border: 3px solid black;
    background: none;
    position: relative;
    padding: 13px;
    font-weight: bold;
    font-size: 1em;

    transition: color .3s ease-out;

    &::after {
      content: '';
      top: 0;
      left: 0;
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color:darkorchid;

      transform: scaleX(0);
      transition: transform .3s ease-out;
    }

    &:hover {
      color: white;
      cursor: pointer;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
</style>
