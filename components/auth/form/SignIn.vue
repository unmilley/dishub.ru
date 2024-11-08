<template>
  <div class="card flex-shrink-0 w-full pt-0">
    <form class="card-body p-0" @submit.prevent="onSubmit">
      <ui-input
        name="email"
        type="email"
        placeholder="you@example.com"
        label="Email"
        :args="{ autocomplete: 'email' }"
      />
      <ui-input
        name="password"
        :type="isHidePasswd ? 'text' : 'password'"
        :placeholder="isHidePasswd ? 'oh hello' : '********'"
        label="Пароль"
        :args="{ autocomplete: 'current-password' }"
      >
        <template #label>
          <nuxt-link :to="$routing('reAccount')" class="label-text-alt link link-hover"> Забыли пароль? </nuxt-link>
        </template>
        <template #default>
          <span class="absolute right-3 top-12" @click="isHidePasswd = !isHidePasswd">
            <Icon
              :name="isHidePasswd ? 'bx:show' : 'bx:hide'"
              size="1.3rem"
              class="hover:text-opacity-100 cursor-pointer text-base-content"
              :class="{ 'text-opacity-50': !isHidePasswd }"
            />
          </span>
        </template>
      </ui-input>
      <div class="form-control mt-6">
        <div
          class="tooltip-bottom"
          :class="{ tooltip: !meta.valid }"
          data-tip="Fill in the fields"
          v-if="!isSubmitting"
        >
          <button type="submit" class="btn btn-ghost btn-outline w-full" :class="{ 'btn-disabled': !meta.valid }">
            Войти
          </button>
        </div>
        <div class="tooltip-bottom" :class="{ tooltip: isSubmitting }" data-tip="Trying to find you in the DB!" v-else>
          <button type="button" class="btn btn-ghost btn-outline w-full pointer-events-none select-none">
            <span class="loading loading-ring w-10"></span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { LoginSchema } from '@/src/validation'

const { handleSignIn } = useAuth()
const isHidePasswd = ref(false)

const { meta, handleSubmit, isSubmitting } = useForm<SignInCredential>({
  validationSchema: LoginSchema,
  initialErrors: {
    email: 'Пожалуйста, введите свой адрес электронной почты.',
    password: 'Пожалуйста, введите пароль.',
  },
})

const onSubmit = handleSubmit(async (values) => {
  await handleSignIn(values)
})
</script>
