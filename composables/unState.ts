export const useUnState = () => {
  const localSetting = useCookie('LOCAL_SETTINGS', {
    expires: new Date(+new Date() + 99e9),
    default: () => ({ btmNavTitle: false }),
  })
  return { localSetting }
}
