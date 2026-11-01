export type ScanState = {
    i: number;
    j: number;
}

export function advance(
    s: string,
    t: string,
    state: ScanState
): ScanState {
    const { i, j } = state;

    if (i === s.length || j === t.length) {
        return state;
    }

    const matched = s[i] === t[j];

    return {
        i: i + (matched ? 1 : 0),
        j: j + 1,
    };
}
