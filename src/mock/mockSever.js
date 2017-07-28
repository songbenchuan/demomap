import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/test/main', {
  code: 0, //表示成功获取数据
  data: data.info
})

