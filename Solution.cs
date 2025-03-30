
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int NO_VALID_SPLIT_EXISTS = -1;

    public int MinimumIndex(IList<int> input)
    {
        int candidateForDominantElement = FindValueOfCandidateForDominantElement(input);
        if (!IsValidCandidateForDominantElement(input, candidateForDominantElement))
        {
            return NO_VALID_SPLIT_EXISTS;
        }
        return FindIndexSplit(input, candidateForDominantElement);
    }

    private int FindValueOfCandidateForDominantElement(IList<int> input)
    {
        int candidateValue = int.MinValue;
        int candidateFrequency = 1;

        foreach (int value in input)
        {
            if (value == candidateValue)
            {
                ++candidateFrequency;
                continue;
            }
            --candidateFrequency;
            if (candidateFrequency == 0)
            {
                candidateValue = value;
                candidateFrequency = 1;
            }
        }

        return candidateValue;
    }

    private bool IsValidCandidateForDominantElement(IList<int> input, int candidateValue)
    {
        int candidateTotalFrequency = 0;
        foreach (int value in input)
        {
            if (candidateValue == value)
            {
                ++candidateTotalFrequency;
            }
        }
        return candidateTotalFrequency > (1 + input.Count) / 2;
    }

    private int FindIndexSplit(IList<int> input, int dominantElementValue)
    {
        int indexSplit = 0;
        int frequencyDominantElement = 0;

        foreach (int value in input)
        {
            if (value == dominantElementValue)
            {
                ++frequencyDominantElement;
            }
            if (frequencyDominantElement > (1 + indexSplit) / 2)
            {
                break;
            }
            ++indexSplit;
        }

        return indexSplit;
    }
}
