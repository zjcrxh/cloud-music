// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'zjc-0gmuxjk35654932f'
})

const db = cloud.database()

const playListCollection=db.collection('playlist')
// 云函数入口函数
exports.main = async (event, context) => {
  const res =await playListCollection.get()
  console.log('#######' + res.data)
  return res.data
}