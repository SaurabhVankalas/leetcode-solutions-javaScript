# Given an m x n matrix, return all elements of the matrix in spiral order.

class Solution:
    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:
        res = []
        visited = set()
        n = len(matrix[0])
        m = len(matrix)
        # print(m,n)
        i = 0
        j = -1
        # flows = ["left", "up", "right", "down"]
        flowIdx = 2
        c = 0
        while c < m*n:
            origI = i
            origJ = j
            if flowIdx == 0:
                if j == 0:
                    flowIdx += 1
                    i -= 1
                else:
                    j -= 1
            elif flowIdx == 1:
                if i == 0:
                    flowIdx += 1
                    i += 1
                else:
                    i -= 1
            elif flowIdx == 2:
                if j == n - 1:
                    flowIdx += 1
                    i += 1
                else:
                    j += 1
            elif flowIdx == 3:
                if i == m - 1:
                    flowIdx = 0
                    j -= 1
                else:
                    i += 1
            
            temp = str(i) + str(j)
            if temp in visited:
                flowIdx += 1
                if flowIdx == 4:
                    flowIdx = 0
                i = origI
                j = origJ
            else:
                visited.add(temp)
                res.append(matrix[i][j])
                c += 1
        return res