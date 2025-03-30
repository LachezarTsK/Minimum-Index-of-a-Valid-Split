
package main
import "math"

const NO_VALID_SPLIT_EXISTS = -1

func minimumIndex(input []int) int {
    candidateForDominantElement := findValueOfCandidateForDominantElement(input)
    if !isValidCandidateForDominantElement(input, candidateForDominantElement) {
        return NO_VALID_SPLIT_EXISTS
    }
    return findIndexSplit(input, candidateForDominantElement)
}

func findValueOfCandidateForDominantElement(input []int) int {
    candidateValue := math.MaxInt
    candidateFrequency := 1

    for _, value := range input {
        if value == candidateValue {
            candidateFrequency++
            continue
        }
        candidateFrequency--
        if candidateFrequency == 0 {
            candidateValue = value
            candidateFrequency = 1
        }
    }

    return candidateValue
}

func isValidCandidateForDominantElement(input []int, candidateValue int) bool {
    candidateTotalFrequency := 0
    for _, value := range input {
        if candidateValue == value {
            candidateTotalFrequency++
        }
    }
    return candidateTotalFrequency > (1 + len(input)) / 2
}

func findIndexSplit(input []int, dominantElementValue int) int {
    indexSplit := 0
    frequencyDominantElement := 0

    for _, value := range input {
        if value == dominantElementValue {
            frequencyDominantElement++
        }
        if frequencyDominantElement > (1 + indexSplit) / 2 {
            break
        }
        indexSplit++
    }

    return indexSplit
}
