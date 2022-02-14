package com.mundandi.demo;

import java.util.Arrays;
import java.util.PriorityQueue;

public class MeetingRooms {
    public static int solve(int[][] A) {
        Arrays.sort(A, (o1, o2) -> o1[0] - o2[0]);
        int count = 1;
        int index = 1;
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.add(A[0][1]);
        while (index < A.length) {
            minHeap.add(A[index][1]);
            if (A[index][0] < minHeap.peek()) {
                count++;
            } else {
                minHeap.poll();
            }
            index++;
        }
        return count;
    }
}
