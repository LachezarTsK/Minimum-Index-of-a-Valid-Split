
#include <span>
#include <limits>
#include <vector>
using namespace std;

class Solution {

    static const int NO_VALID_SPLIT_EXISTS = -1;

public:
    int minimumIndex(const vector<int>& input) const {
        int candidateForDominantElement = findValueOfCandidateForDominantElement(input);
        if (!isValidCandidateForDominantElement(input, candidateForDominantElement)) {
            return NO_VALID_SPLIT_EXISTS;
        }
        return findIndexSplit(input, candidateForDominantElement);
    }

private:
    int findValueOfCandidateForDominantElement(span<const int> input) const {
        int candidateValue = numeric_limits<int>::min();
        int candidateFrequency = 1;

        for (const auto& value : input) {
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

    bool isValidCandidateForDominantElement(span<const int> input, int candidateValue) const {
        int candidateTotalFrequency = 0;
        for (const auto& value : input) {
            if (candidateValue == value) {
                ++candidateTotalFrequency;
            }
        }
        return candidateTotalFrequency > (1 + input.size()) / 2;
    }

    int findIndexSplit(span<const int> input, int dominantElementValue) const {
        int indexSplit = 0;
        int frequencyDominantElement = 0;

        for (const auto& value : input) {
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
};
