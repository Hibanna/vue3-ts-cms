import { IForm } from '@/base-ui/form/types'
export const form: IForm = {
  formItems: [
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名！'
    },
    {
      type: 'password',
      label: '密码',
      rules: [],
      placeholder: '请输入密码！'
    },
    {
      type: 'select',
      label: '喜欢的远动',
      rules: [],
      placeholder: '请选择喜欢的运动！',
      options: [
        { title: '滑雪', value: 'ski' },
        { title: '登山', value: 'climb' }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px'
}
