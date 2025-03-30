
function minimumIndex(input: number[]): number {
    const NO_VALID_SPLIT_EXISTS = -1;
    const candidateForDominantElement = findValueOfCandidateForDominantElement(input);
    if (!isValidCandidateForDominantElement(input, candidateForDominantElement)) {
        return NO_VALID_SPLIT_EXISTS;
    }
    return findIndexSplit(input, candidateForDominantElement);
};

function findValueOfCandidateForDominantElement(input: number[]): number {
    let candidateValue = Number.MIN_SAFE_INTEGER;
    let candidateFrequency = 1;

    for (let value of input) {
        if (value === candidateValue) {
            ++candidateFrequency;
            continue;
        }
        --candidateFrequency;
        if (candidateFrequency === 0) {
            candidateValue = value;
            candidateFrequency = 1;
        }
    }

    return candidateValue;
}

function isValidCandidateForDominantElement(input: number[], candidateValue: number): boolean {
    let candidateTotalFrequency = 0;
    for (let value of input) {
        if (candidateValue === value) {
            ++candidateTotalFrequency;
        }
    }
    return candidateTotalFrequency > Math.floor((1 + input.length) / 2);
}

function findIndexSplit(input: number[], dominantElementValue: number): number {
    let indexSplit = 0;
    let frequencyDominantElement = 0;

    for (let value of input) {
        if (value === dominantElementValue) {
            ++frequencyDominantElement;
        }
        if (frequencyDominantElement > Math.floor((1 + indexSplit) / 2)) {
            break;
        }
        ++indexSplit;
    }
    return indexSplit;
}
