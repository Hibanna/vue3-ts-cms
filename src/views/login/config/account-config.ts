export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号！',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,8}$/,
      message: '请输入5~8位的字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '请输入3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
