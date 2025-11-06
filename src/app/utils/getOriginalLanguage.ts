export function getOriginalLanguage(language?: string | null) {
  if (!language) return 'Não informado'

  const normalizedLang = language.slice(0, 2).toLowerCase()

  try {
    return (
      new Intl.DisplayNames(['pt'], { type: 'language' }).of(normalizedLang) ||
      language
    )
  } catch (error) {
    console.warn(`Idioma inválido: ${language}`, error)
    return language
  }
}
