// Given a value V and array coins[] of size M, the task is to make the change for V cents, given that you have an infinite 
	// supply of each of coins{coins1, coins2, ..., coinsm} valued coins. Find the minimum number of coins to make the change. 
	// If not possible to make change then return -1.


class Solution {
    
	minCoins(coins, V, M)
	{
			
			let table = new Array(V+1);
			
			table[0] = 0;
			
			for (let i=1;i<=V;i++) {
					table[i] = Number.MAX_VALUE;
			}
			
			for (let i=1;i<=V;i++) {
					for (let j=0;j<M;j++) {
							if (coins[j] <= i) {
									let sub_res = table[i - coins[j]];
									
									if (sub_res !== Number.MAX_VALUE && sub_res + 1 < table[i]) {
											table[i] = sub_res + 1;
									}
							}
					}
			}
			
			if (table[V] === Number.MAX_VALUE) {
					return -1;
			}
			
			return table[V];
	}
}