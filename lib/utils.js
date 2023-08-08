/**
 *
 * @param {array} array
 * @param {number} chunkSize
 * @returns Object of page numbers as keys and "chunkSized" arrays as value
 * Ex.
 *    data = {
 *       0: [{...}, {...}],
 *       1: [{...}, {...}],
 *       2: [{...}]
 *    }
 */
export function sliceArrayByChunks(array, chunkSize) {
   let [res, pageCount] = [{}, 0]

   for (let i = 0; i < array.length; i += chunkSize) {
      res[pageCount] = array.slice(i, i + chunkSize)
      pageCount++
   }
   return res
}

/**
 *
 * @param {string} str
 * @param {number} maxLength
 * @returns string with ellipsis
 */
export function addEllipsis(str, maxLength) {
   if (str.length <= maxLength) {
      return str
   }

   const truncatedStr = str.substring(0, maxLength - 3)
   return truncatedStr + "..."
}
