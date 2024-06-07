import image1 from '../assets/images/shops/sheriff.svg'
import image2 from '../assets/images/shops/drive.svg'
import image3 from '../assets/images/shops/blago.svg'
import image4 from '../assets/images/shops/miasko.svg'
import image5 from '../assets/images/shops/products.svg'
import image6 from '../assets/images/shops/baggete.svg'
import image7 from '../assets/images/shops/jasmine.svg'

export type ShopsType = {
    id: number,
    shopName: string,
    name: string,
    image: any,
    collectionId: string
}

export const shops = [
    {id: 0, shopName: 'products', name: 'Продукты', image: image5, collectionId: ''},
    {id: 1, shopName: 'sherif', name: 'Шериф', image: image1, collectionId: ''},
    {id: 2, shopName: 'drive', name: 'Кафе Drive', image: image2, collectionId: '1J0cQh0VNnW7rwNh8A4KuXjFogm2'},
    {id: 3, shopName: 'blagoda', name: 'Благода', image: image3, collectionId: ''},
    {id: 4, shopName: 'miasko', name: 'Мяско', image: image4, collectionId: ''},
    {id: 5, shopName: 'labagete', name: 'LaBagete', image: image6, collectionId: ''},
    {id: 6, shopName: 'jasmine', name: 'Jasmine Dragon', image: image7, collectionId: 'itx3fMmA0DPcTZKqO5vTKiib6uf2'},
    ]