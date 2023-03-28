// Always works
import data from '@architect/shared/data/index.mjs'

export async function handler (event) {
  console.log("shared data", data)
  console.log(JSON.stringify(event, null, 2))
  return
}
