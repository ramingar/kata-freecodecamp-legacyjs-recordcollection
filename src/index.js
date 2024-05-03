const PROPS = {
    artist    : newValue => newValue,
    tracks    : (newValue, oldValue = []) => newValue && [...oldValue, newValue],
    albumTitle: newValue => newValue
}

// Only change code below this line
function updateRecords(records, id, prop, value) {
    const {[id]: album}                    = records;                           // extracting album what I want to edit from records
    const {[prop]: property, ...restProps} = album;                             // extracting property what I want to edit from album
    const newValue                         = PROPS[prop](value, album[prop]);   // setting new value
    const albumEdited                      = newValue                           // putting new value in album in case of newValue is not undefined
        ? {...album, [prop]: newValue}
        : {...restProps}
    ;

    return {...records, [id]: albumEdited};                                     // putting albumEdited in records
}

export {updateRecords}