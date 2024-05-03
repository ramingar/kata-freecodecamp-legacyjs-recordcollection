import test from 'tape';
import {updateRecords} from '../src/index.js';

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist    : 'Bon Jovi',
        tracks    : ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist    : 'Prince',
        tracks    : ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// TESTS
test('-------- Test 1', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: []},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette']
            },
        '2548':
            {
                albumTitle: 'Slippery When Wet',
                artist    : 'Bon Jovi',
                tracks    : ['Let It Rock', 'You Give Love a Bad Name']
            },
        '5439': {albumTitle: 'ABBA Gold', artist: 'ABBA'}
    };
    const message  = 'After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA.';

    const actual = updateRecords(recordCollection, 5439, 'artist', 'ABBA');

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 2', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: []},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette']
            },
        '2548':
            {
                albumTitle: 'Slippery When Wet',
                artist    : 'Bon Jovi',
                tracks    : ['Let It Rock', 'You Give Love a Bad Name']
            },
        '5439': {albumTitle: 'ABBA Gold', tracks: ['Take a Chance on Me']}
    };
    const message  = 'After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), ' +
        'tracks should have the string Take a Chance on Me as the last and only element.';

    const actual = updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 3', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: []},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette']
            },
        '2548':
            {
                albumTitle: 'Slippery When Wet',
                tracks    : ['Let It Rock', 'You Give Love a Bad Name']
            },
        '5439': {albumTitle: 'ABBA Gold'}
    };
    const message  = 'After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set.';

    const actual = updateRecords(recordCollection, 2548, 'artist', '');

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 4', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: ['Addicted to Love']},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette']
            },
        '2548':
            {
                albumTitle: 'Slippery When Wet',
                artist    : 'Bon Jovi',
                tracks    : ['Let It Rock', 'You Give Love a Bad Name']
            },
        '5439': {albumTitle: 'ABBA Gold'}
    };
    const message  = 'After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), ' +
        'tracks should have the string Addicted to Love as the last element.';

    const actual = updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 5', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: []},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette', 'Free']
            },
        '2548':
            {
                albumTitle: 'Slippery When Wet',
                artist    : 'Bon Jovi',
                tracks    : ['Let It Rock', 'You Give Love a Bad Name']
            },
        '5439': {albumTitle: 'ABBA Gold'}
    };
    const message  = 'After updateRecords(recordCollection, 2468, "tracks", "Free"), ' +
        'tracks should have the string 1999 as the first element.';

    const actual = updateRecords(recordCollection, 2468, 'tracks', 'Free');

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 6', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: []},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette']
            },
        '2548': {albumTitle: 'Slippery When Wet', artist: 'Bon Jovi'},
        '5439': {albumTitle: 'ABBA Gold'}
    };
    const message  = 'After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set.';

    const actual = updateRecords(recordCollection, 2548, 'tracks', '');

    assert.deepEquals(actual, expected, message);
    assert.end();
});

test('-------- Test 7', (assert) => {
    const expected = {
        '1245': {artist: 'Robert Palmer', tracks: [], albumTitle: 'Riptide'},
        '2468':
            {
                albumTitle: '1999',
                artist    : 'Prince',
                tracks    : ['1999', 'Little Red Corvette']
            },
        '2548':
            {
                albumTitle: 'Slippery When Wet',
                artist    : 'Bon Jovi',
                tracks    : ['Let It Rock', 'You Give Love a Bad Name']
            },
        '5439': {albumTitle: 'ABBA Gold'}
    };
    const message  = 'After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), ' +
        'albumTitle should be the string Riptide.';

    const actual = updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');

    assert.deepEquals(actual, expected, message);
    assert.end();
});
