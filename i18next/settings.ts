export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru' ,'uz' ,'tr','en']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng,) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng
  }
}