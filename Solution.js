
/**
 * @param {number[]} input
 * @return {number}
 */
var minimumIndex = function (input) {
    const NO_VALID_SPLIT_EXISTS = -1;
    const candidateForDominantElement = findValueOfCandidateForDominantElement(input);
    if (!isValidCandidateForDominantElement(input, candidateForDominantElement)) {
        return NO_VALID_SPLIT_EXISTS;
    }
    return findIndexSplit(input, candidateForDominantElement);
};

/**
 * @param {number[]} input
 * @return {number}
 */
function findValueOfCandidateForDominantElement(input) {
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

/**
 * @param {number[]} input
 * @param {number} candidateValue 
 * @return {boolean}
 */
function isValidCandidateForDominantElement(input, candidateValue) {
    let candidateTotalFrequency = 0;
    for (let value of input) {
        if (candidateValue === value) {
            ++candidateTotalFrequency;
        }
    }
    return candidateTotalFrequency > Math.floor((1 + input.length) / 2);
}

/**
 * @param {number[]} input
 * @param {number} dominantElementValue 
 * @return {number}
 */
function findIndexSplit(input, dominantElementValue) {
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
