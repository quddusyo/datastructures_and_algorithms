// fibonacci function
// dynamic programming
// big O(2^n) - not efficient time complexity
// function fib(n){
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }


// fibonacci function - improved (memoization) top down approach
// not fast because of overlapping subproblems / repition
// big O(N) - huge improvement
// function fib(n, memo=[]){
//     if(memo[n] !== undefined) return memo[n];
//     if(n <= 2) return 1;
//     let res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res;
// }


// fibonacci function - improved (tabulation) down up approach
// not fast because of overlapping subproblems / repition
// Time Complexity big O(N) - same as memoization
// Space Complexity - improvement in space complexity
function fib(n){
    if(n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}