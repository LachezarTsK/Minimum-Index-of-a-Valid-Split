
import java.util.List;

public class Solution {

    private static final int NO_VALID_SPLIT_EXISTS = -1;

    public int minimumIndex(List<Integer> input) {
        int candidateForDominantElement = findValueOfCandidateForDominantElement(input);
        if (!isValidCandidateForDominantElement(input, candidateForDominantElement)) {
            return NO_VALID_SPLIT_EXISTS;
        }
        return findIndexSplit(input, candidateForDominantElement);
    }

    private int findValueOfCandidateForDominantElement(List<Integer> input) {
        int candidateValue = Integer.MIN_VALUE;
        int candidateFrequency = 1;

        for (int value : input) {
            if (value == candidateValue) {
                ++candidateFrequency;
                continue;
            }
            --candidateFrequency;
            if (candidateFrequency == 0) {
                candidateValue = value;
                candidateFrequency = 1;
            }
        }

        return candidateValue;
    }

    private boolean isValidCandidateForDominantElement(List<Integer> input, int candidateValue) {
        int candidateTotalFrequency = 0;
        for (int value : input) {
            if (candidateValue == value) {
                ++candidateTotalFrequency;
            }
        }
        return candidateTotalFrequency > (1 + input.size()) / 2;
    }

    private int findIndexSplit(List<Integer> input, int dominantElementValue) {
        int indexSplit = 0;
        int frequencyDominantElement = 0;

        for (int value : input) {
            if (value == dominantElementValue) {
                ++frequencyDominantElement;
            }
            if (frequencyDominantElement > (1 + indexSplit) / 2) {
                break;
            }
            ++indexSplit;
        }

        return indexSplit;
    }
}
