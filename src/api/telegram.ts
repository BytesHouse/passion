

const baseUrl = "https://api.telegram.org/bot6719000010:AAGF4aT0w_jai9FgurWFEpCODKlFAfbZI1g"
export const sendMessage = async (message: string):Promise<void>=>{
    const url: string = `${baseUrl}/sendMessage?chat_id=-4172350740&text=${message}`

    const respoonse = await fetch(baseUrl + '/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '-4172350740',
            parse_mode: "html",
            text: message
        })
    })
    console.log('response',respoonse)
}