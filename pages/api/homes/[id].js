import {homes} from '../../../data'

export default function handler({query: {id}}, res) {

    const filtered = homes.filter(home => home.id === id)
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Home with the id of ${id} could not be found`})
    }
 
}