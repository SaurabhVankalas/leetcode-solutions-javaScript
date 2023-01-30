# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        stack = []
        res = []

        def backTrack(openN, closedN):
            if openN == n and closedN == n:
                res.append("".join(stack))
                return

            if openN < n:
                stack.append("(")
                backTrack(openN + 1, closedN)
                stack.pop()

            if closedN < openN:
                stack.append(")")
                backTrack(openN, closedN + 1)
                stack.pop()
        
        backTrack(0, 0)
        return res

# instance = Solution()
# print(instance.generateParenthesis(5))