export const getFormatedString = (arg: string) => {
const tmp =  arg.replace(/[\[\]{}""]/g, '')
return tmp.replaceAll(',', '\n')
}