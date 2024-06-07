
const baseUrl = "https://api.telegram.org/bot6320442593:AAH8HpWhq8nV1UCkAf1274lI1w3mGrGxXKc"
export const sendMessage = async (message: string):Promise<void>=>{
    // eslint-disable-next-line
    const url: string = `${baseUrl}/sendMessage?chat_id=-1002130844342&text=${message}`
    const respoonse = await fetch(baseUrl + '/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '-1002130844342',
            parse_mode: "html",
            text: message
        })
    })
    
    console.log('response',respoonse)
}