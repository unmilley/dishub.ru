<template>
  <div class="card flex-shrink-0 w-full pt-0">
    <form class="card-body p-0" @submit.prevent="onSubmit">
      <ui-input
        name="username"
        type="text"
        placeholder="Rick_Sanchez"
        label="Имя пользователя"
        :args="{ autocomplete: 'first_name' }"
      />
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
        :args="{ autocomplete: 'new-password' }"
      >
        <template v-slot:default>
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
            Зарегистрироваться
          </button>
        </div>
        <div class="tooltip-bottom" :class="{ tooltip: isSubmitting }" data-tip="Trying to create your profile!" v-else>
          <button type="button" class="btn btn-ghost btn-outline w-full pointer-events-none select-none">
            <span class="loading loading-ring w-10"></span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/valibot'
import { email, minLength, nonEmpty, object, pipe, string } from 'valibot'
const { handleSignUp } = useAuth()

const isHidePasswd = ref(false)

const { meta, handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    object({
      username: pipe(
        string('Пожалуйста, введите ваше имя.'),
        minLength(1, 'Пожалуйста, введите ваше имя.'),
        minLength(4, 'Ваше имя должен состоять из 4 символов или более.')
      ),
      email: pipe(
        string('Пожалуйста, введите свой адрес электронной почты.'),
        nonEmpty('Пожалуйста, введите свой адрес электронной почты.'),
        email('Пожалуйста, введите свой адрес электронной почты.')
      ),
      password: pipe(
        string('Пожалуйста, введите пароль.'),
        minLength(6, 'Ваш пароль должен состоять из 6 и более символов')
      ),
    })
  ),
  initialErrors: {
    username: 'Пожалуйста, введите ваше имя.',
    email: 'Пожалуйста, введите свой адрес электронной почты.',
    password: 'Пожалуйста, введите пароль.',
  },
})

const onSubmit = handleSubmit(async (values) => {
  await handleSignUp(values)
})
</script>
