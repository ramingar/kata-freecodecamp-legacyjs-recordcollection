const PROPS = {
    artist    : newValue => newValue,
    tracks    : (newValue, oldValue = []) => newValue ? [...oldValue, newValue] : undefined,
    albumTitle: newValue => newValue
}

// Only change code below this line
function updateRecords(records, id, prop, value) {
    const {[id]: album}                    = records;
    const {[prop]: property, ...restProps} = album;
    const newValue                         = PROPS[prop](value, album[prop]);
    const albumEdited                      = newValue
        ? {...album, [prop]: PROPS[prop](value, album[prop])}
        : {...restProps}
    ;

    return {...records, [id]: albumEdited};
}

export {updateRecords}