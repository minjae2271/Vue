<template>
      <div class="user-container">
        <i class="fa-solid fa-user"></i>
        <div class="user-desc">
            <slot name="userName">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
          <div class="time">
              <slot name="time">
                  <!-- 상위 컴포넌트에서 정의할 영역 -->
              </slot>
          </div>
          <slot name="karma">

          </slot>
        </div>
      </div>
</template>

<script>
export default {
    props:{
        userInfo: Object,
    }
}
</script>

<style>

</style>