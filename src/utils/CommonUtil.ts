class CommonUtil {
  static commonUtil: CommonUtil = new CommonUtil()

  sleep(time = 5000) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, time)
    )
  }
}

export default CommonUtil.commonUtil
