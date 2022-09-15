var longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            // console.log(strs[i+2][j]);
            if (strs[i][j] == strs[i + 1][j] && strs[i + 1][j] == strs[i + 2][j]) {
                return (strs[i][j]);

            } else {
                return "0";
            }
        }
    }
};