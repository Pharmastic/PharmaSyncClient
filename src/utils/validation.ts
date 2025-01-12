import type { Issues } from 'valibot'

const getValidationErrors = (issues: Issues) => {
  const errorMap: Record<string, string> = {}

  for (const issue of issues) {
    if (issue.path?.[0]) {
      const field = issue.path[0].key as string
      errorMap[field] = issue.message
    }
  }

  return errorMap
}
export default getValidationErrors
