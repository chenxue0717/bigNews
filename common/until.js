//登录和注册后台数据处理
const handleDataFormatForReq = (dataObj) => {
  let dataArr = []
  for (const key in dataObj) {
    dataArr.push(`${key}=${dataObj[key]}`)
  }
  dataArr = dataArr.join('&')
  return dataArr
}
