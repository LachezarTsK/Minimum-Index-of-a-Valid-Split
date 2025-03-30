
class Solution {

    private companion object {
        const val NO_VALID_SPLIT_EXISTS = -1
    }

    fun minimumIndex(input: List<Int>): Int {
        val candidateForDominantElement = findValueOfCandidateForDominantElement(input)
        if (!isValidCandidateForDominantElement(input, candidateForDominantElement)) {
            return NO_VALID_SPLIT_EXISTS
        }
        return findIndexSplit(input, candidateForDominantElement)
    }

    private fun findValueOfCandidateForDominantElement(input: List<Int>): Int {
        var candidateValue = Int.MIN_VALUE
        var candidateFrequency = 1

        for (value in input) {
            if (value == candidateValue) {
                ++candidateFrequency
                continue
            }
            --candidateFrequency
            if (candidateFrequency == 0) {
                candidateValue = value
                candidateFrequency = 1
            }
        }

        return candidateValue
    }

    private fun isValidCandidateForDominantElement(input: List<Int>, candidateValue: Int): Boolean {
        var candidateTotalFrequency = 0
        for (value in input) {
            if (candidateValue == value) {
                ++candidateTotalFrequency
            }
        }
        return candidateTotalFrequency > (1 + input.size) / 2
    }

    private fun findIndexSplit(input: List<Int>, dominantElementValue: Int): Int {
        var indexSplit = 0
        var frequencyDominantElement = 0

        for (value in input) {
            if (value == dominantElementValue) {
                ++frequencyDominantElement
            }
            if (frequencyDominantElement > (1 + indexSplit) / 2) {
                break
            }
            ++indexSplit
        }

        return indexSplit
    }
}
