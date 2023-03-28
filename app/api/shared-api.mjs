/**
 * Option 1: import from '@architect/shared`
 *
 * Result: Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@architect/shared' imported from /Users/simonmacdonald/Developer/macdonst/shared-code/app/api/shared-api.mjs
 */
// import data from '@architect/shared/data/index.mjs'

/**
 * Option 2: import from relative path
 *
 * Result: Works great in sandbox. Error in production.
 * {
    "errorType": "Error",
    "errorMessage": "Issue importing app/api//var/task/node_modules/@architect/views/api/shared-api.mjs.mjs",
    "stack": [
        "Error: Issue importing app/api//var/task/node_modules/@architect/views/api/shared-api.mjs.mjs",
        "    at Object.api (file:///var/task/router.mjs:76:13)",
        "    at async Runtime.combined [as handler] (/var/task/node_modules/@architect/functions/src/http/async/index.js:36:20)"
    ]
}
 */
import data from '../../models/data/index.mjs'

export async function get () {
  console.log('Shared data', data)
  return {
    json: { data: ['fred', 'joe', 'mary'] }
  }
}
