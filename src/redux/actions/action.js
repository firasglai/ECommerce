
// nzid iteam
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// na7i iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// na7i ka3ba iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}