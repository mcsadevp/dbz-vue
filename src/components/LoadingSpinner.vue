<template>
    <div v-if="isLoading" class="loading-spinner">
      <img src="../../public/api/img/icon-nav.png" alt="Loading..." />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .loading-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 1rem;
  }
  
  .loading-spinner img {
    width: 100px;
    height: 100px;
  }
  </style>
  